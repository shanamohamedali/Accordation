import React, { useState } from "react";
import "./Accord.css";
import { faq } from "../../App";

function Accord() {
  console.log("key", faq.id);
 
  const [currentActive, setCurrentActive] = useState(" ");
 
  const checkactive = (faqid) => {
    console.log("faq",faqid)
    console.log('before setactiveid',currentActive)
    setCurrentActive(currentActive === faqid ? "": faqid );
    
  };
  console.log("after setactiveid",currentActive)

  return (
    <>
    {faq.map((item)=>(
          <div key={item.id} className="accord">
          <div className="accordSection">
            <div key={item.id} className="accordTitle">
              <div key={item.id}>{item.title}</div>
              <div onClick={() => checkactive(item.id)}>
                {currentActive === item.id ? "-" : "+"}
              </div>
            </div>
            {currentActive === item.id && (
              <div className="accordContent"> {item.content}</div>
            )}
          </div>
        </div>
              ))}
              </>
  );

}

export default Accord;
