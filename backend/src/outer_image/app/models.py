from django.db.models import JSONField
from django.db import models

class JobPost(models.Model):
    job_title = models.CharField(max_length=255)
    description = models.TextField()
    remote = models.CharField(max_length=50)
    timing = models.CharField(max_length=50)  # e.g., full-time, part-time
    job_type = models.CharField(max_length=100)  # e.g., marketing, design
    creation_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.job_title


class JobDetails(models.Model):
    job_post = models.OneToOneField(JobPost, on_delete=models.CASCADE, related_name='job_details')
    description = models.TextField()
    responsibilities = JSONField(default=list)
    required_qualifications = JSONField(default=list)
    industry = models.CharField(max_length=100)
    work_experience = models.CharField(max_length=50)  # e.g., <1, 1-3, 3-5, 5+
    deadline = models.DateField()

    def __str__(self):
        return self.job_post.job_title



class ApplicantInfo(models.Model):
    job_post = models.ForeignKey(JobPost, related_name='applicants', on_delete=models.CASCADE)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=20)
    email = models.EmailField()
    cv = models.FileField(upload_to='cvs/')  # Store CV files in a 'cvs' directory

    def __str__(self):
        return f"{self.first_name} {self.last_name}"


class ContactUs(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=20)
    email = models.EmailField()
    company_name = models.CharField(max_length=255)
    position = models.CharField(max_length=100)
    location = models.CharField(max_length=255)
    project_description = models.TextField()

    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.company_name}"

