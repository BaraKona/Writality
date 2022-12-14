import React from "react";
import { Link } from "react-router-dom";
import { cyclops8 } from "../../assets/icons";
import LandingNavigation from "./LandingNavigation";
import UserNavigation from "./UserNavigation";
import { useAuthContext } from "../../contexts/AuthContext";

export default function Navbar() {
  const { currentUser } = useAuthContext();
  console.log(currentUser);
  const showNavbar = () => {
    if (currentUser) {
      return <UserNavigation />;
    } else {
      return <LandingNavigation />;
    }
  };
  return (
    <nav className="container mx-auto flex justify-between  px-4 border-solid border-b border-baseBorder">
      <div className="cursor-pointer">
        <Link to="/">
          <div className="my-3 flex">
            <img
              src={cyclops8}
              alt="writality"
              width={35}
              height={35}
              className="inline-block"
            />
            <h1 className="font-bold px-2 py-2 text-lg text-slate-200">
              Writality
            </h1>
          </div>
        </Link>
      </div>
      <div className="ml-auto">{showNavbar()}</div>
    </nav>
  );
}
