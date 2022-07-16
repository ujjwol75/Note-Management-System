import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import React from "react";

const subjects = [
  "Science",
  "Computer Science",
  "Social Studies",
  "Mathematics",
  "Other Categories",
];

function Category() {
  return (
    <Menu>
      <Menu.Button className="w-[156px] p-1 h-[38px] rounded-lg border-[1px] border-themetext flex items-center justify-evenly font-Inter font-normal">
        By Category
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </Menu.Button>

      <Menu.Items>
        <div className="flex flex-col border-[1px] border-themetext rounded w-[156px] p-3 space-y-4 ">
          {subjects.map((subject: string, index: number) => (
            <React.Fragment key={index}>
              <Menu.Item>
                {({ active }: any) => (
                  <Link href={subject} className={`${active && "bg-blue-500"}`}>
                    {subject}
                  </Link>
                )}
              </Menu.Item>
            </React.Fragment>
          ))}
        </div>
      </Menu.Items>
    </Menu>
  );
}
export default Category;
