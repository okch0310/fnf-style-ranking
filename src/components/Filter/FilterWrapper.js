import BtnSearch from "./BtnSearch";
import FilterBrand from "./FilterBrand";
import FilterDate from "./FilterDate";
import "../../styles/Filter/filter_wrapper.scss"

function FilterWrapper() {
 
    return (
      <div className="filter_wrapper">
       <FilterBrand/>
        <FilterDate/>
        <BtnSearch />
      </div>
    );
  }
  
  export default FilterWrapper;