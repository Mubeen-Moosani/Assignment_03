import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const ContactPage = () => {
  const logo = "bg-yellow-400 p-[15px] rounded-[50px] border-2";
  return (
    <div className="bg-[url('/contact_bg_img.jpg')]">
      <Header></Header>
      <div>
        <div className=" w-[900px] m-auto">
          <div className=" mt-[10px] flex flex-col  justify-between gap-6 w-fit m-auto font-bold">
            <span className="w-fit  m-auto text-[25px]">
              <h1 className="">Contact Us</h1>
            </span>
            <span className="w-fit m-auto text-center">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                iaculis feugiat eleifend. Nullam rhoncus nibh et nunc vehicula,
                a viverra nunc eleifend. Vivamus ultricies velit sit amet dolor
                tempor viverra.
              </p>
            </span>
          </div>
          <div className=" flex justify-content my-[50px] gap-10">
            <div className="w-[50%] flex flex-col justify-center gap-[50px]">
              <div className=" flex justify-content gap-4 ">
                <img
                  src="Home_logo.png"
                  alt=""
                  className={`${logo} relative`}
                />
                <div className="">
                  <h1 className=" text-yellow-400 text-[17px] font-bold">
                    Address
                  </h1>
                  <p className="absolute">
                    4718 Sugar Camp Road, Owatanna, Minnesota <br /> 550800
                  </p>
                </div>
              </div>
              <div className="flex justify-content gap-4">
                <img src="Phone_logo.png" alt="" className={`${logo}  `} />
                <div className="flex flex-col ">
                  <h1 className="text-yellow-400 text-[17px] font-bold">
                    Phone
                  </h1>
                  <p className="">03362714233</p>
                </div>
              </div>
              <div className="flex justify-content gap-4">
                <img src="Email_logo.png" alt="" className={`${logo} `} />
                <div className="flex flex-col ">
                  <h1 className="text-yellow-400 text-[17px] font-bold">
                    Email
                  </h1>
                  <p className="">mubeenmusani412@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="w-[50%]  flex flex-col justify-center gap-6 border-[5px] border-yellow-400 rounded-[30px] py-[20px] px-[10px]">
              <h1 className="font-bold text-[22px]">Send Message</h1>
              <form
                action=""
                className="flex flex-col justify-center gap-6 w-[90%] m-auto "
              >
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border-b-2 w-[90%] border-black bg-transparent "
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="border-b-2 w-[90%] border-black bg-transparent "
                />
                <input
                  type="text"
                  placeholder="Message"
                  className="border-b-2 w-[90%] border-black h-[80px] bg-transparent "
                />
                <button className="border-2 bg-yellow-400 font-bold w-[90%] mt-[20px] py-[5px] rounded-[20px]">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default ContactPage;
