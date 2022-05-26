import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
  return (
    <div className="lg:h-screen">
      <div class="card lg:w-96 mx-auto bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-3xl font-bold uppercase">LogIn</h2>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input {...register("firstName", { required: true })} />
              {errors.firstName?.type === "required" &&
                "First name is required"}

              <input {...register("lastName", { required: true })} />
              {errors.lastName && "Last name is required"}

              <input type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
