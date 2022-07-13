import React from "react";
import Signincomponent from "../../components/signin/Signincomponent";
import APIS from "../../helpers/EndPoints";
import { useRouter } from "next/router";
import { postApiData } from "../../helpers/AxiosInstances";

export default function Login() {
  const router = useRouter();
  const signInHandler = async (data: any) => {
    const url = APIS.LOGIN;
    const formData = data;
    console.log(formData, "formData");
    const requestMethod = "POST";
    const response = await postApiData({ url, formData, requestMethod });
    console.log("response", response);
  };
  return (
    <>
      <Signincomponent signInHandler={signInHandler} />
    </>
  );
}
