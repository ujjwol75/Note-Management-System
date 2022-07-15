import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
// import Sidebar from '../components/Sidebar/Sidebar'
import APIS from "../helpers/EndPoints";
import { getKey } from "../helpers/sessionKey";
import useGetHook from "../hooks/useGetHooks";
import Sidebar from "../components/backend/Sidebar";
import Search from "../components/backend/Search";

type Props = {
  children: any;
};

const DashboardLayout = (props: Props) => {
  const router = useRouter();
  const { children } = props;

  // PASS THIS TO CHILDREN PAGES AND USE USE_EFFECT TO SHOW/HIDE SEARCH BAR
  const [showSearch, setShowSearch] = useState(true);
  const [loadPage, setLoadPage] = useState(true);

  // Cloning childern attribute to pass props
  const childrenWithAdjustedProps = React.Children.map(children, (child) =>
    React.cloneElement(child, { showSearch, setShowSearch })
  );

  //   const { isLoading: currentUserLoading, data: currentUserData } = useGetHook({
  //     queryKey: 'currentUserData',
  //     url: APIS.CURRENT_USER_PROFILE,
  //     parma: "",
  //     auth: true
  //   });

    useEffect(() => {
      if (!getKey("userAuth")) {
        router.push("/Signin");
      } else {
        setLoadPage(true);
      }
    }, []);

  return (
    <>
      {loadPage ? (
        <div className="flex bg-[#EEF1F8] p-[30px] space-x-[20px]">
          <Sidebar />

          <div className="space-y-[30px]">
            {showSearch ? <Search /> : null}
            <div>
              <main>{childrenWithAdjustedProps}</main>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default DashboardLayout;
