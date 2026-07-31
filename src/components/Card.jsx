import React from "react";
import StarRating from "./StarRating";

function Card({ course }) {
  return (
    <article className="h-full w-full border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow bg-white flex flex-col p-3 md:p-0 gap-3 md:gap-0">
      <div className="flex flex-row md:flex-col items-stretch md:items-start flex-1">
        <div className="md:p-5 md:w-full">
          <img
            src={course.image}
            alt={course.title}
            className="w-22 h-22 md:w-full md:self-auto md:h-60 rounded-xl object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="pl-3 md:p-5 md:pt-0 flex flex-col flex-1">
          <h3 className="font-semibold font-popins text-gray-900 text-base md:text-lg mb-1 line-clamp-2">
            {course.title}
          </h3>
          <p className="hidden md:block font-dm-sans text-gray-500 text-base mb-4 line-clamp-2">
            {course.desc}
          </p>

          <div className="flex items-center gap-2 md:gap-3">
            <img
              src={course.avatar}
              alt={course.mentor}
              className="w-8 h-8 md:w-10 md:h-10 rounded-lg object-cover shrink-0"
            />
            <div className="leading-tight min-w-0 font-dm-sans">
              <p className="font-semibold text-gray-900 text-base truncate">
                {course.mentor}
              </p>
              <p className="text-gray-500 text-sm truncate">
                {course.role}{" "}
                <span className="font-semibold text-gray-700">
                  {course.company}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-2 flex-nowrap md:px-5 md:pb-5">
        <div className="flex items-center gap-1 min-w-0 shrink">
          <StarRating rating={course.rating} />
          <span className="text-gray-500 text-sm underline whitespace-nowrap shrink-0">
            {course.rating} ({course.reviews})
          </span>
        </div>
        <span className="text-green-600 font-popins font-bold text-xl md:text-2xl whitespace-nowrap shrink-0">
          {course.price}
        </span>
      </div>
    </article>
  );
}

export default Card;
