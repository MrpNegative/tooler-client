import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loading from "../Genarel/Shared/Loading";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { auth } from "./firebase.init";
import useToken from "../Hooks/useToken";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();

  const [mainErrors, setMainErrors] = useState("");

  const [signInWithEmailAndPassword, EPUser, loading, EPError] =
    useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, Euser, Eloading, Eerror] = useSignInWithGoogle(auth);

  // token
  const [token] = useToken(user);

  const onSubmit = (data) => {
    setMainErrors("");
    signInWithEmailAndPassword(data.email, data.pass);
  };
  //page navigation
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (token) {
      navigate(from);
    }
  }, [token]);
  //   errors
  useEffect(() => {
    const error = EPError || Eerror;
    if (error) {
      setMainErrors(error?.message.split("/")[1].split(")")[0]);
    }
  }, [EPError, Eerror]);
  //loading
  if (loading || Eloading) {
    return <Loading></Loading>;
  }
  return (
    <div className="lg:h-screen my-10">
      <div className="card  md:w-96 w-72 mx-auto bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-3xl mb-5 font-bold uppercase">LogIn</h2>
          <div>
            <form
              className=" grid grid-rows-1 gap-3"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <input
                  placeholder="Email"
                  className="input input-bordered input-secondary w-full max-w-xs"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is Required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid Email",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-600">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-600">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div>
                <input
                  placeholder="Password"
                  className="input input-bordered input-secondary w-full max-w-xs"
                  {...register("pass", {
                    required: {
                      value: true,
                      message: "Password is Required",
                    },
                    pattern: {
                      value: /^(?=.*\d).{8,}$/,
                      message: "Provide a valid Password",
                    },
                  })}
                />
                <label className="label">
                  {errors.pass?.type === "required" && (
                    <span className="label-text-alt text-red-600">
                      {errors.pass.message}
                    </span>
                  )}
                  {errors.pass?.type === "pattern" && (
                    <span className="label-text-alt text-red-600">
                      {errors.pass.message}
                    </span>
                  )}
                </label>
              </div>
              <p className="text-left">
                <Link className="link-hover" to="/">
                  Forgot Password?
                </Link>
              </p>
              {mainErrors ? (
                <p className="text-left text-red-600 text-xl">{mainErrors}</p>
              ) : (
                ""
              )}
              <input className="btn w-full" type="submit" />
            </form>
            <p className="text-left mt-4">
              {" "}
              Dont have an account
              <Link className="link-hover" to="/signup">
                <span className="text-red-600 ml-2">Register</span>
              </Link>
            </p>
            <div className="divider">OR</div>
            <button
              onClick={() => {
                signInWithGoogle();
              }}
              className="border-0 w-full btn bg-blue-700 text-white"
            >
              Continue With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
