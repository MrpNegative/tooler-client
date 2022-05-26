import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loading from "../Genarel/Shared/Loading";
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from "react-firebase-hooks/auth";
import { auth } from "./firebase.init";

const Signup = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const [user] = useAuthState(auth)
    const navigate = useNavigate();
  const location = useLocation();

  const [mainErrors, setMainErrors] = useState("");

  const [createUserWithEmailAndPassword, EPUser, loading, EPError] =
  useCreateUserWithEmailAndPassword(auth);

    const [signInWithGoogle, Euser, Eloading, Eerror] = useSignInWithGoogle(auth);
   
    const [updateProfile, updating, Nerror] = useUpdateProfile(auth);
    
    const onSubmit = async (data) =>{
        setMainErrors("")
        await createUserWithEmailAndPassword(data.email, data.pass)
        await updateProfile({displayName: data.name})

    };
    //page navigation
    const from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (user) {
            navigate(from);
        }
    }, [user]);
    //   errors
  useEffect(() => {
    const error = EPError || Eerror || Nerror;
    if (error) {
        setMainErrors( error?.message?.split('/')[1].split(')')[0]);
    }
  }, [EPError, Eerror, Nerror ]);
  //loading
    if (loading || Eloading || updating) {
      return <Loading></Loading>;
    }
    return (
        <div className="lg:h-screen my-10">
      <div class="card  md:w-96 w-72 mx-auto bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-3xl mb-5 font-bold uppercase">Signup</h2>
          <div>
            <form
              className=" grid grid-rows-1 gap-3"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <input
                  placeholder="Your Name"
                  class="input input-bordered input-secondary w-full max-w-xs"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is Required",
                    },
                    pattern: {
                      value: /^[^0-9]+$/,
                      message: "You cant put number in your name",
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-600">
                      {errors.name.message}
                    </span>
                  )}
                  {errors.name?.type === "pattern" && (
                    <span className="label-text-alt text-red-600">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>
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
                      message: "Password muss be 8 character or more",
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
              {mainErrors ? <p className="text-left text-red-600 text-xl">{mainErrors}</p> : ''}
              <input className="btn w-full" type="submit" />
            </form>
            <p className="text-left mt-4"> Already have an account
                <Link className="link-hover" to="/login">
                  <span className="text-red-600 ml-2">LogIn</span>
                </Link>
              </p>
            <div class="divider">OR</div>
            <button onClick={()=>{signInWithGoogle()}} className="border-0 w-full btn bg-blue-700 text-white">
              Continue With Google
            </button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Signup;