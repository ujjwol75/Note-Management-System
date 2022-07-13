import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ButtonComponent from "../../components/main/ButtonComponent";
import { useRouter } from "next/router";
import APIS from "../../helpers/EndPoints";
import { postApiData } from "../../helpers/AxiosInstances";
import Signupcomponent from "../../components/signup/Signupcomponent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ToastNotification from "../../components/reusable/ToastNotification";

export default function Signup() {
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false)
  const [types, setTypes] = useState("")
  const router = useRouter();

  const signUpHandler = async (data: any) => {
    const url = APIS.REGISTER;
    console.log(url, "url");
    const formData = data;
    console.log(formData, "formData");
    const requestMethod = "POST";
    const response = await postApiData({ url, formData, requestMethod });
    console.log("response", response);
    if (response.status === 200 || response.status === 201) {
      router.push("/Signin");
      setMessage("Login Successful!!");
      setShow(true)
      setTypes("succes")
    } else {
      setMessage("Something went wrong!!!");
      setShow(true)
      setTypes("error")
    }
  };
  return (
    <>
      <ToastNotification types={types} show={show} message={message} />
      <Signupcomponent signUpHandler={signUpHandler} message={message} />
    </>
  );
}
