import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Loading from "../Genarel/Shared/Loading";
import { auth } from "./firebase.init";

const ForgotPass = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [mainErrors, setMainErrors] = useState("");

  const [sendPasswordResetEmail, sending, Ferror] =
    useSendPasswordResetEmail(auth);

  // token
  const onSubmit = async (data) => {
    setMainErrors("");
    await sendPasswordResetEmail(data.email);
    toast.success('Password Reset link sent to your gmail if not please follow the error or check your spam folder')
  };

  //   errors
  useEffect(() => {
    const error = Ferror;
    if (error) {
      setMainErrors(error?.message.split("/")[1].split(")")[0]);
    }
  }, [Ferror]);
  //loading
  if (sending) {
    return <Loading></Loading>;
  }
  return (
    <div className="lg:h-screen my-10">
      <div className="card  md:w-96 w-72 mx-auto bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-3xl mb-5 font-bold uppercase">forgot password</h2>
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
             
              <p className="text-left">
                <Link className="link-hover" to="/login">
                  Goto LogIn Page
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
           </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
