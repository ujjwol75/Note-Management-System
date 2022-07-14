import React from "react";
import Signincomponent from "../../components/signin/Signincomponent";
import APIS from "../../helpers/EndPoints";
import { useRouter } from "next/router";
import { postApiData } from "../../helpers/AxiosInstances";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const router = useRouter();
  const signInHandler = async (data: any) => {
    const url = APIS.LOGIN;
    const formData = data;
    const requestMethod = "POST";
    const response = await postApiData({ url, formData, requestMethod });
    console.log("response", response);
    if (response.status === 200 || response.status === 201) {
      toast.success("Login Success!!")
    }else{
      toast.error("Login Falil!")
    }
  };
  return (
    <>
      <ToastContainer />
      <Signincomponent signInHandler={signInHandler} />
    </>
  );
}
