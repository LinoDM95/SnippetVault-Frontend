import React, { useState, useContext } from "react";
import { AuthContext } from "../utils/auth_context";
import { motion, AnimatePresence } from "framer-motion";

import GlobSearchInput from "./ui_elements/input/input_glob";
import UserLogo from "./user_logo";
import ButtonCreate from "./ui_elements/buttons/button_create";
import CreateSnippetPopUp from "./pop_up_layouts/pop_up_create_snippet";
import NavlinkHeader from "./ui_elements/navlinks/navlink_header";
import { MenuIcon, XIcon } from "lucide-react";

function Header() {
  const { user, logout } = useContext(AuthContext);
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [showCreateSnippetForm, setShowCreateSnippetForm] = useState(false);

  const handleClosePopUpCreateSnippet = () => setShowCreateSnippetForm(false);

  return (
    <div className="flex items-center justify-between w-full relative px-4 py-3 bg-background-primary">
      {showCreateSnippetForm && (
        <CreateSnippetPopUp
          className="fixed inset-0 flex items-center justify-center z-50"
          onClickClose={handleClosePopUpCreateSnippet}
        />
      )}

      <h1 className="font-semibold text-2xl sm:text-3xl lg:text-4xl text-text-on-primary">
        SnippetVault<span className="text-outline-ui">.</span>
      </h1>

      <div className="hidden lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:block">
        <GlobSearchInput />
      </div>
      {/* Desktop Nav */}
      <div className="hidden lg:flex items-center gap-5">
        <nav className="flex gap-6">
          <NavlinkHeader
            title="Snippet Table"
            navigationLink="/Snippet_Table"
          />
          <NavlinkHeader title="Snippet Hub" navigationLink="/Snippet_Hub" />
        </nav>
        <ButtonCreate
          onBtnClick={() => setShowCreateSnippetForm(true)}
          buttonName="Create Snippet"
        />

        <div className="relative">
          <UserLogo
            onClick={() => setIsOpenNav((prev) => !prev)}
            user={user?.username || "Guest"}
            className="text-text-on-primary bg-primary border-secondary hover:text-secondary border w-10 h-10 cursor-pointer"
          />
          {/* Desktop Dropdown */}
          <AnimatePresence>
            {isOpenNav && (
              <div
                className="fixed inset-0 "
                onClick={() => setIsOpenNav(false)}
              >
                <motion.div
                  className="absolute items-center top-12 right-4 w-48 bg-primary text-text-on-primary
                 shadow-lg rounded-xl p-5 flex flex-col gap-4 z-50"
                  onClick={(e) => e.stopPropagation()}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <button
                    onClick={logout}
                    className="text-left hover:text-secondary"
                  >
                    Logout
                  </button>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile Nav Button */}
      <button
        className="lg:hidden flex items-center justify-center"
        onClick={() => setIsOpenNav((prev) => !prev)}
      >
        {isOpenNav ? (
          <XIcon className="h-8 w-8 text-text-on-primary" />
        ) : (
          <MenuIcon className="h-8 w-8 text-text-on-primary" />
        )}
      </button>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpenNav && (
          <motion.div
            className="absolute lg:hidden top-full left-0 right-0 bg-primary text-text-on-primary shadow-lg rounded-b-xl p-5 flex flex-col gap-4 z-50 items-center justify-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <GlobSearchInput />
            <NavlinkHeader
              title="Snippet Table"
              navigationLink="/Snippet_Table"
            />
            <NavlinkHeader title="Snippet Hub" navigationLink="/Snippet_Hub" />
            <ButtonCreate
              onBtnClick={() => {
                setShowCreateSnippetForm(true);
                setIsOpenNav(false);
              }}
              buttonName="Create Snippet"
            />
            <button
              onClick={logout}
              className="cursor-pointer text-left hover:text-secondary transition-all duration-300"
            >
              Logout
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Header;
