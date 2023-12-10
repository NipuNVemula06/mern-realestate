import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center text-gray-700 font-bold my-7">
        Sign Up
      </h1>
      <form className="flex flex-col gap-4 ">
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg"
          id="username"
        />
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
        />
        <button
          className="bg-slate-700 text-white p-3 rounded-lg uppercase
        hover:opacity-95 disabled:opacity-80
        "
        >
          Sign Up
        </button>
        <div className="flex gap-2 justify-center mt-5 ">
          <p className="text-gray-700">Have an account? </p>
          <Link to="/sign-in">
            <span className="text-blue-700 hover:text-blue-800">Sign in</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
