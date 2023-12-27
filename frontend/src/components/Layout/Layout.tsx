import { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='pt-4 sm:pt-8 md:pt-12 lg:pt-16 xl:pt-20 px-4 sm:px-10 md:px-15 lg:px-20 xl:px-25 pb-30 sm:pb-35 md:pb-45 lg:pb-55 xl:pb-65 max-w-[1440px] w-full mx-auto'>
      {children}
    </div>
  );
}

export default Layout;
