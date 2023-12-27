import { SOCIAL_LINKS } from "@/shared/config/urls";
import Link from "@/shared/components/Link/Link";

import styles from "../footer.module.scss";

function SocialLinks() {
  return (
    <div className={styles.linksWrapper}>
      {SOCIAL_LINKS.map((link, index) => (
        <Link key={link.name} href={link.url} className={styles[`social-link-${index}`]}>
          {link.name}
        </Link>
      ))}
    </div>
  );
}

export default SocialLinks;
