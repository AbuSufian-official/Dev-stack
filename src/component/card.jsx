const Card = () => {
  return (
    <div className="text-[15px] w-full md:w-auto max-w-[540px] rounded-[28px] border border-[#e7edf5] bg-white px-4 py-6">
      
      {/* Top Section */}
      <div className="flex items-start justify-between">
        
        {/* React Logo */}
        <div className="text-[#61DAFB]">
          <svg
            width="58"
            height="58"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[58px] w-[58px]"
          >
            <ellipse
              cx="50"
              cy="50"
              rx="45"
              ry="17"
              stroke="currentColor"
              strokeWidth="3"
            />
            <ellipse
              cx="50"
              cy="50"
              rx="45"
              ry="17"
              transform="rotate(60 50 50)"
              stroke="currentColor"
              strokeWidth="3"
            />
            <ellipse
              cx="50"
              cy="50"
              rx="45"
              ry="17"
              transform="rotate(120 50 50)"
              stroke="currentColor"
              strokeWidth="3"
            />
            <circle
              cx="50"
              cy="50"
              r="7"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Popular Badge */}
        <span className="rounded-full border border-[#d7edff] bg-[#f0f9ff] px-5 py-2  font-medium text-[#0798e8]">
          Popular
        </span>
      </div>

      {/* Content */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold leading-tight tracking-[-0.5px] text-[#111827]">
          React
        </h2>

        <p className="mt-5 max-w-[470px]  font-normal leading-[1.6] tracking-[-0.2px] text-[#657895]">
          A declarative, component-based JavaScript library for building modern
          user interfaces.
        </p>
      </div>

      {/* Divider */}
      <div className="my-7 h-px w-full bg-[#edf1f6]" />

      {/* Information */}
      <div className="flex  items-center justify-between gap-2">
        
        {/* Category */}
        <span className="rounded-lg bg-[#f3f6fa] px-4 py-2  font-medium text-[#40516a]">
          Frontend
        </span>

        {/* Level */}
        <span className=" font-normal text-[#657895]">
          Beginner-Friendly
        </span>

        {/* Rating */}
        <div className="flex items-center gap-1  font-medium text-[#40516a]">
          <span className=" text-[#ffb411]">★</span>
          <span>4.9</span>
        </div>
      </div>

      {/* Button */}
      <button
        className="
          mt-7
          w-full
          rounded-[15px]
          bg-[#080d1b]
          px-5
          py-3
          
          font-medium
          text-white
          transition-all
          duration-300
          hover:-translate-y-1
          hover:bg-[#111827]
          hover:shadow-[0_10px_25px_rgba(8,13,27,0.18)]
          active:translate-y-0
        "
      >
        Add to Stack
      </button>
    </div>
  );
};

export default Card;