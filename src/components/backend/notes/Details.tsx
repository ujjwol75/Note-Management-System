import React from "react";
import Image from "next/image";
import Link from "next/link";
import Authorprofile from "../Authorprofile";

const notedetails =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

export default function Details() {
  return (
    <div className="p-4 h-[662px] w-[1136px] bg-white rounded-lg font-Inter text-[15px] ">
      {/* Heading  */}
      <div className="w-[1090px] h-[40px] bg-theme font-medium text-white rounded-xl flex items-center justify-between px-10 ">
        <div className="flex items-center">
          <Link href="Dashboard">
            <h2 className="text-[#F0F0F0]">Notes </h2>
          </Link>
          <div className=" mx-2 w-2 h-2  bg-white rounded-[50%]"></div>
          <span>Note details</span>
        </div>
        <div className="flex space-x-10">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            See transistions
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
              />
            </svg>
            Save
          </div>
          <div className="flex items-center">
            <Link href="ViewNotes">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-45 w-5 opacity-75 mr-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            View Note
          </div>
        </div>
      </div>

      {/* input fields  */}
      <div className=" grid grid-cols-4 gap-5 font-normal my-5">
        <div>
          <p>Note title</p>
          <input
            type="text"
            placeholder="Physics note"
            className="outline-none border-[1px] border-[#E0E0E0] rounded-lg h-[40px] pl-3"
            disabled
          />
        </div>
        <div>
          <p>Price of Note</p>
          <input
            type="text"
            placeholder="Rs 2000"
            className="outline-none border-[1px] border-[#E0E0E0] rounded-lg h-[40px] pl-3"
            disabled
          />
        </div>
        <div>
          <p>Duration of Note</p>
          <input
            type="text"
            placeholder="lifetime"
            className="outline-none border-[1px] border-[#E0E0E0] rounded-lg h-[40px] pl-3"
            disabled
          />
        </div>
        <div>
          <p>Note comission</p>
          <input
            type="text"
            placeholder="50% of Note price - Rs 1,000"
            className="outline-none border-[1px] border-[#E0E0E0] rounded-lg h-[40px] pl-3"
            disabled
          />
        </div>
        <div>
          <p>Category</p>
          <input
            type="text"
            placeholder="Science"
            className="outline-none border-[1px] border-[#E0E0E0] rounded-lg h-[40px] pl-3"
            disabled
          />
        </div>
        <div>
          <p>Status</p>
          <input
            type="text"
            placeholder="Pending"
            className="outline-none border-[1px] border-[#E0E0E0] rounded-lg h-[40px] pl-3"
            disabled
          />
        </div>
        <div>
          <p>Sales Count</p>
          <input
            type="text"
            placeholder="04 sales    "
            className="outline-none border-[1px] border-[#E0E0E0] rounded-lg h-[40px] pl-3"
            disabled
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-normal">Note Description</h2>
          <textarea
            name=""
            id=""
            placeholder={notedetails}
            className=" p-5 w-[529px] h-[357px] border-[1px] border-[#E0E0E0] rounded-lg"
            disabled
          ></textarea>
        </div>
        <Authorprofile />
      </div>
    </div>
  );
}
