import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function SearchCard() {
  const data = useSelector((state) => state?.searchData?.searchData);

  if (!data || !data.items || data.items.length === 0) {
    return null;
  }

  const SearchedItem = ({ item }) => {
    return (
      <div
        className="xs:flex xs:justify-start xs:flex-col xs:w-[280px] sm:w-[375px] sml:w-[500px] md:w-[667px] mdl:w-[768px] lg:w-[992px]  xs:my-3 lg:flex-row  lg:gap-4 lg:justify-center"
        key={item.id.videoId}
      >
        <div className="lg:w-[300px]">
          <img className="rounded-lg xs:w-full" alt="Thumbnail icon" src={item.snippet.thumbnails.medium.url} />
        </div>
        <ul className="lg:w-[600px]">
          <li className="font-bold py-2 whitespace-nowrap overflow-hidden text-ellipsis xs:text-xs xs:font-semibold xs:py-1 sm:text-base sml:text-lg">{item.snippet.title}</li>
          <li className="xs:font-normal xs:text-xs sm:text-sm sml:text-base">{item.snippet.channelTitle}</li>
          <li className="xs:font-normal xs:text-xs sm:text-sm sml:text-base">Date: {new Date(item.snippet.publishedAt).toLocaleDateString()}</li>
          <li className="text-gray-700 my-3 xs:font-normal xs:text-xs xs:my-1 xs:hidden md:block md:text-sm">{item.snippet.description}</li>
        </ul>
      </div>
    );
  };
  // console.log(data.items);

  return (
    <>
      <div className="flex flex-wrap justify-center w-full m-auto lg:justify-center lg:px-6 ">
        {data.items.map((item) => (
          <Link key={item.id.videoId} to={"/watch?v=" + item.id.videoId}>
            <SearchedItem item={item} />
          </Link>
        ))}
      </div>
    </>
  );
}

export default SearchCard;
