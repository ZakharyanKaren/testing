import { ReactNode } from "react";

import Layout from "@/components/Layout/Layout";
import PageTitle from "@/shared/components/PageTitle/PageTitle";

interface IModuleLayoutProps {
  title1: string;
  title2: string;
  className?: string;
  titleClassName?: string;
  home?: boolean;
  header?: ReactNode;
}

const ModuleLayout: FCC<IModuleLayoutProps> = ({ children, header, titleClassName, className, ...pageTitleProps }) => (
  <section className={className}>
    {header}
    <Layout>
      <PageTitle className={titleClassName} {...pageTitleProps} />
      {children}
    </Layout>
  </section>
);

export default ModuleLayout;
