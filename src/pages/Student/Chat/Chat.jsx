import { BellIcon, Diamond } from "lucide-react";
import { Link } from "react-router-dom";

const StudentChat = () => {
  return (
    <>
      {/* Top Navigation Bar */}
      <header>
        <nav className="bg-amber-300 justify-between flex px-5 py-3">
          <div className="flex gap-3 items-center">
            <div className="size-6 text-primary">
              <Diamond />
            </div>
            <h2 className=" text-lg font-bold">LocalLearn</h2>
          </div>
          <div className="flex gap-2 items-center">
            <span className="bg-gray-200 py-2 px-2 rounded-md text-gray-600">
              <BellIcon />
            </span>
            <img src="./vite.svg" alt="profile img" className="rounded-full" />
          </div>
        </nav>
      </header>

      <main className="flex bg-amber-700">
        {/* Side Navigation Bar */}
        <aside className="flex flex-[15%] h-100 flex-col justify-between bg-black">
          <ul className="flex flex-col gap-4">
            <li className="">
              <i>Home</i>
              <Link to="">Dashboard</Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-2"></ul>
        </aside>
        {/* Inner section */}
        <section className="flex-[85%]"></section>
      </main>
    </>
  );
};

export default StudentChat;
