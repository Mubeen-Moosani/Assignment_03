import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Link from "next/link";
const Home = () => {
  return (
    <>
      <div className="bg-[url('/contact_bg_img.jpg')]">
        <Header></Header>
        <div className=" flex flex-col justify-between gap-8 w-[900px] m-auto my-[30px ]">
          <div className=" bg-[url('/hero_bg.jpg')] my-[30px]">
            <div className="flex justify-content">
              <div className=" flex flex-col justify-between gap-6 w-[60%] p-[30px] ">
                <h1 className="w-fit m-auto italic font-bold text-[22px]">
                  Crafting Digital Experiences That Transform Ideas into Reality
                </h1>
                <h2 className="text-[17px] ">
                  I provide personalized web and app development services
                  tailored to your needs.
                </h2>
                <Link
                  href="/contact"
                  className="border-4 w-fit m-auto border-black bg-black text-yellow-400 p-[10px] font-bold rounded-[50px] "
                >
                  Get a Free Quote
                </Link>
              </div>
              <div className="w-[40%] ">
                <img src="hero_sec_2.png" alt="" />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-4 border-x-4  border-yellow-400">
            <h1 className="w-fit m-auto text-[35px] 	 font-bold text-yellow-400">
              Mubeen Moosani
            </h1>
            <p className="w-[70%] m-auto">
              I'm Mubeen, a dedicated web and app developer with a passion for
              transforming ideas into impactful digital experiences. With a
              strong background in both front-end and back-end development, I
              specialize in creating responsive websites and intuitive mobile
              apps that prioritize user experience and functionality. Whether
              you’re a small business, a startup, or an individual with a
              vision, I’m here to provide personalized solutions that bring your
              digital projects to life. Let’s work together to make your online
              presence stand out.
            </p>
            <Link
              href="/about"
              className="w-fit m-auto bg-yellow-400 font-bold p-[15px] rounded-[50px]"
            >
              Know More About Me
            </Link>
          </div>
          <div className=" flex flex-col justify-between gap-8 py-[30px] ">
            <h1 className="font-bold text-[30px]">What I Offer</h1>
            <div className="flex justify-content w-fit gap-[100px] m-auto">
              <div>
                <div className=" flex flex-col justify-between gap-4 bg-yellow-400  border-4 border-black rounded-[20px] px-[20px] py-[10px]">
                  <h1 className="mt-[20px] w-fit m-auto font-bold text-[22px]">
                    Web Development
                  </h1>
                  <li className="list-none">
                    <ul>Custom Website Design</ul>
                    <ul>Responsive Layouts</ul>
                    <ul>SEO Optimization</ul>
                    <ul>E-Commerce Solutions</ul>
                    <ul>Maintenance & Support</ul>
                    <ul>CMS Integration</ul>
                  </li>
                  <Link
                    href="/service"
                    className="bg-black text-center text-yellow-400 p-[10px] font-bold rounded-[10px]"
                  >
                    {" "}
                    Know More
                  </Link>
                </div>
                <div></div>
              </div>
              <div>
                <div className=" flex flex-col justify-between gap-4  border-4 border-yellow-400 rounded-[20px] px-[20px] py-[10px]">
                  <h1 className=" mt-[20px] w-fit m-auto font-bold text-[22px]">
                    App Development
                  </h1>
                  <li className="list-none">
                    <ul>Custom App Design</ul>
                    <ul>iOS & Android Development</ul>
                    <ul>Cross-Platform Solutions</ul>
                    <ul>User-Centric UI/UX</ul>
                    <ul>Backend Integration</ul>
                    <ul>Maintenance & Updates</ul>
                  </li>
                  <Link
                    href="/service"
                    className="bg-yellow-400 text-center text-black p-[10px] font-bold rounded-[10px]"
                  >
                    {" "}
                    Know More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};
export default Home;
