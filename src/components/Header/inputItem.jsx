import React from "react";

function InputItem(props) {
  let { typeInput = "text", placeholderInput, iconInput, nameInput, isInvisible, isSubmit, value} = props;

  let classNameInputItem = ""
  if(isInvisible){
    classNameInputItem += "div-input-header invisible"
  }else{
    classNameInputItem += `div-input-header`
  }

  let inputClassName = ""
  if(isSubmit){
    inputClassName = "input-btn text-white input p-2 px-3 w-100"
    typeInput = "submit"
  }else{
    inputClassName = "input p-2 px-3"
  }

  return (
    <div className={classNameInputItem}>
      <input
        type={typeInput}
        placeholder={placeholderInput}
        className={inputClassName}
        name={nameInput}
        value={value}
      />
      <span className="input-icon">
        <i className={iconInput} />
      </span>
    </div>
  );
}

export default InputItem;
