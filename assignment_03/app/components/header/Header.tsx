import Link from "next/link";

export default function Header() {
  const hover =
    "hover:bg-yellow-400 hover:text-black hover:p-[5px] hover:rounded-[5px] hover:border-0 w-[900px]";
  return (
    <>
      <div className="flex justify-content p-[30px] border-b-4 gap-[200px] m-auto w-fit ">
        <div>
          <img src="" alt="signature" height="32px" width="150px" />
        </div>
        <div className="">
          <li className="w-fit flex justify-content text-yellow-400 gap-[100px]  px-5 text-[17px] font-bold	">
            <ul>
              <Link className={`${hover}`} href="/">
                Home
              </Link>
            </ul>
            <ul>
              <Link className={`${hover}`} href="/about">
                About
              </Link>
            </ul>

            <ul>
              <Link className={`${hover}`} href="/contact">
                Contact
              </Link>
            </ul>
            <ul>
              <Link className={`${hover}`} href="/service">
                Service
              </Link>
            </ul>
          </li>
        </div>
      </div>
    </>
  );
}
