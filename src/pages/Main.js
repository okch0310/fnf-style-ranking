
import FilterWrapper from "../components/Filter/FilterWrapper";
import Header from "../components/Header/Header";
import DataTable from "../components/DataTable/DataTable";
//import {GetData, tableData} from "../utils/GetData"
import { useState, useEffect } from "react";
import "../styles/Main/main.scss";

function Main() {

  const [tableData, setTableData] = useState("");

    function get() {
        fetch('http://localhost:8000/')
            .then((response) => response.json())
            .then((data) => setTableData(data));
    }

    useEffect(() => {
        get();
    }, [])

    //console.log("?",tableData);
  
    return (
      <div>
        <Header/>

        <FilterWrapper />
       
        <DataTable tableData={tableData} />
   
        
      </div>
    );
  }
  
  export default Main;
  