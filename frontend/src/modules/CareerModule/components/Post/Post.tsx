"use client";

import { FC } from "react";
import { useRouter } from "next/navigation";

import Divider from "@/shared/components/Divider/Divider";
import { CareerPostsData } from "@/shared/types";
import Image from "@/shared/components/Image/Image";

const Post: FC<CareerPostsData> = ({ job_title, description, remote, timing, id }) => {
  const router = useRouter();

  return (
    <div className='flex flex-col gap-y-6 md:gap-y-8 lg:gap-y-10 xl:gap-y-11'>
      <div className='w-full flex flex-col md:flex-row justify-between gap-6'>
        <div className='flex flex-col gap-y-6'>
          <div className='flex flex-col gap-y-3'>
            <p className='text-mbodym md:text-sbodym lg:text-bodym'>{job_title}</p>
            <p className='text-mbodyxs md:text-bodyxs'>{description}</p>
          </div>
          <div className='flex gap-x-[10px] md:gap-x-4 lg:gap-x-5 xl:gap-x-6'>
            <div className='flex items-center py-2 md:py-3 gap-x-1 pl-7 pr-[30px] rounded-[32px] border border-black'>
              <Image src='/svgs/location.svg' width={20} height={20} alt='location' />
              <p className='text-mbodyxs md:text-bodyxs h-[21px]'>{remote}</p>
            </div>
            <div className='flex items-center py-2 md:py-3 gap-x-1 pl-7 pr-[30px] rounded-[32px] border border-black'>
              <Image src='/svgs/clock.svg' width={20} height={20} alt='clock' />
              <p className='text-mbodyxs md:text-bodyxs h-[21px]'>{timing}</p>
            </div>
          </div>
        </div>
        <div
          className='flex justify-end gap-x-2 md:gap-x-3 h-fit cursor-pointer'
          onClick={() => router.push(`/career/post/${id}`)}
        >
          <span className='text-bodyxs md:text-bodys'>Apply</span>
          <Image width={24} height={24} src='/svgs/top_right_arrow_icon.svg' alt='arrow' />
        </div>
      </div>
      <Divider className='bg-black' />
    </div>
  );
};

export default Post;
