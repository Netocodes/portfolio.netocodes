"use client";
import { Triangle } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="!z-50 w-full bg-[#b9cfed] h-screen p-20 flex items-center justify-center">
      <Triangle
        visible={true}
        height="120"
        width="120"
        color="#4539f5"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loading;
// This is a loading component that can be used in the app