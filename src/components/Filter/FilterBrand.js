import { useState, useEffect } from "react";
import "../../styles/Filter/filter_brand.scss";

function FilterBrand() {
  const [dropdown, setDropdown]=useState(false);
  const [brand, setBrand]=useState("");
  
  function clickDropdown(){
    console.log("click")
    setDropdown(!dropdown);
  }
  
  function clickMLB(){
    
    setBrand("MLB");
    postBrandName("M");
    setDropdown(!dropdown)
  }
  function clickDISCOVERY(){
    setBrand("DISCOVERY");
    postBrandName("X");
    setDropdown(!dropdown)
  }

  function clickMLBKids(){
    setBrand("MLB KIDS");
    postBrandName("I");
    setDropdown(!dropdown)
  }
  function clickSA(){
    setBrand("STRETCH ANGELS");
   postBrandName("A");
   setDropdown(!dropdown)
  }
  function clickDV(){
    setBrand("DUVETICA");
   postBrandName("V");
   setDropdown(!dropdown)
  }

  useEffect(() => {
    console.log("브랜드 이름:", brand);
    setBrand(brand);
  }, [brand]);

  function postBrandName(t){
    console.log("[1.postBrandName]함수 내부: 브랜드 이름:",t);
    fetch("http://localhost:8000/brand_name", {
            method : "POST",          
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify({ brand: `${t}` }),   //실제 데이터 파싱하여 body에 저장
        }).then(res=>res.json())        // 리턴값이 있으면 리턴값에 맞는 req 지정
          .then(res=> {
            console.log("[2.postBrandName] POST요청으로 Back에 넘겨준 값:",res);          // 리턴값에 대한 처리
          });
  }
    return (
     
      <div>
       
       <div className="dropdown_s_wrapper" onClick={clickDropdown}>
        <div className="brand_name">{brand}</div>
        <div className="icon">▿</div>
       </div>
       <div className={dropdown?"dropdown_b_wrapper":"dropdown_b_wrapper_n"}>
        <div className="brand" onClick={clickMLB}>MLB</div>
        <div className="brand" onClick={clickDISCOVERY}>DISCOVERY</div>
        <div className="brand" onClick={clickMLBKids}>MLB KIDS</div>
        <div className="brand" onClick={clickSA}>STRETCH ANGELS</div>
        <div className="brand" onClick={clickDV}>DUVETICA</div>

       </div>
      </div>
    );
  }
  
  export default FilterBrand;