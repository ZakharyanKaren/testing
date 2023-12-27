import SocialLinks from "./SocialLinks/SocialLinks";
import ContactInfo from "./ContactInfo/ContactInfo";
import OtherLinks from "./OtherLinks/OtherLinks";

function AppFooter() {
  return (
    <footer className='bg-black text-white w-full justify-self-end'>
      <div className='w-full max-w-[1440px] px-[16px] sm:px-[32px] md:px-[48px] lg:px-[64px] xl:px-[120px] pt-[76px] sm:pt-[77px] md:pt-[90px] lg:pt-[100px] xl:pt-[140px] pb-[16px] sm:pb-[20px] md:pb-[26px] lg:pb-[32px] xl:pb-[40px] mx-auto'>
        <div className='flex flex-col justify-between gap-y-[100px] sm:gap-y-[110px] md:gap-y-[120px] lg:gap-y-[134px] xl:gap-y-[170px]'>
          <SocialLinks />
          <ContactInfo />
          <OtherLinks />
        </div>
      </div>
    </footer>
  );
}

export default AppFooter;
