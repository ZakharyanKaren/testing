import Image from "@/shared/components/Image/Image";
import Link from "@/shared/components/Link/Link";

export default function NotFoundPage() {
  return (
    <div>
      <div className='flex flex-col justify-center items-center gap-[18px] pt-[237px] sm:pt-[220px] md:pt-[204px] lg:pt-[186px] xl:pt-[172px] pb-[245px] md:pb-[236px] xl:pb-[228px] px-9'>
        <div className='flex flex-col items-center gap-10 w-fit'>
          <Image
            src='/svgs/404.svg'
            width={302}
            height={146}
            alt='Not Found'
            priority
            className='w-full md:max-w-[322px] lg:max-w-[340px] xl:max-w-[352px]'
          />

          <p className='text-mbodyxs lg:text-bodys'>Page not found</p>
        </div>
        <div>
          <Link
            href='/'
            className='flex gap-[30px] bg-black text-white pr-4 py-3 lg:py-4 pl-6 lg:pl-[30px] rounded-32 w-fit'
          >
            <p>Home Page</p>

            <Image src='/svgs/arrow_right_icon.svg' width={24} height={24} alt='Right arrow' />
          </Link>
        </div>
      </div>
    </div>
  );
}
