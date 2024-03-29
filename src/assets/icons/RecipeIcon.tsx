import React from 'react';

interface IRecipeIconLogoPropsType {
  width: string;
  height: string;
}

const RecipeIconLogo = ({ width, height }: IRecipeIconLogoPropsType) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 270 270"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M200 117H232C237.523 117 242 121.477 242 127V142C242 147.523 237.523 152 232 152H200V117Z"
        fill="#EE9322"
      />
      <circle cx="135" cy="135" r="125" stroke="#3BB819" stroke-width="20" />
      <circle cx="135" cy="135" r="72.5" stroke="#3BB819" stroke-width="25" />
    </svg>
  );
};

export default RecipeIconLogo;
