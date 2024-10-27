import Link from "next/link";
const Footer = () => {
  return (
    <>
      <div className="bg-black text-white px-[50px] ">
        <div className="w-[900px] m-auto py-[50px] ">
          <div className=" relative  flex justify-content py-[50px] border-b-2 border-yellow-400  ">
            <div className="">
              <li className="flex flex-col gap-4 justify-between font-bold">
                <ul>
                  <Link className=" hover:text-yellow-400" href="/">
                    Home
                  </Link>
                </ul>
                <ul>
                  <Link className=" hover:text-yellow-400" href="/about">
                    About
                  </Link>
                </ul>
                <ul>
                  <Link className=" hover:text-yellow-400" href="/Contact-us">
                    Contact
                  </Link>
                </ul>
                <ul>
                  <Link className=" hover:text-yellow-400" href="/service">
                    Service
                  </Link>
                </ul>
              </li>
            </div>
            <div className=" absolute justify-content  right-0 font-bold">
              <h1 className="">Follow Me:</h1>
              <div className=" flex justify-content mt-[20px]  gap-[30px]">
                <Link
                  href="https://www.facebook.com/profile.php?id=61565442263841"
                  target="_blank"
                >
                  <img
                    className="hover:bg-yellow-400"
                    src="fb_logo.png"
                    alt=""
                  />
                </Link>
                <Link href="http://www.instagram.com" target="_blank">
                  <img
                    className=" hover:bg-yellow-400"
                    src="instagram_logo.png"
                    alt=""
                  />
                </Link>
                <Link
                  target="_blank"
                  href="www.linkedin.com/in/mubeen-moosani-22668b289"
                >
                  <img
                    className="hover:bg-yellow-400"
                    src="linkedin_logo.png"
                    alt=""
                  />
                </Link>
                <Link target="_blank" href="http://www.youtube.com">
                  <img
                    className="hover:bg-yellow-400"
                    src="youtube_logo.png"
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="relative flex justify-content py-[50px] font-bold">
            <div className="">Reserved</div>
            <div className="absolute right-0 ">
              <h1>Contact Me</h1>
              <div>
                <Link
                  href="mailto:mubeenmusani412@gmail.com"
                  className=" hover:text-yellow-400"
                >
                  mubeenmusani412@gmail.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
