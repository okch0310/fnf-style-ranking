import { useEffect } from "react";
import "../../styles/Table/table.scss"
import {getData} from "../../utils/getData.js"

function Table() {

  useEffect(() => {
    getData();
}, [])

    
  return (
      <div className="table_wrapper">
       Table
      </div>
    );
  }
  
  export default Table;