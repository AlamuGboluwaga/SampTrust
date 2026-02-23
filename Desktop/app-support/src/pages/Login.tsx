import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import React, { useEffect, useState } from "react";
import suntrustLogo from "../images/sun.png";
import { useLoginMutation } from "../api/authApi";
import Loader from "../component/Loader";
import { toast } from "react-toastify";
import { IoEyeOffOutline } from "react-icons/io5";
import { TfiEye } from "react-icons/tfi";
import PageTitle from "../component/PageTitle";

export type LoginFormData = {
  username: string;
  password: string;
};

const Login: React.FC = () => {
  // <PageTitle tittle="App-Supoort | Login" />;

  const [login, { data, error, isLoading }] = useLoginMutation();
  const [passwordView, setPasswordView] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit: SubmitHandler<LoginFormData> = (formData) => {
    login(formData);
  };

  useEffect(() => {
    document.title = "App-Supoort | Login Page";
    if (data?.responseCode === "98") {
      console.log(data);
      toast.error(data?.responseDescription || "An error occurred");
    }
    if (data?.responseCode === "00") {
      console.log(data);
      toast.success(data?.responseDescription || "Success");
    }
    if (error) {
      toast.error("An error occurred. Please try again.");
      console.log(error);
    }
  }, [data, error]);

  const handlePasswordView = () => {
    setPasswordView(!passwordView);
  };

  return (
    <div className="h-screen w-screen bg-black flex flex-col space-y-12 justify-center items-center text-white">
      <div className="flex flex-row justify-center items-center space-x-6">
        <img src={suntrustLogo} alt="" className="h-10" />
        <h1 className=" font-bold ">App-support portal</h1>
      </div>

      {/* Form */}
      <div className=" h-[75%] w-[30%] bg-[#121413]  rounded-2xl text-gray-100 flex flex-col justify-center items-center ">
        <div className="mt-[10%]  h-15 w-full flex flex-col justify-center items-center space-y-2">
          <h1 className=" flex  font-bold text-xl  ">Login</h1>
          <p className=" text-xs   text-gray-300 ">
            Enter the correct login details in the fields below
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="h-[80%] w-full  flex flex-col justify-center items-center "
        >
          <div className=" h-full w-full  flex flex-col justify-center items-center space-y-3 ">
            <div className="w-[80%]">
              <div className=" w-full ">
                <label htmlFor="" className="text-left">
                  Username
                </label>
              </div>

              <div className="h-12 w-full border border-gray-100 opacity-50 rounded ">
                <input
                  className="h-full w-full  pl-4  "
                  type="text"
                  placeholder="firstname.lastname"
                  {...register("username", { required: true })}
                />
              </div>
              <div className="text-xs  w-[80%]">
                <p className=" ">Format: firstname.lastname (e.g., john.doe)</p>
              </div>

              <div className="text-xs  w-[80%]  text-red-700 ">
                {errors.username && <span>This field is required</span>}
              </div>
            </div>

            <div className="w-[80%]">
              <div className=" w-full ">
                <label htmlFor="" className="text-left">
                  Password
                </label>
              </div>

              <div className=" relative h-12 w-full border border-gray-100 opacity-50 rounded flex justify-center items-center">
                <input
                  className="h-full w-full border  border-none pl-4 "
                  type={passwordView ? "text" : "password"}
                  {...register("password")}
                  placeholder="Password"
                />
              </div>
              <div
                className=" absolute bottom-[34%] right-[39%] mr-2  cursor-pointer"
                onClick={handlePasswordView}
              >
                {passwordView ? <TfiEye /> : <IoEyeOffOutline />}
              </div>
              <div className="text-xs  w-[80%]  text-red-700 ">
                {errors.username && <span>This field is required</span>}
              </div>
            </div>
            <div className="w-[80%]">
              <div
                className={`h-12 w-full  rounded mt-10 ${isLoading ? "bg-[#bbbdc0]" : "bg-[#4a5565]"} `}
              >
                <button
                  disabled={isLoading}
                  className="h-full w-full flex   justify-center items-center cursor-pointer "
                >
                  {isLoading ? (
                    <div className=" h-full flex justify-center items-center space-x-2 text-gray-100">
                      <Loader size={18} />
                      <p>Loading ...</p>
                    </div>
                  ) : (
                    "Login"
                  )}
                </button>
                {/* bg-[#008236] */}
              </div>
              <div className="text-xs  w-full flex justify-center">
                <p className=" mt-5">
                  Only staffs profiled on this platform by control can access it
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
