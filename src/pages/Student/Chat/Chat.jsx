import { Diamond } from "lucide-react";
import { Link } from "react-router-dom";

const StudentChat = () => {
  return (
    <>
      {/* Top Navigation Bar */}
      <header>
        <nav className="">
          <div>
            <div className="size-6 text-primary">
              <Diamond />
            </div>
            <h2 className=" text-lg font-bold leading-tight">LocalLearn</h2>
          </div>
          <div className="flex gap-1.5">
            <i>Bell icon</i>
            <img src="" alt="profile img" />
          </div>
        </nav>
      </header>

      <main>
        {/* Side Navigation Bar */}
        <aside className="flex h-100 flex-col justify-between">
          <ul className="flex flex-col gap-4">
            <li className="">
              <i>Home</i>
              <Link to="">Dashboard</Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-2"></ul>
        </aside>
        {/* Inner section */}
        {/* <section className=""></section> */}
      </main>
    </>
  );
};

export default StudentChat;
