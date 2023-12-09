import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu, toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SUGGESTIONS_URL } from "../utils/contants";
import { cacheResults } from "../utils/searchSlice";
import { searchDataAddToStore } from "../utils/searchDataSlice";
import { Link, useNavigate } from "react-router-dom";

const Head = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchCache = useSelector((state) => state.search);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggetions, setSuggetions] = useState([]);
  const [showSuggetions, setShowSuggetions] = useState(false);
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (searchCache[searchQuery]) {
          setSuggetions(searchCache[searchQuery]);
        } else {
          getSearchSuggetions();
        }
      },

      200
    );
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSearchSuggetions = async () => {
    const data = await fetch(YOUTUBE_SUGGESTIONS_URL + searchQuery);
    const json = await data.json();
    setSuggetions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const menuChangeHandler = () => {
    dispatch(toggleMenu());
  };

  const getSearchData = async (s = searchQuery) => {
    try {
      const data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}&key=AIzaSyBoS-42_ZpuPpZcnBaYsVzJ-RMqhvn9zuc`);
      const json = await data.json();
      if (searchQuery.length) {
        dispatch(searchDataAddToStore(json));
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const searchHandler = () => {
    getSearchData();
    setShowSuggetions(false);
    navigate("/search");
  };

  const searchFromSuggest = (s) => {
    getSearchData(s);
    setSearchQuery(s);
    setShowSuggetions(false);
    navigate("/search");
  };
  const enterSubmit = (event) => {
    if (event.key === "Enter") {
      getSearchData();
      setShowSuggetions(false);
      navigate("/search");
    }
  };
  const goToHome = () => {
    setSearchQuery("");
  };
  const closeMenuBtn = () => {
    dispatch(closeMenu());
  };
  return (
    <div className="flex justify-between items-center p-1  xs:sticky xs:top-0 xs:bg-white xs:z-50 xs:flex-col xs:p-0 xs:pb-5 xs:px-3 lg:pb-0 md:flex-row md:gap-5 md:pl-2 md:pr-4">
      <div className="flex items-center xs:w-full xs:justify-between md:w-3/12 md:justify-start sm:px-3 sm:w-full md:px-0">
        {isMenuOpen ? (
          <img
            onClick={closeMenuBtn}
            src="https://static.vecteezy.com/system/resources/previews/011/193/361/non_2x/check-mark-and-cross-mark-icon-tick-symbol-in-red-color-illustration-vector.jpg"
            alt="close icon"
            className="h-14 cursor-pointer xs:h-10 sm:h-12 xl:h-14"
          />
        ) : (
          <img
            onClick={() => menuChangeHandler()}
            className="h-14 cursor-pointer xs:h-10 sm:h-12 xl:h-14"
            src="https://www.svgrepo.com/show/312300/hamburger-menu.svg"
            alt="menu"
          />
        )}

        <Link to="/">
          <img
            className="h-16 mx-3 cursor-pointer xs:h-14 xs:m-0 sm:h-16 xl:h-18"
            src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg"
            alt="youtube-logo"
            onClick={goToHome}
          />
        </Link>
      </div>
      <div>
        <div className="flex xs:justify-between xs:items-center md:w-8/12 ">
          <input
            className=" border border-gray-300 p-2 px-5 rounded-l-full outline-gray-300 xs:p-1 xs:px-2 sml:px-4 sm:px-3  "
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggetions(true)}
            onKeyPress={(event) => enterSubmit(event)}
          />
          <button className="border border-gray-300 py-2 px-5 rounded-r-full bg-gray-100 xs:py-1 xs:px-3" onClick={searchHandler}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        {showSuggetions && (
          <div className="absolute">
            <ul className="px-5 py-2  bg-white rounded-xl lg:w-full ">
              {suggetions?.map((s) => (
                <li className="p-1  hover:bg-gray-100 cursor-pointer" key={s} onClick={() => searchFromSuggest(s)}>
                  <i className="fa-solid fa-magnifying-glass text-gray-700 pr-3 text-sm "></i>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div>
        <div className="flex items-center gap-8 xs:hidden  md:justify-between md:flex md:w-2/12">
          <i className="fa-solid fa-video text-xl cursor-pointer hover:bg-slate-100 rounded-full p-2 md:p-1 md:text-base"></i>
          <i className="fa-solid fa-bell text-xl cursor-pointer hover:bg-slate-100 rounded-full p-2 relative md:p-1 md:text-base">
            <span className=" bg-red-700 text-[8px]  text-white p-1 rounded-full">9+</span>
          </i>
          <img className="h-6 cursor-pointer" src="https://www.shareicon.net/data/512x512/2016/05/24/770137_man_512x512.png" alt="user-icon" />
        </div>
      </div>
    </div>
  );
};

export default Head;
