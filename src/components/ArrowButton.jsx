import React from 'react';
import { IconButton } from '@material-tailwind/react';

const ArrowButton = ({ handlePrev, handleNext }) => {
  const onClick = handlePrev || handleNext;
  const isLeft = !!handlePrev;

  return (
    <IconButton
      variant="text"
      size="md"
      onClick={onClick}
      className={`!absolute top-2/4 ${isLeft ? 'left-4' : 'right-4'} -translate-y-2/4 bg-black bg-opacity-80 shadow-xl shadow-purple-300/50 text-purple-100 border-purple-200 border-2 rounded-full`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={isLeft ? "M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" : "M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"}
        />
      </svg>
    </IconButton>
  );
};

export default ArrowButton;
