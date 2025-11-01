import AppHeader from "./_components/appHeader";

const dashboardLayout = ({ children }) => {
  return (
    <div>
      <AppHeader />
      <div className="flex items-center my-5 justify-between p-4  md:px-20 lg:px-40">
      <div>{children}</div>

      </div>
     
    </div>
  );
}
export default dashboardLayout;