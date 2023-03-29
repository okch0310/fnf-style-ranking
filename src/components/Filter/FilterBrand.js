import { useState } from "react";
import "../../styles/Filter/filter_brand.scss";

function FilterBrand() {
  const [dropdown, setDropdown]=useState(false);
  
  function clickDropdown(){
    console.log("click")
    setDropdown(!dropdown);
    console.log("dropdown상태:",dropdown);
  }
  function clickMLB(){
    console.log("mlb click")
  }
    return (
     
      <div>
       
       <div className="dropdown_s_wrapper" onClick={clickDropdown}>
        <div className="brand_name">STRETCH ANGELS</div>
        <div className="icon">▿</div>
       </div>
       <div className={dropdown?"dropdown_b_wrapper":"dropdown_b_wrapper_n"}>
        <div className="brand" onClick={clickMLB}>MLB</div>
        <div className="brand">DISCOVERY</div>
        <div className="brand">MLB Kids</div>
        <div className="brand">STRETCH ANGELS</div>
        <div className="brand">DUVETICA</div>

        {/* "MLB": "M",

  "DISCOVERY": "X",

  "MLB Kids":"I",

  "STRETCH ANGELS":"A",

  "DUVETICA": "V" */}

       </div>
      </div>
    );
  }
  
  export default FilterBrand;