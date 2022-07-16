import React, { useEffect } from "react";
import Sidebar from "../../../components/backend/admin/Sidebar";
import Details from "../../../components/backend/admin/readers/Details";
import useGetHook from "../../../hooks/useGetHooks";
import APIS from "../../../helpers/EndPoints";
import { getApiData } from "../../../helpers/AxiosInstances";

type Props = {
  AuthorDetailsData: any;
  setShowSearch: any;
};
export default function Authordetails(props: Props) {
  const { AuthorDetailsData, setShowSearch } = props;
  console.log(AuthorDetailsData, "AuthorDetailsData");


  // SHOW SEARCH BAR IN THIS PAGE
  useEffect(() => {
    setShowSearch(true);
  }, []);

  return (
    <div className="flex bg-[#EEF1F8] p-[30px] space-x-[20px]">
      <Details />
    </div>
  );
}

export const getServerSideProps = async ({ params }: any) => {
  console.log(params.authorID, "params")
  const authorDetaisDataResponse = await getApiData(
    `${APIS.USER}${params.authorID}`
  );

  return {
    props: {
      AuthorDetailsData: authorDetaisDataResponse?.data,
    },
  };
};
