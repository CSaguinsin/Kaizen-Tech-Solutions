const LeftTimeLineCard = ({ stepNumber, title, date, description }) => {
  return (
    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto text-white font-semibold text-lg">
          {stepNumber}
        </h1>
      </div>
      <div className="order-1 bg-gray-100 rounded-lg shadow-md w-5/12 xs:px-1 sm:px-6 py-4">
        <div className="lg:items-center lg:flex lg:justify-between">
          <h3 className="font-bold text-black font-[inter] xs:text-sm xs:mb-2 md:mb-0 sm:text-base md:text-lg lg:text-xl">
            {title}
          </h3>
          <span className="bg-blue-100 text-blue-800 xs:text-xs font-medium me-2 px-4 py-1 rounded-full dark:bg-blue-900 dark:text-blue-300">
            {date}
          </span>
        </div>
        <p className="mt-2 xs:text-xs md:text-sm font-medium leading-snug tracking-wide text-gray-700 text-opacity-100 font-[inter]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default LeftTimeLineCard;
