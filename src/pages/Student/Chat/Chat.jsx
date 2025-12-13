import {
  BellIcon,
  Book,
  Diamond,
  Dot,
  LayoutDashboard,
  LogOut,
  MessageCircle,
  Settings,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";
import avatar from "../../../assets/react.svg";

const StudentChat = () => {
  return (
    <>
      {/* Top Navigation Bar */}
      <header>
        <nav className="justify-between flex px-5 py-3 shadow-md">
          <div className="flex gap-3 items-center">
            <div className="size-6 text-primary">
              <Diamond />
            </div>
            <h2 className=" text-lg font-bold">LocalLearn</h2>
          </div>
          <div className="flex gap-2 items-center">
            <span className="bg-gray-200 p-2 rounded-md text-gray-600">
              <BellIcon />
            </span>
            <img
              src={avatar}
              alt="profile img"
              className="bg-black p-2 size-10 rounded-full"
            />
          </div>
        </nav>
      </header>

      <main className="flex">
        {/* Side Navigation Bar */}
        <aside className="flex flex-[15%] h-100 flex-col justify-between bg-white p-5 shadow-md text-black">
          <ul className="flex flex-col gap-8">
            <Link to="/student/dashboard">
              <li className="px-3 bg-primary/20 hover:bg-primary/50 rounded-md py-2 flex items-center">
                <LayoutDashboard className="inline size-5 mr-2" />
                <p>Dashboard</p>
              </li>
            </Link>
            <Link to="/student/courses">
              <li className="px-3 bg-primary/20 hover:bg-primary/50 rounded-md py-2 flex items-center">
                <Book className="inline size-5 mr-2" />
                <p>Courses</p>
              </li>
            </Link>
            <Link to="/student/chat">
              <li className="px-3 bg-primary/20 hover:bg-primary/50 rounded-md py-2 flex items-center">
                <MessageCircle className="inline size-5 mr-2" />
                <p>Chat</p>
              </li>
            </Link>
            <Link to="/student/profile">
              <li className="px-3 bg-primary/20 hover:bg-primary/50 rounded-md py-2 flex items-center">
                <User className="inline size-5 mr-2" />
                <p>Profile</p>
              </li>
            </Link>
          </ul>
          <ul className="flex flex-col gap-2">
            <Link to="/student/settings">
              <li className="px-3 bg-primary/20 hover:bg-primary/50 rounded-md py-2 flex items-center">
                <Settings className="inline size-5 mr-2" />
                <p>Settings</p>
              </li>
            </Link>
            <Link to="/student/logout">
              <li className="px-3 bg-primary/20 hover:bg-primary/50 rounded-md py-2 flex items-center">
                <LogOut className="inline size-5 mr-2" />
                <p>Logout</p>
              </li>
            </Link>
          </ul>
        </aside>
        {/* Inner Content */}
        <section className="flex-[85%] flex not-md:overflow-scroll">
          {/* Left Inner Section */}
          <div className="flex-[30%] bg-gray-100">
            <div className="pt-5 pb-7 px-4">
              <h3 className="font-bold mb-1.5">Intoduction to Python</h3>
              <p className="text-gray-500 mb-1.5">
                Ask questions and get help from instructors and peers
              </p>
              <div className="flex flex-row gap-3 text-sm">
                <p className="bg-primary px-2.5 py-1.5 rounded-md cursor-pointer">
                  All
                </p>
                <p className="bg-gray-300 cursor-pointer px-2.5 py-1.5 rounded-md">
                  Unanswered
                </p>
                <button
                  type="button"
                  className="bg-gray-300 cursor-pointer px-2.5 py-1.5 rounded-md"
                >
                  Instructor Replies
                </button>
              </div>
            </div>
            <div className="flex bg-primary/20 p-4 items-center">
              <div className="h-10 w-10 rounded-full overflow-hidden shrink-0 mr-3 bg-amber-600">
                <img
                  src={avatar}
                  alt="User Image"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="mr-3">
                <p className="font-semibold text-base">Jane Doe (Instructor)</p>
                <p className="text-ellipsis text-xs">
                  Great question! The key differen...
                </p>
              </div>
              <div>
                <p className="text-sm">2m ago</p>
              </div>
            </div>
            <div className="flex bg-white p-4 items-center border-b border-b-gray-300 hover:bg-primary/20">
              <div className="h-10 w-10 rounded-full overflow-hidden shrink-0 mr-3 bg-white">
                <img
                  src={avatar}
                  alt="User Image"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="mr-3">
                <p className="font-semibold text-base">Jane Doe (Instructor)</p>
                <p className="text-ellipsis text-xs">
                  Great question! The key differen...
                </p>
              </div>
              <div>
                <p className="text-sm">2m ago</p>
              </div>
            </div>
            <div className="flex bg-white p-4 items-center border-b border-b-gray-300 hover:bg-primary/20">
              <div className="h-10 w-10 rounded-full overflow-hidden shrink-0 mr-3 bg-white">
                <img
                  src={avatar}
                  alt="User Image"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="mr-3">
                <p className="font-semibold text-base">Jane Doe (Instructor)</p>
                <p className="text-ellipsis text-xs">
                  Great question! The key differen...
                </p>
              </div>
              <div>
                <p className="text-sm">2m ago</p>
              </div>
            </div>
          </div>

          {/* Message Section */}
          <div className="py-4 px-6">
            <p className="bg-gray-400 w-fit m-auto p-2 rounded-lg">
              Instructor will reply within 24 hours
            </p>
            <div className="flex">
              <article>
                <div>
                  <img src={avatar} alt="user profile img" />
                </div>
              </article>
              <div>
                <p>
                  I'm having trouble with exercise 3. Specifically, why does the
                  list comprehension return a different result than the for
                  loop?
                </p>
                <div>
                  <p>Attach a screenshot to explain your issue</p>
                  <div>
                    <img src={avatar} alt="message screenshot" />
                  </div>
                </div>
              </div>
              <p>
                <span>John Smith</span>
                <Dot />
                <span>1h ago</span>
              </p>
            </div>
            <article className="flex">
              <div>
                <p>
                  Great question! The key difference is how scope works inside
                  list comprehensions. They have their own local scope. Here's a
                  code snippet to help you out.
                </p>
                <p>
                  <span>Jane Doe (Instructor)</span>
                  <Dot />
                  <span>2m ago</span>
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  );
};

export default StudentChat;
