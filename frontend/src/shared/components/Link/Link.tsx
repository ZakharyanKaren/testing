import { FC, ReactNode } from "react";
import NextLink from "next/link";

interface CustomLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

const Link: FC<CustomLinkProps> = ({ href, children, className }) => (
  <NextLink href={href} passHref className={className}>
    {children}
  </NextLink>
);

export default Link;
