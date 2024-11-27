import React from "react";
import Loading from "react-loading-components";

export default function Loader() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Loading
        type="spinning_circles"
        width={100}
        height={100}
        fill="rgb(163 230 53)"
      />
    </div>
  );
}
