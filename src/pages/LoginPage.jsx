import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FACEBOOK_URL } from "../api/constant";
import { loginAPI } from "../api/user-api";
import { facebookLogo } from "../assets";
import FailedMessage from "../components/form/FailedMessage";
import Input from "../components/form/Input";
import MainLayout from "../components/layout/MainLayout";
import AuthContext from "../context/auth-context";

const LoginPage = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const [invalid, setInvalid] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ criteriaMode: "all" });

  const onSubmitHandler = (data) => {
    loginAPI(data.email, data.password)
      .then((res) => {
        authCtx.login(res.data.accessToken);
        setInvalid(false);
        reset();
        navigate("/profile");
      })
      .catch((err) => {
        setInvalid(true);
      });
  };

  return (
    <MainLayout>


        <div className="hero min-h-screen bg-forrest-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">Log in now to see the new updates about you Neighborhood.</p>
            </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-500">
            <div className="flex justify-center mt-10 text-white bg-base-100">
              <form
                onSubmit={handleSubmit(onSubmitHandler)}
                className="p-[30px] bg-base-200 w-full max-w-[500px]  rounded-lg"
              >
                <h2 className="text-center font-semibold text-3xl mb-3">Login</h2>
                {invalid && (
                  <FailedMessage
                    onClose={() => {
                      setInvalid(false);
                    }}
                  >
                    Invalid username or password.
                  </FailedMessage>
                )}

                <Input
                
                  label="Email"
                  name="email"
                  type="text"
                  errors={(errors.email = true)}
                  placeholder="Enter your email"
                  register={register}
                  validation={{
                    required: "Please enter email address",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Please enter valid email",
                    },
                  }}
                />

                <Input
                  label="Password"
                  name="password"
                  type="password"
                  errors={errors}
                  placeholder="Enter your password"
                  register={register}
                  validation={{
                    required: "Please enter password",
                  }}
                />

                <button
                  type="submit"
                  className="btn py-3 mt-3 rounded-md border border-orange-500 text-slate-500 bg-color1 w-full"
                >
                  Login
                </button>
                <div className="relative mt-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-b border-orange-500"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="px-4 bg-orange-500">Or</span>
                  </div>
                </div>
                <a
                  href={FACEBOOK_URL}
                  className="btn flex justify-center py-3 rounded-md border border-orange-500 mt-4 text-slate-500 bg-color2"
                >
                  <img
                    src={facebookLogo}
                    alt="facebook"  
                    className="w-[24px] h-[24px] mr-1"
                  />
                  Continue with Facebook
                </a>
                <p className="text-center mt-4">
                  Don't have account?{" "}
                  <Link to="/register" className="text-color1">
                    register
                  </Link>
                </p>
              </form>
            </div>
            </div>
          </div>
        </div>








    </MainLayout>
  );
};

export default LoginPage;
