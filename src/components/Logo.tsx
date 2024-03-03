import React from "react";
const imgUrl =
  "data:image/png;base64,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";

const Logo = () => {
  return (
    <img src={imgUrl} width={40} height={40} style={{ marginBottom: 20 }} />
  );
};

export default Logo;
