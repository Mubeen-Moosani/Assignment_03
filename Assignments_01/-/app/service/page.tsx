import Link from "next/link";

const ServicePage = () => {
  return (
    <>
      <div className="">
        <div className=" w-fit m-auto">This is Service Page</div>
        <div className="">
          <li className=" space-y-4 w-fit m-auto p-auto list-none">
            <ul className="w-fit m-auto px-10 rounded-3xl bg-yellow-400">
              <Link href="/service/web-dev" target="_blank">
                Website Development
              </Link>
            </ul>
            <ul className="w-fit m-auto rounded-3xl px-10 bg-yellow-400">
              <Link href="/service/app-dev" target="_blank">
                App development
              </Link>
            </ul>
          </li>
        </div>
      </div>
    </>
  );
};
export default ServicePage;
