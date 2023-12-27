import { FC } from "react";

import { CareerPostsData } from "@/shared/types";
import Post from "@/modules/CareerModule/components/Post/Post";

interface CareerPostsDataaa {
  postsData: CareerPostsData[] | undefined;
}

const PostsContainer: FC<CareerPostsDataaa> = ({ postsData }) => (
  <div className='flex flex-col gap-y-6 md:gap-y-8 lg:gap-y-10 xl:gap-y-11'>
    {postsData?.map(postData => <Post key={postData.id} {...postData} />)}
  </div>
);

export default PostsContainer;
