import React, { useEffect } from "react";
import Authorlist from "../../components/backend/author/Authorlist";
import useGetHook from "../../hooks/useGetHooks";
import APIS from "../../helpers/EndPoints";

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
      <Authorlist authorLists={authorListDatas}/>
    </div>
  );
}
