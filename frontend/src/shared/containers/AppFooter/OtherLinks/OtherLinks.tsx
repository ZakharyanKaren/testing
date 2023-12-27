import Image from "@/shared/components/Image/Image";

function OtherLinks() {
  return (
    <div className='flex flex-col'>
      <Image
        src='/svgs/outer_image_footer_logo.svg'
        width={1200}
        height={160}
        alt='Outer Image logo'
        className='self-center w-[816px]'
      />

      <div className='flex flex-col flex-wrap md:flex-row justify-between gap-y-[6px] mt-4 md:mt-5 lg:mt-6 uppercase'>
        <a href='/' target='_blank' rel='noopener noreferrer'>
          Ⓒ Copyright 2023 outer image
        </a>
        <a href='/' target='_blank' rel='noopener noreferrer'>
          info@outerimagenyc.com
        </a>
        <div>
          <a href='/' target='_blank' rel='noopener noreferrer'>
            terms of service
          </a>
          <a href='/' target='_blank' rel='noopener noreferrer' className='ml-5'>
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
}

export default OtherLinks;
