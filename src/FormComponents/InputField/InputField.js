import React from "react";

import "./InputField.css";

const InputField = props => {
	const { inputName, inputType, inputPlaceholder, inputHandleChange } = props;

	return (
		<input
			className='inputField'
			name={inputName}
			type={inputType}
			placeholder={inputPlaceholder}
			onClick={inputHandleChange}></input>
	);
};

export default InputField;
