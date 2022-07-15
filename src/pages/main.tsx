import React from "react";
import Coverpage from "../components/frontend/main/Coverpage";
import Features1 from "../components/frontend/main/Features1";
import Features2 from "../components/frontend/main/Features2";
import CallAction from "../components/frontend/main/CallAction";
import Work from "../components/frontend/main/Work";
import Testimonial from "../components/frontend/main/Testimonial";
import Courses from "../components/frontend/main/Courses";

const Main = () => {
    return (
        <div>
            <Coverpage height={700} />
            <Features1 />
            <Features2 />
            <Courses />
            <CallAction />
            <Work />
            <Testimonial />
        </div>
    )
}



export default Main;