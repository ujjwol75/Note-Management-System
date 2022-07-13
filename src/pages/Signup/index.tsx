import React, {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import ButtonComponent from "../../components/main/ButtonComponent";
import { useRouter } from "next/router";
import APIS from "../../helpers/EndPoints";
import { postApiData } from "../../helpers/AxiosInstances";
import Signupcomponent from "../../components/signup/Signupcomponent";


export default function Signup() {
    const [message, setMessage] = useState("")
    const router = useRouter();
  
    const signUpHandler = async (data: any) => {
      const url = APIS.REGISTER;
      console.log(url, "url")
      const formData = data;
      console.log(formData, "formData")
      const requestMethod = 'POST';
      const response = await postApiData({ url, formData, requestMethod });
      console.log('response', response); 
      if (response.status === 200 || response.status === 201) {
        router.push('/Signin');
        setMessage("Signup Successfull!")
      } 
      else{
        setMessage("Error while sign up!")
      }
      
    };
  return (
    <>
      <Signupcomponent signUpHandler= {signUpHandler}/>
    </>
  );
}
