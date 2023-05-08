
import { useState } from "react";
import logo from "../../assets/s.png";
import {RiTrophyFill} from "react-icons/ri"
import {IoIosExit} from "react-icons/io"
import { Logo, CompressedSidebar, ExpandedSidebar } from "./styles";

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(null);

  return (
    <>
      {!showSidebar && (
        <CompressedSidebar showSideBar={showSidebar}>
          <div className="header" onClick={() => setShowSidebar(!showSidebar)}>
            <Logo src={logo} />
          </div>
          <div className="icons">
            <RiTrophyFill/>

          </div>
          <div className="logout">
            <IoIosExit/>
          </div>
        </CompressedSidebar>
      )}
      {showSidebar && (
        <ExpandedSidebar>
          <div className="header" onClick={() => setShowSidebar(!showSidebar)}>
            <Logo src={logo} />
            <h1>Shortly</h1>
          </div>
        </ExpandedSidebar>
      )}
    </>
  );
}

