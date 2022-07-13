import Axios from 'axios';


const API_ROOT = "https://backend.noteghar.com/api";


//create axios instance
export const instance = Axios.create({
  baseURL: `${API_ROOT}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

//post data to api
export const postApiData = async (data: any) => {
    const { url, formData, formikProps } = data;
    let response;
    try {
      response = await instance({
        method: "POST",
        url: `${url}`,
        data: formData,
        // headers: {
        //   Authorization: `Bearer ${accessToken()}`,
        // },
        transformResponse: [
          function (responseData) {
            //Do whatever you want to transform the data
            return JSON.parse(responseData);
          },
        ],
      });
    } catch (e: any) {
      formikProps?.setErrors(e.response.data);
      return e.response;
    }
    return response;
  };