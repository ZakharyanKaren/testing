import ModuleLayout from "@/shared/layouts/ModuleLayout/ModuleLayout";
import Image from "@/shared/components/Image/Image";

export default function AboutModule() {
  return (
    <ModuleLayout title1='About' title2='Outer Image' titleClassName='text-right'>
      <div className='flex flex-col md:flex-row gap-6 mt-6 sm-mt-8 md:mt-12 lg:mt-15 justify-center md:justify-between'>
        <div>
          <p className='text-mbodyxs lg:text-bodyxs max-w-[606px]'>
            Our team members have backgrounds in graphic design, architecture, fine arts, and sculpture. We create
            signage, art, custom furniture for specific brand experiences. <br />
            <br /> The magic about creation is that first there is nothing, then there is something. Something unique to
            a space and event that tells a story. We are focused on the details, the details that make the design come
            to life, the magic. <br />
            <br /> Our goal is to merge artistic value with practical design to best serve our client’s interest. We
            master detailed shop drawings and 3D renderings of spaces. As craftsmen, we can physically build anything we
            design. Our passion lies in bringing ideas, digital art, and branding to life.
          </p>
        </div>

        <Image
          src='/about/1.svg'
          width={343}
          height={425}
          alt='About'
          priority
          className='max-w-[343px] md:max-w-[370px] lg:max-w-[430px] xl:max-w-[490px] w-full self-center'
        />
      </div>
    </ModuleLayout>
  );
}
