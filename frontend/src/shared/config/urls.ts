import InternalEnum from "../enums/internal.enum";
import SocialEnum from "../enums/social.enum";

const INTERNAL_LINKS = [
  {
    name: InternalEnum.ABOUT,
    href: "/about"
  },
  {
    name: InternalEnum.PROJECTS,
    href: "/projects"
  },
  {
    name: InternalEnum.SERVICES,
    href: "/services"
  },
  {
    name: InternalEnum.LATEST,
    href: "/latest"
  },
  {
    name: InternalEnum.CAREER,
    href: "/career"
  },
  {
    name: InternalEnum.CONTACT_US,
    href: "/contact-us"
  }
];

const SOCIAL_LINKS = [
  {
    name: SocialEnum.LINKEDIN,
    url: "/"
  },
  {
    name: SocialEnum.FACEBOOK,
    url: "/"
  },
  {
    name: SocialEnum.SOCIAL,
    url: "/"
  },
  {
    name: SocialEnum.TIKTOK,
    url: "/"
  },
  {
    name: SocialEnum.INSTAGRAM,
    url: "/"
  }
];

export { INTERNAL_LINKS, SOCIAL_LINKS };
