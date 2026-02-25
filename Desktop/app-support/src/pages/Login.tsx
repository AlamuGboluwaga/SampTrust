import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import React, { useEffect, useState } from "react";
import { useLoginMutation } from "../api/authApi";
import Loader from "../component/Loader";
import { toast } from "react-toastify";
import { IoEyeOffOutline } from "react-icons/io5";
import { TfiEye } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import Header from "../component/Header";
import BankLogo from "../component/BankLogo";

export type LoginFormData = {
  username: string;
  password: string;
};

const Login: React.FC = () => {
  const [login, { data, error, isLoading }] = useLoginMutation();
  const [passwordView, setPasswordView] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit: SubmitHandler<LoginFormData> = (formData) => {
    login(formData);
    sessionStorage.setItem("username", formData?.username);
    
  };

  useEffect(() => {
    document.title = "App-Supoort | Login Page";
    if (data?.responseCode === "98") {
      toast.error(data?.responseDescription || "An error occurred");
    }
    if (data?.responseCode === "00") {
      toast.success(data?.responseDescription || "Success");
      navigate("/otpverificationpage");
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
    <div className="authlayout">
      <BankLogo />

      {/* Form */}
      <div className="formDiv">
        <Header
          headerName="Login"
          message="Enter the correct login details in the fields below"
        />

        <form onSubmit={handleSubmit(onSubmit)} className="form">
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
                  {...register("password", { required: true })}
                  placeholder="Password"
                />
              </div>
              <div
                className=" absolute bottom-[35.6%] right-[39%] mr-2  cursor-pointer"
                onClick={handlePasswordView}
              >
                {passwordView ? <TfiEye /> : <IoEyeOffOutline />}
              </div>
              <div className="text-xs  w-[80%]  text-red-700 ">
                {errors.password && <span>This field is required</span>}
              </div>
            </div>
            {/* Button */}
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
