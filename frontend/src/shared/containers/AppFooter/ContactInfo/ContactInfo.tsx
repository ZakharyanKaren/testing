import { awesomeSerif } from "@/shared/fonts/fonts";

function ContactInfo() {
  return (
    <div className='flex flex-col items-center gap-y-2 sm:gap-y-4 md:gap-y-6 lg:gap-y-9 xl:gap-y-12 text-center'>
      <h3 className={`${awesomeSerif.className} text-mxl sm:text-m md:text-l xl:text-xl italic antialiased`}>
        Contact
      </h3>
      <div className='flex flex-col gap-2 text-bodyxs uppercase'>
        <span>+1 (212) 661-2124</span>
        <span>226 42nd Street Brooklyn, NY 11232</span>
      </div>
    </div>
  );
}

export default ContactInfo;
