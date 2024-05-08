import React, { useContext, useEffect, useState } from "react";
import logo from "../images/logo.png";
import Sidebar from "./sidebar/Sidebar";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { user, login, logout } = useContext(AuthContext);
  console.log(user);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      login(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="fixed w-full h-20 flex flex-row justify-between items-center bg-[#FFC0CB] z-10 ">
      <div className="flex flex-row items-center">
        <Sidebar />
        <img src={logo} alt="" className="hidden lg:block ml-20 w-60 h-60" />
      </div>
      {user ? (
        <div className="flex flex-row gap-3 mr-6">
          <img
            src={user?.profileImage || user?.data?.user?.profileImage}
            alt="Profile"
            className="lg:block hidden lg:rounded-full h-10 w-10 object-cover mt-2"
          />
          <Link
            to="/form"
            className="bg-white border-2 hover:bg-[#FF92A5] hover:text-black py-3 px-4 rounded-full mb-1 cursor-pointer lg:py-3 lg:px-3"
          >
            Predict PCOS
          </Link>
          <button
            onClick={logout}
            className="bg-white border-2 hover:bg-[#FF92A5] hover:text-black py-3 px-6 mb-1 rounded-full cursor-pointer lg:py-3 lg:px-6"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex flex-row gap-3 mr-6">
          <Link
            to="/login"
            className="bg-white border-2  hover:bg-[#FF92A5] hover:text-black py-3 px-6 rounded-full mb-1 md:mb-0 md:mr-4 cursor-pointer"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-white border-2 hover:bg-[#FF92A5] hover:text-black py-3 px-6 rounded-full cursor-pointer"
          >
            Signup
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;

// import React, { useContext, useEffect, useState } from "react";
// import logo from "../images/logo.png";
// import Sidebar from "./sidebar/Sidebar";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../auth/AuthContext";

// const Navbar = () => {
//   const [nav, setNav] = useState(false);
//   const { user, login, logout } = useContext(AuthContext);
//   console.log(user);

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       login(JSON.parse(storedUser));
//     }
//   }, []);

//   return (
//     <div className="fixed w-full h-20 flex flex-row justify-between items-center bg-[#FFC0CB] z-10 ">
//       {" "}
//       <div className="flex flex-row items-center">
//         {" "}
//         <Sidebar />
//         <img
//           src={logo}
//           alt=""
//           className="hidden lg:block ml-20 w-60 h-60"
//         />{" "}
//       </div>
//       {user ? (
//         <div className="flex flex-row gap-3 mr-6">
//           <img
//             src={user?.profileImage || user?.data?.user?.profileImage}
//             alt="Profile"
//             className="lg:block hidden lg:rounded-full"
//           />
//           <Link
//             to="/form"
//             className="bg-white border-2 border-black hover:bg-[#FF92A5] hover:text-black hover:border-black py-5 px-6 rounded-full mb-1 cursor-pointer"
//           >
//             Predict PCOS
//           </Link>

//           <button
//             onClick={logout}
//             className="bg-white border-2 border-black hover:bg-[#FF92A5] hover:text-black hover:border-black py-4 px-10 mb-1 rounded-full cursor-pointer"
//           >
//             Logout
//           </button>
//         </div>
//       ) : (
//         <div className="flex flex-row gap-3 mr-6">
//           <Link
//             to="/login"
//             className="bg-white border-2 border-black hover:bg-[#FF92A5] hover:text-black hover:border-black py-3 px-6 rounded-full mb-1 md:mb-0 md:mr-4 cursor-pointer"
//           >
//             Login
//           </Link>
//           <Link
//             to="/register"
//             className="bg-white border-2 border-black hover:bg-[#FF92A5] hover:text-black hover:border-black py-3 px-6 rounded-full cursor-pointer"
//           >
//             Signup
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;
