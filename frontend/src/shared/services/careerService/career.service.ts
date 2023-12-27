import instanceURL from "@/shared/config/instanceURL/instanceURL";
import ServicesEnum from "@/shared/enums/services.enum";
import { CareerPostsData, IResponse } from "@/shared/types";

export const getCareerPosts = (jobType?: string) => {
  let query: string = ServicesEnum.GET_CAREER_POSTS;
  if (jobType && jobType !== "View all") {
    query = `${ServicesEnum.GET_CAREER_POSTS}/?job_type=${jobType}`;
  }
  return instanceURL.get<IResponse<CareerPostsData[]>>(query);
};

export const getCareerPostById = (postId: number) =>
  instanceURL.get<CareerPostsData>(`${ServicesEnum.GET_CAREER_POSTS}/${postId}`);
