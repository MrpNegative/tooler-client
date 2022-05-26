import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Loading from "../Genarel/Shared/Loading";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "./firebase.init";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [signInWithEmailAndPassword, EPUser, loading, EPError] =
    useSignInWithEmailAndPassword(auth);

  if (loading) {
    return <Loading></Loading>;
  }

  const onSubmit = (data) => console.log(data);
  return (
    <div className="lg:h-screen">
      <div class="card lg:w-96 mx-auto bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-3xl font-bold uppercase">LogIn</h2>
          <div>
            <form
              className=" grid grid-rows-1 gap-5"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <input
                  placeholder="Email"
                  class="input input-bordered input-secondary w-full max-w-xs"
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
                  class="input input-bordered input-secondary w-full max-w-xs"
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
              <input className="btn w-full" type="submit" />
            </form>
            <div class="divider">OR</div>
            <button className="border-0 w-full btn bg-blue-700 text-white">
              Continue With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
