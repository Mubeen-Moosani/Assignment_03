import Header from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";
const AppPage = () => {
  return (
    <>
      <div>
        <Header></Header>
        <div className="text-[30px] text-center my-[60px] font-bold">
          <h1>Coming Soon</h1>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};
export default AppPage;
