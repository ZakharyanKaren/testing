from django.contrib import admin
from django.utils.html import format_html

from .models import JobPost, JobDetails, ApplicantInfo, ContactUs


class JobDetailsInline(admin.StackedInline):
    model = JobDetails
    can_delete = False  # Optional: if you don't want to allow deleting JobDetails from the JobPost admin


class JobPostAdmin(admin.ModelAdmin):
    list_display = ('job_title', 'remote', 'timing', 'job_type', 'creation_date')
    list_filter = ('remote', 'timing', 'job_type')
    search_fields = ('job_title', 'description')
    inlines = [JobDetailsInline]

admin.site.register(JobPost, JobPostAdmin)


class ApplicantInfoAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'email', 'job_post_title', 'download_cv_link')
    search_fields = ('first_name', 'last_name', 'email', 'job_post__job_title')
    list_filter = ('job_post__job_title',)

    def job_post_title(self, obj):
        return obj.job_post.job_title

    def download_cv_link(self, obj):
        if obj.cv:
            return format_html("<a href='{}' download>Download CV</a>", obj.cv.url)
        return "No CV uploaded"

    download_cv_link.short_description = "CV"

admin.site.register(ApplicantInfo, ApplicantInfoAdmin)


class ContactUsAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'company_name', 'email')
    search_fields = ('first_name', 'last_name', 'company_name', 'email')

admin.site.register(ContactUs, ContactUsAdmin)
