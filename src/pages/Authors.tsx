import React, { useEffect } from "react";
import Search from "../components/backend/Search";
import Sidebar from "../components/backend/Sidebar";
import Authorlist from "../components/backend/author/Authorlist";
import useGetHook from "../hooks/useGetHooks";
import APIS from "../helpers/EndPoints";

export default function Authors() {
  const { isLoading: authorListLoading, data: authorListDatas } = useGetHook({
    queryKey: "authorlist",
    url: APIS.AUTHORS,
    parma: "",
    auth: true,
  });

  console.log(authorListDatas, "authorlist datas");
  return (
    <div>
      <Authorlist />
    </div>
  );
}
