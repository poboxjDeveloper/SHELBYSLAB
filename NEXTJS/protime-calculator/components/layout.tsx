import Navigation from './navigation';
import Information from './information';

const Layout = ({ children }: { children: JSX.Element[] | JSX.Element }) => {
  return (
    <>
      <Navigation title="Title set for and by... the Layout component" />
      <main>{children}</main>
      <Information />
    </>
  );
};

export default Layout;
