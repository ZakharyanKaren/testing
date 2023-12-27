from rest_framework import serializers
from .models import JobPost, JobDetails, ApplicantInfo, ContactUs


class JobDetailsSerializer(serializers.ModelSerializer):

    class Meta:
        model = JobDetails
        exclude = ('job_post', 'id')  # Exclude job_post from the fields


class JobPostSerializer(serializers.ModelSerializer):
    job_details = JobDetailsSerializer(read_only=True)

    class Meta:
        model = JobPost
        fields = '__all__'
        depth = 1

class ApplicantInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ApplicantInfo
        fields = '__all__'


class ContactUsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactUs
        fields = '__all__'
