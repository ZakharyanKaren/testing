import AppHeader from "../../containers/AppHeader/AppHeader";
import AppFooter from "../../containers/AppFooter/AppFooter";

const AppLayout: FCC = ({ children }) => (
  <div className='min-h-[100vh] flex flex-col justify-between'>
    <AppHeader />
    <main>{children}</main>
    <AppFooter />
  </div>
);

export default AppLayout;
