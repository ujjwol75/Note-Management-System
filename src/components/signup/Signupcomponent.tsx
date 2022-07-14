import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

type Props = {
  signUpHandler: any;
  message: any;
};

const signupFormInitalValue = {
  username: "",
  full_name: "",
  email: "",
  phone: "",
  role: "",
  password: "",
  confirm_password: "",
};

const formValidation = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password is Short!")
    .max(50, "Password too long!")
    .required("Password is Required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  username: Yup.string().required("Username is required!"),
  confirm_password: Yup.string().required("Confirm password is required!"),
});

const Signupcomponent = (props: Props) => {
  const { signUpHandler, message } = props;
  return (
    <Formik
      initialValues={signupFormInitalValue}
      validationSchema={formValidation}
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
                  <div>
                    <h2 className="text-md text-[#455A64] mb-2 text-Inter font-medium">
                      Username
                    </h2>
                    <label>
                      <Field
                        className="outline-none border-b-2 border-tgray p-2 rounded-lg w-48 sm:w-60 md:w-72"
                        placeholder="Enter username"
                        type="text"
                        name="username"
                      />

                      <ErrorMessage name="username" component="div" />
                    </label>
                  </div>
                  <div>
                    <h2 className="text-md text-[#455A64] mb-2 text-Inter font-medium">
                      Full Name
                    </h2>

                    <label>
                      <Field
                        className="outline-none border-b-2 border-tgray p-2 rounded-lg w-48 sm:w-60 md:w-72"
                        placeholder="Full Name"
                        type="text"
                        name="full_name"
                      />
                      <ErrorMessage name="full_name" component="div" />
                    </label>
                  </div>
                </div>
                <div className="flex space-x-10 mt-9">
                  <div>
                    <h2 className="text-md text-[#455A64] mb-2 text-Inter font-medium">
                      Email
                    </h2>
                    <label>
                      <Field
                        className="outline-none border-b-2 border-tgray p-2 rounded-lg w-48 sm:w-60 md:w-72"
                        placeholder="Email"
                        type="text"
                        name="email"
                      />
                      <ErrorMessage name="email" component="div" />
                    </label>
                  </div>

                  <div>
                    <h2 className="text-md text-[#455A64] mb-2 text-Inter font-medium">
                      Phone
                    </h2>

                    <label>
                      <Field
                        className="outline-none border-b-2 border-tgray p-2 rounded-lg w-48 sm:w-60 md:w-72"
                        placeholder="Enter phone"
                        type="number"
                        name="phone"
                      />
                      {errors.phone && touched.phone && (
                        <div>{errors.phone}</div>
                      )}
                      {/* <ErrorMessage name="phone" component="div" /> */}
                    </label>
                  </div>
                </div>
                <div className="flex space-x-10 mt-9">
                  <div>
                    <h2 className="text-md text-[#455A64] mb-2 text-Inter font-medium">
                      Role
                    </h2>

                    <label>
                      <Field
                        className="outline-none border-b-2 border-tgray p-2 rounded-lg w-48 sm:w-60 md:w-72"
                        placeholder="Choose role"
                        type="text"
                        name="role"
                      />
                      <ErrorMessage name="role" component="div" />
                    </label>
                  </div>
                  <div>
                    <h2 className="text-md text-[#455A64] mb-2 text-Inter font-medium">
                      Password
                    </h2>

                    <label>
                      <Field
                        className="outline-none border-b-2 border-tgray p-2 rounded-lg w-48 sm:w-60 md:w-72"
                        placeholder="Enter Password"
                        type="password"
                        name="password"
                      />
                      <ErrorMessage name="password" component="div" />
                    </label>
                  </div>
                </div>
                <div>
                  <h2 className="text-md text-[#455A64] mb-2 text-Inter font-medium">
                    Conform Password
                  </h2>

                  <label>
                    <Field
                      className="outline-none border-b-2 border-tgray p-2 rounded-lg w-48 sm:w-60 md:w-72"
                      placeholder="Conform Password"
                      type="password"
                      name="confirm_password"
                    />
                    <ErrorMessage name="confirm_password" component="div" />
                  </label>
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
