import React from "react";
import Sidebar from "./Sidebar";

import { Outlet } from "react-router-dom";
import Head from "./Head";
import ButtonList from "./ButtonList";

function Body() {
  return (
    <>
      <div>
        <div className="sticky top-0 w-full z-50">
          <div className="">
            <Head />
            <div className=" xs:hidden lg:block ">
              <ButtonList />
            </div>
          </div>
        </div>

        <div>
          <div>
            <Sidebar />
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
