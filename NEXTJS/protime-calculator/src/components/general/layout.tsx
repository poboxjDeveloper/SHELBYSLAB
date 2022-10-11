import Navigation from 'components/navigation';

const Layout = ({ children }: { children: JSX.Element[] | JSX.Element }) => {
  return (
    <>
      <Navigation title="Title set for and by... the Layout component" />
      <main>{children}</main>
    </>
  );
};

export default Layout;
