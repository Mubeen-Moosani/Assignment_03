import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Link from "next/link";
const ServicePage = () => {
  return (
    <>
      <div className=" bg-[url('/contact_bg_img.jpg')]">
        <Header></Header>
        <div className=" my-[30px] w-[900px] m-auto">
          <div className=" bg-yellow-400 w-[80%] m-auto p-[30px] text-[30px] font-bold border-2 border-yellow-400  rounded-[50px]">
            <h1 className="w-fit m-auto">
              Innovative Digital Solutions for Web & Mobile
            </h1>
          </div>
          <div className="flex flex-col justify-between gap-4">
            <div className=" my-[30px] flex justify-content gap-4">
              <div className=" flex flex-col jusitify-between py-[30px] gap-4 w-[60%] border-l-4 border-y-4 border-yellow-400  px-[30px]">
                <h1 className="text-[30px] font-bold text-yellow-400   text-center    ">
                  Web Development
                </h1>
                <h2>
                  Creating responsive, high-performance websites designed to
                  captivate and convert.
                </h2>
                <li className="list-none">
                  <ul>Custom Website Design</ul>
                  <ul>Responsive & Mobile-First Development</ul>
                  <ul>SEO-Friendly Structure</ul>
                  <ul>Fast & Secure Performance</ul>
                  <ul>Easy Content Management</ul>
                </li>

                <Link
                  href="/service/web"
                  className="border-2 w-fit m-auto p-[10px] bg-yellow-400 rounded-[50px] font-bold"
                >
                  More Details
                </Link>
              </div>
              <div>
                <img src="computer.jpg" alt="" />
              </div>
            </div>
            <div className=" my-[30px] flex justify-content gap-4">
              <div className=" border-yellow-400 w-[40%]  items-center flex ">
                <img src="mobile.png" alt="" />
              </div>
              <div className=" flex flex-col jusitify-between py-[30px] gap-4 w-[60%] border-r-4 border-y-4 border-yellow-400  px-[30px]">
                <h1 className="text-[30px] font-bold text-yellow-400   text-center    ">
                  App Development
                </h1>
                <h2>
                  Creating responsive, high-performance websites designed to
                  captivate and convert.
                </h2>
                <li className="list-none">
                  <ul>Cross-Platform Compatibility</ul>
                  <ul>User-Centered Design</ul>
                  <ul>Scalability & Performance</ul>
                  <ul>Secure Data Management</ul>
                  <ul>Continuous Support & Updates</ul>
                </li>

                <Link
                  href="/service/app"
                  className="border-2 w-fit m-auto p-[10px] bg-yellow-400 rounded-[50px] font-bold"
                >
                  More Details
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default ServicePage;
