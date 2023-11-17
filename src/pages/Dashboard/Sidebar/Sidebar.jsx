import React, {  useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { BsFillHouseAddFill } from "react-icons/bs";
import { Link, NavLink} from "react-router-dom";
import GetInstructor from "../../../Api/GetInstructor";

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  const [isActive, setActive] = useState("false");
  const toggleHandler = (event) => {
    setToggle(event.target.checked);
  };
//   GetInstructor,instructor
  const { instructor } = GetInstructor();
  const role = instructor.role;
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };


  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-pink-900  flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
          <Link to={"/"}>
               <h1 className="text-white text-3xl underline">Codecademy</h1>
              </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-teal-800 text-white"
        >
          <AiOutlineBars className="h-5 w-5 text-white" />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-pink-900  w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && "-translate-x-full"
          }  md:translate-x-0  transition duration-200 ease-in-out custom-scrollbar-2`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex justify-center mx-auto">
              <Link to={"/"}>
               <h1 className="text-white text-3xl underline">Codecademy</h1>
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col text-white justify-between flex-1 mt-6  ">
            <nav>
              <>
                {/* =========routes for instructor========= */}
                {role === "instructor" && (
                  <>
                    {/* Menu Links */}
                    <NavLink
                      to="/dashboard/create"
                      onClick={handleToggle}
                      className={({ isActive }) =>
                        `flex items-center px-4 py-2 mt-5 transition-colors duration-300 transform  hover:bg-pink-950 ${isActive ? "bg-pink-950" : ""
                        }`
                      }
                    >
                      <BsFillHouseAddFill className="w-5 h-5" />

                      <span className="mx-4 font-medium">Create Course</span>
                    </NavLink>
               
                    <NavLink
                      to="/dashboard/manage"
                      onClick={handleToggle}
                      className={({ isActive }) =>
                        `flex items-center px-4 py-2 mt-5 transition-colors duration-300 transform  hover:bg-pink-950 ${isActive ? "bg-pink-950" : ""
                        }`
                      }
                    >
                      <BsFillHouseAddFill className="w-5 h-5" />

                      <span className="mx-4 font-medium">Manage Courses</span>
                    </NavLink>
                    <NavLink
                      to="/dashboard/publish"
                      onClick={handleToggle}
                      className={({ isActive }) =>
                        `flex items-center px-4 py-2 mt-5 transition-colors duration-300 transform  hover:bg-pink-950 ${isActive ? "bg-pink-950" : ""
                        }`
                      }
                    >
                      <BsFillHouseAddFill className="w-5 h-5" />

                      <span className="mx-4 font-medium">Publish Courses</span>
                    </NavLink>
               
                  </>
                )}
              </>
            </nav>
          </div>
        </div>
     
      </div>
    </>
  );
};

export default Sidebar;
