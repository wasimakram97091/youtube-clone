import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";

function Sidebar() {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(closeMenu());
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  if (!isMenuOpen) return null;
  return (
    <>
      <div className="fixed w-full h-full top-0 left-0 bg-black bg-opacity-50" onClick={closeModal}></div>
      <div className="p-5 shadow-lg  h-screen overflow-y-scroll fixed left-0 bg-white xs:w-full md:w-56">
        <ul>
          <li className="font-semibold bg-slate-100 text-base px-1 py-2 rounded-lg cursor-pointer hover:bg-slate-200">
            <Link to="/">
              <i className="fa-solid fa-house mx-3"></i> Home
            </Link>
          </li>
          <li className="text-base rounded-lg px-1 py-2 gap-3 cursor-pointer hover:bg-slate-100  ">
            <i className="fa-regular fa-circle-play mx-3"></i>
            Shorts
          </li>
          <li className="text-base rounded-lg px-1 py-2 gap-3 cursor-pointer hover:bg-slate-100 ">
            <i className="fa-solid fa-sack-dollar mx-3"></i>Subscriptions
          </li>
        </ul>

        <h1 className="font-bold pt-5">
          You <i className="fa-solid fa-chevron-right mx-2"></i>
        </h1>
        <ul>
          <li className="text-base rounded-lg px-1 py-2 gap-3 cursor-pointer hover:bg-slate-100 ">
            <i className="fa-regular fa-user mx-3"></i>Your Channel
          </li>
          <li className="text-base rounded-lg px-1 py-2 gap-3 cursor-pointer hover:bg-slate-100 ">
            <i className="fa-solid fa-clock-rotate-left mx-3"></i>
            History
          </li>
          <li className="text-base rounded-lg px-1 py-2 gap-3 cursor-pointer hover:bg-slate-100 ">
            <i className="fa-solid fa-play mx-3"></i>Your Videos
          </li>
          <li className="text-base rounded-lg px-1 py-2 gap-3 cursor-pointer hover:bg-slate-100">
            <i class="fa-regular fa-thumbs-up mx-3"></i>Liked Video
          </li>
        </ul>

        <h1 className="font-bold pt-5">Subscriptions</h1>
        <ul>
          <li className="flex items-center justify-between  px-1 py-2 cursor-pointer hover:bg-slate-100">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/28/Aaj_tak_logo.png" alt="Aaj Tak" className="h-5" />
            <span>Aaj Tak</span>
            <i className="fa-solid fa-tower-broadcast text-red-700"></i>
          </li>

          <li className="flex items-center justify-between  px-1 py-2 cursor-pointer hover:bg-slate-100">
            <img src="https://i.pinimg.com/originals/94/7e/40/947e405ff7b832e61e4c1de5913f51a3.png" alt="NDTV" className="h-5" />
            <span>NDTV India</span>
            <i className="fa-solid fa-tower-broadcast text-red-700"></i>
          </li>

          <li className="flex items-center justify-between  px-1 py-2 cursor-pointer hover:bg-slate-100">
            <img
              src="https://is5-ssl.mzstatic.com/image/thumb/Purple116/v4/6e/a5/9a/6ea59a87-a115-5982-389c-4bca75b3c869/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg"
              alt="LallanTop"
              className="h-5"
            />
            <span>The LallanTop</span>
            <i className="fa-solid fa-tower-broadcast text-red-700"></i>
          </li>

          <li className="flex items-center justify-between  px-1 py-2 cursor-pointer hover:bg-slate-100">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/66/News24_Logo.jpg" alt="News 24" className="h-5" />
            <span>News 24</span>
            <i className="fa-solid fa-tower-broadcast text-red-700"></i>
          </li>

          <li className="flex items-center justify-between  px-1 py-2 cursor-pointer hover:bg-slate-100">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Sony_Channel_Logo_2019.svg/1200px-Sony_Channel_Logo_2019.svg.png" alt="Sony Tv" className="h-5" />
            <span>Sony Live</span>
            <i className="fa-solid fa-tower-broadcast text-red-700"></i>
          </li>

          <li className="flex items-center justify-between  px-1 py-2 cursor-pointer hover:bg-slate-100">
            <img
              src="https://yt3.googleusercontent.com/oQ2NQMuq-9IS6_MZdsGXa0RWecaACremA01Z7jo-YpoEF1H6PyUF8PZzXkV10OYwSP3UMJDeTg=s900-c-k-c0x00ffffff-no-rj"
              alt="Dhruv Rathhe"
              className="h-5"
            />
            <span>Dhruv Rathee</span>
            <i className="fa-solid fa-circle text-blue-600 text-[5px]"></i>
          </li>

          <li className="flex items-center justify-between  px-1 py-2 cursor-pointer hover:bg-slate-100">
            <img src="https://yt3.googleusercontent.com/ytc/APkrFKaUe-kvd7BfXihfu4MIPTdtDy815Uzk5nWA0mkgWg=s900-c-k-c0x00ffffff-no-rj" alt="Round2Hell" className="h-5" />
            <span>Round2Hell</span>
            <i className="fa-solid fa-circle text-blue-600 text-[5px]"></i>
          </li>

          <li className="flex items-center justify-between  px-1 py-2 cursor-pointer hover:bg-slate-100">
            <img
              src="https://yt3.googleusercontent.com/j01juFvKwHnKHdgcklpPKLkfNBuGbGJKLBwXVhbN_5LeCU3S9bTsHBL-MKPRQCjpZpfPJ_dJ=s900-c-k-c0x00ffffff-no-rj"
              alt="Carryminati"
              className="h-5"
            />
            <span>Carryminati</span>
            <i className="fa-solid fa-circle text-blue-600 text-[5px]"></i>
          </li>

          <li className="flex items-center justify-between  px-1 py-2 cursor-pointer hover:bg-slate-100">
            <img src="https://iconape.com/wp-content/png_logo_vector/t-series.png" alt="T-series" className="h-5" />
            <span>T-Series</span>
            <i className="fa-solid fa-circle text-blue-600 text-[5px]"></i>
          </li>
        </ul>

        <h1 className="font-bold pt-5">Explore</h1>
        <ul>
          <li className="text-base rounded-lg px-1 py-2  cursor-pointer hover:bg-slate-100  ">
            <i className="fa-solid fa-fire mr-4"></i>
            <span>Trending</span>
          </li>
          <li className="text-base rounded-lg px-1 py-2  cursor-pointer hover:bg-slate-100  ">
            <i className="fa-solid fa-bag-shopping mr-4"></i>
            <span>Shopping</span>
          </li>
          <li className="text-base rounded-lg px-1 py-2  cursor-pointer hover:bg-slate-100  ">
            <i className="fa-solid fa-music mr-4"></i>
            <span>Music</span>
          </li>
          <li className="text-base rounded-lg px-1 py-2  cursor-pointer hover:bg-slate-100  ">
            <i className="fa-solid fa-satellite-dish mr-4"></i>
            <span>Live</span>
          </li>
          <li className="text-base rounded-lg px-1 py-2  cursor-pointer hover:bg-slate-100  ">
            <i className="fa-solid fa-newspaper mr-4"></i>
            <span>News</span>
          </li>
          <li className="text-base rounded-lg px-1 py-2  cursor-pointer hover:bg-slate-100  ">
            <i className="fa-solid fa-gamepad mr-4"></i>
            <span>Gaming</span>
          </li>
          <li className="text-base rounded-lg px-1 py-2  cursor-pointer hover:bg-slate-100  ">
            <i className="fa-solid fa-lightbulb mr-4"></i>
            <span>Learning</span>
          </li>
        </ul>

        <h1 className="font-bold text-sm pt-5 pb-2">More From Youtube</h1>
        <ul>
          <li className="flex items-center rounded-lg  cursor-pointer hover:bg-slate-100 py-2 text-sm">
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png?20220706172052" alt="youtube-logo" className="h-4 mr-3" />
            <span>Youtube Premium</span>
          </li>
          <li className="flex items-center rounded-lg  cursor-pointer hover:bg-slate-100 py-2">
            <img src="https://cdn.pixabay.com/photo/2021/05/22/10/22/youtube-6273167_1280.png" alt="youtube-logo" className="h-4 mr-3" />
            <span>Youtube Studio</span>
          </li>
          <li className="flex items-center rounded-lg  cursor-pointer hover:bg-slate-100 py-2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Youtube_Music_icon.svg/512px-Youtube_Music_icon.svg.png" alt="youtube-logo" className="h-4 mr-3" />
            <span>Youtube Music</span>
          </li>
          <li className="flex items-center rounded-lg  cursor-pointer hover:bg-slate-100 py-2">
            <img src="https://play-lh.googleusercontent.com/iMc1P4fc7bMSVvQaztKcoQ5MS1J7OLu0bOkz2kVnXZTYkiJ_k3AluzkvOAntYCthgOXQ" alt="youtube-logo" className="h-4 mr-3" />
            <span>Youtube Kid</span>
          </li>
        </ul>

        <ul className="py-4 border border-t-gray-200">
          <li className="text-base rounded-lg px-1 py-2  cursor-pointer hover:bg-slate-100  ">
            <i className="fa-solid fa-gear mr-4"></i>
            <span>Settings</span>
          </li>
          <li className="text-base rounded-lg px-1 py-2  cursor-pointer hover:bg-slate-100  ">
            <i className="fa-regular fa-flag mr-4"></i>
            <span>Report History</span>
          </li>
          <li className="text-base rounded-lg px-1 py-2  cursor-pointer hover:bg-slate-100  ">
            <i className="fa-solid fa-circle-question mr-4"></i>
            <span>Help</span>
          </li>
          <li className="text-base rounded-lg px-1 py-2  cursor-pointer hover:bg-slate-100  ">
            <i className="fa-solid fa-message mr-4"></i>
            <span>Send feedback</span>
          </li>
        </ul>
        <p className="text-gray-600 mb-5 mt-2">About Press Copyright Contact us Creator Advertise Developers</p>
        <p className="text-gray-600 mb-5">Terms Privacy Policy & SafetyHow YouTube worksTest new features</p>
        <p className="text-gray-400 my-5 pb-20">© 2023 Wasim</p>
      </div>
    </>
  );
}

export default Sidebar;
