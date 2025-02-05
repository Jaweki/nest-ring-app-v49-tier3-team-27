import React from "react";
import EventSearch from "./EventSearch";
import EventCategories from "./EventCategories";
import EventButtons from "./EventButtons";
import EventCards from "./EventCards";

const EventsHomePage = () => {
  return (
    <main className=" w-full h-full max-sm:pb-14 flex flex-col pb-2">
      {/* Event Search section */}
      <EventSearch />
      <div className="w-full h-full bg-white rounded-t-lg mt-3  overflow-hidden overflow-y-auto flex flex-col items-center pb-3">
        {/* Event category filter section */}
        <EventCategories />
        {/* Event buttons */}
        <EventButtons />
        {/* Event cards */}
        <EventCards />
      </div>
    </main>
  );
};

export default EventsHomePage;
