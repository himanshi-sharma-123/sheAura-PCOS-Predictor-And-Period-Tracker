import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import loginImage from "../images/loginImage.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signin = () => {
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleemailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password === "" || email === "") {
      toast.error("Fill all fields!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password,
        }),
      });

      if (response.ok) {
        const userData = await response.json();
        login(userData);
        toast.success("Login successful");
        setTimeout(() => {
          navigate("/");
        }, 1500);

        // alert("Login Successful!");
        // navigate("/");
      } else {
        // alert(
        //   "Failed to Login, Invalid credentials, please first signup if you do not have an account or correct your credentials"
        // );
        toast.error("Error occurred while logging");
        setTimeout(() => {
          navigate("/register");
        }, 1500);

        // navigate("/register");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center w-full lg:pr-40 bg-pink-200">
      <div className="mt-20 lg:block hidden">
        <img src={loginImage} alt="" width={600} height={500} />
      </div>

      <div className="bg-white dark:bg-pink-800 shadow-md rounded-lg px-20 py-20 max-w-md mt-20">
        <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">
          Welcome Back!
        </h1>

        {/* <div>
          <img src={loginImage} alt="" width={500} height={500} />
        </div> */}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500"
              onChange={handleemailChange}
              placeholder="your@email.com"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500"
              placeholder="Enter your password"
              onChange={handlePasswordChange}
              required
            />
          </div>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
          >
            Login
          </button>
          <div className="text-white">
            <Link to="/register">
              <h1 className="ml-4">
                Don&apos;t have an account? <br />
              </h1>
              <h1 className="ml-10">Register now.</h1>
            </Link>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signin;
