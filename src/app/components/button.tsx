import React from "react";

const SparkleButton = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-black">
      <button className="relative px-8 py-4 text-lg font-semibold text-cyan-400 border-2 border-cyan-500 rounded-full overflow-hidden group hover:shadow-cyan-500/50 shadow-md transition-all duration-300">
        <span className="absolute inset-0 bg-cyan-500 opacity-0 group-hover:opacity-10 blur-lg transition duration-500"></span>
        <span className="relative z-10">Hover Me +</span>
        {/* Sparkles */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="absolute w-2 h-2 bg-white rounded-full opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500 ease-in-out blur-lg top-0 left-1/4"></span>
          <span className="absolute w-2 h-2 bg-white rounded-full opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500 ease-in-out blur-lg left-0 top-1/2"></span>
          <span className="absolute w-2 h-2 bg-white rounded-full opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500 ease-in-out blur-lg bottom-0 left-3/4"></span>
          <span className="absolute w-2 h-2 bg-white rounded-full opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500 ease-in-out blur-lg right-0 top-1/4"></span>
        </div>
      </button>
    </div>
  );
};

export default SparkleButton;
