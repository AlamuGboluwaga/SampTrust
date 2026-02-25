import React, { useEffect } from "react";
import Header from "../component/Header";
import BankLogo from "../component/BankLogo";
import { useForm } from "react-hook-form";
import { type SubmitHandler } from "react-hook-form";
import { useVerifyOtpMutation } from "../api/authApi";
import Loader from "../component/Loader";
import { toast } from "react-toastify";

export type OTPVerificationtype = {
  code: number;
  userName: string | null
};

const OTPVerification: React.FC = () => {
  const [verifyOtp, { data, error, isLoading }] = useVerifyOtpMutation();
  console.log("error",error,data);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OTPVerificationtype>();

  const onSubmit: SubmitHandler<OTPVerificationtype> = (formData) => {
    let userName = sessionStorage.getItem("username");
    // const userName = "olajide.olaoti";
    verifyOtp({ ...formData, userName });
      };
  useEffect(() => {
    if (data?.responseCode ==="98") {
      toast.error(data?.responseDescription)
    }
    if (data?.responseCode === "00") {
      toast.success(data?.responseDescription);
    }
  },[data]);

  return (
    <div className="authlayout">
      <BankLogo />
      {/* Form */}
      <div className="h-[60%] w-[30%] bg-[#121413] rounded-2xl text-gray-100 flex flex-col justify-center items-center ">
        <Header
          headerName="OTP VERIFICATION"
          message="Enter the correct OTP in the field below"
        />

        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <div className=" h-full w-full  flex flex-col justify-center items-center space-y-6 ">
            <div className="w-[80%] space-y-2">
              <div className=" w-full  ">
                <label htmlFor="" className="text-left ">
                  OTP
                </label>
              </div>

              <div className="h-12 w-full border border-gray-100 opacity-50 rounded ">
                <input
                  className="h-full w-full pl-4 text-xl tracking-[10px] text-white"
                  type="text"
                  placeholder="Enter OTP"
                  maxLength={6}
                  {...register("code", {
                    required: {
                      value: true,
                      message: "Please enter your OTP",
                    },
                    pattern: {
                      value: /^\d{6}$/,
                      message: "OTP must be exactly 6 digits",
                    },
                  })}
                />
              </div>
              <div className="text-xs  w-[80%]">
                <p className=" ">Must be a 4 digit number(e.g., 1234)</p>
              </div>

              <div className="text-xs  w-[80%]  text-red-700 ">
                {errors.code && <span>{errors.code.message}</span>}
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
                      <p>Submiting ...</p>
                    </div>
                  ) : (
                    "Submit"
                  )}
                </button>
                {/* bg-[#008236] */}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OTPVerification;

{
  /* <h1 className="header">OTP VERIFICATION</h1>
      <Header
        headerName="Login"
        message="Enter the correct login details in the fields below"
      /> */
}
