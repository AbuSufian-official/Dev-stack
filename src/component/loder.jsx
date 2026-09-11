const Loader = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center backdrop-blur px-4">
      <div className="flex flex-col items-center justify-center">

        {/* Loader */}
        <div className="relative h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32">

          {/* Outer rotating ring */}
          <div
            className="
              absolute inset-0 rounded-full
              border-4 border-transparent
              border-t-[#ff512f]
              border-r-[#e91e63]
              border-b-[#9c27b0]
              animate-spin
            "
          />

          {/* Inner rotating ring */}
          <div
            className="
              absolute inset-3 rounded-full
              border-4 border-transparent
              border-l-[#ff512f]
              border-b-[#e91e63]
              animate-spin
              [animation-duration:1.2s]
            "
          />

          {/* Center gradient orb */}
          <div
            className="
              absolute inset-7 rounded-full
              bg-gradient-to-r from-[#ff512f] via-[#e91e63] to-[#9c27b0]
              animate-pulse
              shadow-[0_0_25px_rgba(233,30,99,0.6)]
            "
          />

          {/* Glow */}
          <div
            className="
              absolute inset-0 rounded-full
              bg-gradient-to-r from-[#ff512f] via-[#e91e63] to-[#9c27b0]
              opacity-20 blur-xl
              animate-pulse
            "
          />
        </div>

        {/* Loading text */}
        <div className="mt-8 text-center">
          <h2
            className="
              text-xl sm:text-2xl md:text-3xl
              font-bold tracking-[0.2em]
              text-transparent bg-clip-text
              bg-gradient-to-r from-[#ff512f] via-[#e91e63] to-[#9c27b0]
              animate-pulse
            "
          >
            LOADING
          </h2>

          {/* Animated dots */}
          <div className="mt-3 flex justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#ff512f] animate-bounce" />
            <span
              className="
                h-2 w-2 rounded-full bg-[#e91e63]
                animate-bounce
                [animation-delay:150ms]
              "
            />
            <span
              className="
                h-2 w-2 rounded-full bg-[#9c27b0]
                animate-bounce
                [animation-delay:300ms]
              "
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Loader;

