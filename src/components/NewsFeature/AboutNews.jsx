import React from "react";
import Input from "../shared/common/Input";
import { SearchIcon } from "lucide-react";
import { NewsData } from "../../data/data";

const AboutNews = () => {
  return (
    <div className="hidden md:inline-block px-6">
      <div className="search relative flex items-center">
        <Input
          type="text"
          placeholder="Enter Keywords"
          className="border border-gray-200 text-gray-700 rounded-full px-3 py-3 focus:outline-none w-60"
        />
        <span className="absolute right-0 px-3">
          <SearchIcon className="text-gray-400" />
        </span>
      </div>
      <div className="py-6">
        <h1 className="border-b-2 border-yellow-300 text-xl text-gray-700 font-semibold w-32 pb-3">
          About
        </h1>
        <hr className="text-gray-300" />
      </div>
      <p>
        Explore curated highlights from the tech world, featuring groundbreaking
        updates, industry insights, and future-defining announcements.
      </p>

      <div className="py-6">
        <h1 className="border-b-2 border-yellow-300 text-xl text-gray-700 font-semibold w-32 pb-3">
          Top Stories
        </h1>
        <hr className="text-gray-300" />
      </div>

      <div className="story space-y-5 py-4">
        {NewsData.map((story, i)=> (
            <div className="flex items-center space-x-3" key={i}>
                <img className="w-22 h-12 object-cover" src={story.storyImage} alt={story.title} />
                <div className="text-gray-700">
                    <h1 className="">{story.title}</h1>
                    <p className="text-sm text-gray-500">{story.Published}</p>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default AboutNews;
