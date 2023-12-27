export interface IFilterTabs {
  id: number;
  title: string;
  value: string;
  isActive: boolean;
}

export interface JobDetails {
  responsibilities: string[];
  required_qualifications: string[];
  industry: string;
  work_experience: string;
  deadline: string;
  description: string;
}

export interface CareerPostsData {
  id: number;
  job_details: JobDetails;
  job_title: string;
  description: string;
  remote: string;
  timing: string;
  job_type: string;
  creation_date: string;
}
