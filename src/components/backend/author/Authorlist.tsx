import React from "react";
import Link from "next/link";
import { list } from "postcss";

const lists = [
  {
    name: "Mr JOhn Doe",
    email: "johndeo@testmail.com",
    phone: "+977-9845678935",
    address: "Kuleshwor",
    notes: "200",
    date: "07 jul, 2022",
  },
  {
    name: "Mr Sanjay Kapor",
    email: "sanjaykapor@testmail.com",
    phone: "+977-9845678935",
    address: "Baneshwor",
    notes: "200",
    date: "07 jul, 2022",
  },
  {
    name: "Mr JOhn Doe",
    email: "johndeo@testmail.com",
    phone: "+977-9845678935",
    address: "Shantinagar",
    notes: "200",
    date: "07 jul, 2022",
  },
  {
    name: "Mr JOhn Doe",
    email: "johndeo@testmail.com",
    phone: "+977-9845678935",
    address: "Koteshwor",
    notes: "200",
    date: "07 jul, 2022",
  },
];

const table_head_list = [
  { name: "S.NO" },
  { name: "Title" },
  { name: "Category" },
  { name: "List" },
  { name: "Readers" },
  { name: "Date" },
  { name: "Status" },
  { name: "Action" },
];

const table_body_descriptions = [
  { name: 1 },
  { name: "list.name" },
  { name: "list.email" },
  { name: "list.phone" },
  { name: "list.address" },
  { name: "list.date" },
  { name: "list.notes" },
];

const Tdes = (val: any) => (
  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
    {val}
  </td>
);
type Props = {
  authorLists: any;
};
export default function Authorlist(props: Props) {
  const { authorLists } = props;
  console.log(authorLists, "authorlists")
  return (
    <div className="p-4 h-[662px] w-full bg-white rounded-lg ">
      <div className="flex flex-col ">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-y-auto">
              <table className="min-w-full rounded-t-md">
                <thead className="border-b bg-theme rounded-t-md font-Jost font-light text-white text-[15px] ">
                  <tr>
                    {table_head_list.map((item) => (
                      <th scope="col" className="  px-6 py-4 text-left">
                        {item.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-[15px] font-Inter font-normal">
                  {authorLists?.map((list: any, index: number) => (
                    <tr key={index} className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {index + 1}
                      </td>
                      <td className=" px-6 py-4 whitespace-nowrap font-Inter">
                        {list.user.profile?.full_name}
                      </td>
                      <td className=" px-6 py-4 whitespace-nowrap font-Inter">
                        {list.user.email}
                      </td>
                      <td className=" px-6 py-4 whitespace-nowrap font-Inter">
                        {list.user.mobile_number}
                      </td>
                      <td className=" px-6 py-4 whitespace-nowrap font-Inter">
                        {list.address}
                      </td>
                      <td className=" px-6 py-4 whitespace-nowrap font-Inter">
                        {list.user.date_joined}
                      </td>
                      <td className=" px-6 py-4 whitespace-nowrap font-Inter">
                        {list.notes}
                      </td>
                      <td className=" px-6 py-4 whitespace-nowrap font-Inter">
                        <Link href={`Authors/Authordetails/${list.user.id}`}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 cursor-pointer opacity-50"
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
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
