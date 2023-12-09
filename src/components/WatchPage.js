import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import VideoDetails from "./VideoDetails";

function WatchPage() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  useEffect(() => {
    dispatch(closeMenu());
  });
  useEffect(() => {}, [searchParams]);
  return (
    <>
      <div className="flex flex-col py-3 px-5 w-full xs:w-[280px] xs:px-0 xs:m-auto sm:w-[375px] sml:w-[500px] md:w-[667px] mdl:w-[768px] lg:w-[992px] xl:w-[1280px]">
        <div>
          <div className="xs:w-[280px]">
            <iframe
              className="xs:w-[280px] sm:w-[375px] sm:h-[250px] sml:w-[500px] sml:h-[300px] md:w-[667px] mdl:w-[768px] mdl:h-[500px] lg:w-[992px] xl:w-[1280px] xl:h-[600px]"
              src={"https://www.youtube.com/embed/" + searchParams.get("v")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div>
          <VideoDetails videoId={videoId} />
        </div>
      </div>
    </>
  );
}

export default WatchPage;
