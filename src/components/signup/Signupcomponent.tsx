import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import CustomeField from "../reusable/formikComponent/CustomeField";
import CustomeDropdown from "../reusable/formikComponent/CustomeDropdown";
import {Signup_formValidation} from "../formikvalidation/Formikfromvalidation";

type Props = {
  signUpHandler: any;
  message: any;
};

const options = [
  { id: 0, name: "-----" },
  { id: 1, name: "Teacher" },
  { id: 2, name: "Student" },
];

const signupFormInitalValue = {
  username: "",
  full_name: "",
  email: "",
  phone: "",
  role: "",
  password: "",
  confirm_password: "",
};


const Signupcomponent = (props: Props) => {
  const { signUpHandler, message } = props;
  return (
    <Formik
      initialValues={signupFormInitalValue}
      validationSchema={Signup_formValidation}
      onSubmit={(data, props) => signUpHandler(data, props)}
    >
      {({ values, errors, touched }) => (
        <div>
          <Form>
            <div className="grid sm:grid-cols-8 ">
              <div className="object-cover hidden md:inline-block relative z-0 w-full h-[760px] sm:col-span-2 md:col-span-3 lg:col-span-4">
                <Link href="Main">
                  <div className="absolute cursor-pointer top-12 left-10 z-10">
                    <Image src="/logo.png" alt="logo" width={220} height={50} />
                  </div>
                </Link>

                <div>
                  <Image
                    className="object-cover object-right"
                    alt="login page"
                    src="/loginpage.png"
                    layout="fill"
                  ></Image>
                </div>
              </div>
              <div className="flex flex-col m-10 mt-32 text-[#323232] space-y-6 col-span-5  md:col-span-5 lg:col-span-4">
                <Link href="Main">
                  <div className="md:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </div>
                </Link>

                <div>
                  <h1 className="leading-[59px] text-5xl font-bold font-Jost">
                    Welcome Back{" "}
                  </h1>

                  <p className="  leading-6 font-Inter text-[#ABABAB]">
                    Create your account
                  </p>
                </div>
                <div className="flex space-x-10 mt-9">
                  {/* Field for username */}
                  <CustomeField
                    label={"Username"}
                    name={"username"}
                    type={"text"}
                    fieldname={"Enter username"}
                  />
                  {/* Field for full name */}
                  <CustomeField
                    label={"Full Name"}
                    name={"full_name"}
                    type={"text"}
                    fieldname={"Full Name"}
                  />
                </div>
                <div className="flex space-x-10 mt-9">
                  <CustomeField
                    label={"Email"}
                    name={"email"}
                    type={"text"}
                    fieldname={"Email"}
                  />
                  <CustomeField
                    label={"Phone"}
                    name={"phone"}
                    type={"number"}
                    fieldname={"Phone"}
                  />
                </div>
                <div className="flex space-x-10 mt-9">
                  {/* Custome dropdown menu */}
                  <CustomeDropdown
                    name={"role"}
                    options={options}
                    label={"Role"}
                  />

                  <CustomeField
                    label={"Password"}
                    name={"password"}
                    type={"password"}
                    fieldname={"Password"}
                  />
                </div>
                <div>
                  <CustomeField
                    label={"Confirm Password"}
                    name={"confirm_password"}
                    type={"password"}
                    fieldname={"Confirm Password"}
                  />
                </div>

                <div>
                  <button type="submit" className="purple-btn">
                    Signup
                  </button>
                </div>
                <div>
                  <p className=" leading-6 font-Inter text-[#ABABAB] text-sm mt-2 ml-2">
                    Already have an account?
                    <Link href="Signin">
                      <span className="text-[#F42A41] ml-4 cursor-pointer text-md">
                        Login
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};
export default Signupcomponent;
