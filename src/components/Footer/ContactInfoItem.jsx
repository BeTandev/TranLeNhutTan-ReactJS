import React from "react";

function ContactInfoItem(props) {
  const { content, iconContact } = props;
  return (
    <p className="footer-font">
      <i className={iconContact} />
      {content}
    </p>
  );
}

export default ContactInfoItem;
