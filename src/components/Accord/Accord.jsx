import React, { useState } from "react";
import "./Accord.css";

function Accord({ title, content, id }) {
  console.log("key", id);
 
  const [currentActive, setCurrentActive] = useState(" ");
 
  const checkactive = (faqid) => {
    console.log("faq",faqid)
    console.log('before setactiveid',currentActive)
    setCurrentActive(currentActive === faqid ? "": faqid );
    
  };
  console.log("after setactiveid",currentActive)

  return (
    <div className="accord">
      <div className="accordSection">
        <div key={id} className="accordTitle">
          <div key={id}>{title}</div>
          <div onClick={() => checkactive(id)}>
            {currentActive === id ? "-" : "+"}
          </div>
        </div>
        {currentActive === id && (
          <div className="accordContent"> {content}</div>
        )}
      </div>
    </div>
  );
}

export default Accord;
