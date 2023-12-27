from rest_framework import viewsets, status
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response

from .models import JobPost, ApplicantInfo, ContactUs, JobDetails
from .serializers import JobPostSerializer, ApplicantInfoSerializer, ContactUsSerializer

class JobPostViewSet(viewsets.ModelViewSet):
    queryset = JobPost.objects.all()
    pagination_class = PageNumberPagination
    serializer_class = JobPostSerializer

    def get_queryset(self):
        queryset = JobPost.objects.all()
        remote = self.request.query_params.get('remote')
        timing = self.request.query_params.get('timing')
        job_type = self.request.query_params.get('job_type')
        if remote:
            queryset = queryset.filter(remote=remote)
        if timing:
            queryset = queryset.filter(timing=timing)
        if job_type:
            queryset = queryset.filter(job_type=job_type)
        return queryset

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        job_post = serializer.save()
        job_details_data = request.data.get('job_details', None)
        if job_details_data:
            JobDetails.objects.create(job_post=job_post, **job_details_data)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        job_details_data = request.data.get('job_details', None)
        if job_details_data:
            job_details_instance = instance.job_details
            for attr, value in job_details_data.items():
                setattr(job_details_instance, attr, value)
            job_details_instance.save()

        return Response(serializer.data)

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        # Explicitly delete the associated JobDetails, if it exists
        if hasattr(instance, 'job_details'):
            instance.job_details.delete()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)


class ApplicantInfoViewSet(viewsets.ModelViewSet):
    queryset = ApplicantInfo.objects.all()
    serializer_class = ApplicantInfoSerializer


class ContactUsViewSet(viewsets.ModelViewSet):
    queryset = ContactUs.objects.all()
    serializer_class = ContactUsSerializer
