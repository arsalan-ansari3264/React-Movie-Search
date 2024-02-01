import React from "react";
    import { ClipLoader } from "react-spinners";
const Loading = ({ isLoading }) => {
  const override = `
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
  return (
    <div className="loading_container">
      <ClipLoader css={override} size={150} color={"#fff"} isLoading={isLoading} />
    </div>
  );
};

export default Loading;
