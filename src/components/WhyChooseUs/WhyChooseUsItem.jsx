import React from "react";

function WhyChooseUsItem(props) {
    const {linkImg, altImg, title, content} = props
  return (
    <div className="why-choose-us-item">
      <img
        src={linkImg}
        alt={altImg}
        className="mx-auto"
      />
      <h4 className="text-center d-block">{title}</h4>
      <p className="text-center mx-auto">
        {content}
      </p>
    </div>
  );
}

export default WhyChooseUsItem