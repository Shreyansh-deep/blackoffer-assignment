import React from "react";
import { IoChevronForwardOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="flex flex-col items-start gap-6 pl-4 pr-8 py-10 text-xl border border-gray-300 rounded-xl w-fit text-gray-600">
      <div className="flex items-center w-40 justify-between cursor-pointer hover:bg-gray-200 hover:px-4 hover:py-2 hover:rounded">
        <p>Dashboard</p>
        <IoChevronForwardOutline />
      </div>
      <div className="flex items-center w-40 justify-between cursor-pointer hover:bg-gray-200 hover:px-4 hover:py-2 hover:rounded">
        <p>Ecommerce</p>
        <IoChevronForwardOutline />
      </div>
      <div className="flex items-center w-40 justify-between cursor-pointer hover:bg-gray-200 hover:px-4 hover:py-2 hover:rounded">
        <p>Academy</p>
        <IoChevronForwardOutline />
      </div>
      <div className="flex items-center w-40 justify-between cursor-pointer hover:bg-gray-200 hover:px-4 hover:py-2 hover:rounded">
        <p>Logistics</p>
        <IoChevronForwardOutline />
      </div>
      <div className="flex items-center w-40 justify-between cursor-pointer hover:bg-gray-200 hover:px-4 hover:py-2 hover:rounded">
        <p>Email</p>
      </div>
      <div className="flex items-center w-40 justify-between cursor-pointer hover:bg-gray-200 hover:px-4 hover:py-2 hover:rounded">
        <p>Chat</p>
        <IoChevronForwardOutline />
      </div>
      <p>Calendar</p>
      <p>Invoice</p>
      <div className="flex items-center w-40 justify-between cursor-pointer hover:bg-gray-200 hover:px-4 hover:py-2 hover:rounded">
        <p>Cash</p>
        <IoChevronForwardOutline />
      </div>
    </div>
  );
};

export default Sidebar;
