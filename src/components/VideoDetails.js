import React, { useEffect, useState } from "react";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";
function VideoDetails({ videoId }) {
  const [details, setDetails] = useState([]);
  const [showFullText, setShowFullText] = useState(false);

  const toggleShowMore = () => {
    setShowFullText(!showFullText);
  };

  useEffect(() => {
    videoDetails();
  }, []);

  const videoDetails = async () => {
    try {
      const data = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=AIzaSyBoS-42_ZpuPpZcnBaYsVzJ-RMqhvn9zuc`
      );

      const json = await data.json();

      setDetails(json);
    } catch (error) {
      console.log(error);
    }
  };
  if (!details || !details.items || details.items.length === 0) {
    return null;
  }
  const { title, channelTitle, publishedAt, tags, description } = details?.items[0]?.snippet;

  const { likeCount, viewCount, commentCount } = details?.items[0]?.statistics;

  const displayText = showFullText ? description : `${description.slice(0, 100)}`;

  return (
    <>
      <div className="xs:w-[320px] sm:w-[375px] sml:w-[500px] md:w-[667px] mdl:w-[768px] lg:w-[992px] mdl:px-4">
        <h1 className="text-xl font-semibold my-3 xs:text-xs xs:font-medium xs:my-1 sml:text-base sml:font-semibold sml:my-2 sm:text-base md:text-lg lg:text-2xl">{title}</h1>
        <div className="flex justify-between items-center my-5 xs:flex-wrap xs:my-2">
          <div className="flex items-center gap-3 xs:justify-between sm:gap-8">
            <img className="h-9" src="https://image.similarpng.com/very-thumbnail/2021/10/Youtube-icon-design-on-transparent-background-PNG.png" alt="user-icon" />
            <div>
              <h2 className="text-lg font-semibold xs:text-xs xs:font-normal sm:text-sm md:text-lg">{channelTitle}</h2>
              <p className="text-gray-500 sm:text-sm">subscribers</p>
            </div>

            <p className="font-semibold text-base bg-slate-100 px-3 py-1 rounded-full cursor-pointer hover:bg-slate-200 xs:font-normal xs:text-xs xs:px-2 sm:text-sm">
              <i className="fa-solid fa-bell"></i> Subscribed <i className="fa-solid fa-angle-down"></i>
            </p>
          </div>
          <div className="xs:flex xs:justify-between items-center xs:my-3 xs:gap-3 sm:gap-5">
            <p className="font-semibold text-base bg-slate-100 px-3 py-1 rounded-full cursor-pointer hover:bg-slate-200 xs:font-normal xs:text-xs xs:px-1 sm:px-2 md:text-base">
              <i className="fa-regular fa-thumbs-up "></i> {Math.floor(likeCount / 10000)}K likes | <i className="fa-regular fa-thumbs-down"></i>
            </p>

            <p className="font-semibold text-base bg-slate-100 px-3 py-1 rounded-full cursor-pointer hover:bg-slate-200 xs:font-normal xs:text-xs xs:px-1 sm:px-2 md:text-base">
              <i className="fa-solid fa-share"></i> share
            </p>
            <p className="font-semibold text-base bg-slate-100 px-3 py-1 rounded-full cursor-pointer hover:bg-slate-200 xs:font-normal xs:text-xs xs:px-1 sm:px-2 md:text-base">
              <i className="fa-solid fa-download"></i> dawnload
            </p>
            <p className="font-semibold text-base bg-slate-100 px-3 py-1 rounded-full cursor-pointer hover:bg-slate-200 xs:font-normal xs:text-xs xs:px-1 sm:px-2 md:text-base xs:hidden sml:block">
              <i className="fa-solid fa-scissors"></i> Clip
            </p>
            <p className="font-semibold text-base bg-slate-100 px-3 py-1 rounded-full cursor-pointer hover:bg-slate-200 xs:font-normal xs:text-xs xs:px-1 sm:px-2 xs:hidden sml:block md:text-base">
              <i className="fa-solid fa-ban"></i> Stop ads
            </p>
          </div>
        </div>
        <div className="bg-slate-100 p-3 rounded-lg">
          <div className="xs:flex xs:flex-col">
            <h3 className="font-semibold xs:font-normal">{viewCount} views</h3>
            <h3 className="font-semibold xs:font-normal">{publishedAt}</h3>
            <div className="flex xs:flex-wrap">
              {tags?.slice(0, 5).map((tag) => (
                <p className="font-semibold text-blue-700 xs:font-medium" id={tag}>
                  #{tag}
                </p>
              ))}
            </div>
          </div>
          <p className="text-sm xs:text-xs md:text-base">{displayText}</p>
          <p onClick={toggleShowMore} className="cursor-pointer font-semibold">
            {showFullText ? "Show Less" : "...more"}
          </p>
        </div>
        <div>
          <LiveChat />
        </div>
        <div>
          <CommentContainer commentCount={commentCount} />
        </div>
      </div>
    </>
  );
}

export default VideoDetails;
