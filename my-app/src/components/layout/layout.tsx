import Header from "../header/header";

interface ILayoutProps {
  children: React.ReactElement
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <Header />
      {children}
    </div>
  );
};

export { Layout };