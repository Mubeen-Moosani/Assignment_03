import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const AboutPage = () => {
  return (
    <>
      <div className=" bg-[url('/contact_bg_img.jpg')]">
        <Header></Header>
        <div className=" flex flex-col justify-between gap-6 w-[900px]  m-auto my-[50px]">
          <div className="flex justify-content ">
            <div className="w-[50%] ">
              <img src="mission.jpg" alt="" />
            </div>
            <div className="flex flex-col justify-center gap-4 w-[50%] ">
              <h1 className="text-[27px] font-bold text-yellow-400	">Mission</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
                quod facere aut amet esse alias consectetur,
              </p>
            </div>
          </div>
          <div className="flex justify-content">
            <div className=" flex flex-col justify-between gap-4 w-[50%]">
              <h1 className="text-[27px] font-bold text-yellow-400">
                My Story
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                totam eius deleniti nisi sed inventore, aut quisquam est
                mollitia natus fuga, possimus reprehenderit placeat beatae?
                Eveniet quaerat itaque animi minima!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
                est totam voluptatum, ea voluptatem et possimus tempore
                dignissimos ad dolores, aspernatur in vitae quaerat fugit, sequi
                assumenda id aliquam incidunt!
              </p>
            </div>
            <div className="flex flex-col justify-between gap-4 w-[50%]">
              <img src="story.jpg" alt="" />
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};
export default AboutPage;
