import React from "react";

import "./Paragraph.css"

const Paragraph = (props) => {
    const {label} = props;


   return <p className="paragraph">{label}</p>
}



export default Paragraph;