import "../../styles/Filter/btn_search.scss"
function BtnSearch() {

  function refresh(){
    console.log("click")
    window.location.reload()
  }
  
    return (
      <div className="btn_search" onClick={refresh}>
        SEARCH
      </div>
    );
  }
  
  export default BtnSearch;