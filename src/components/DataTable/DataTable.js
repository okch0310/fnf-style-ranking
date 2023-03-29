import "../../styles/Table/data_table.scss"


import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { NumericFormat } from 'react-number-format';


function DataTable(props) {
//data props로 넘겨 받기
  console.log("넘어가?", props.tableData)
  const dt= Array.from(props.tableData);
  console.log(dt)

// 숫자에 , 추가
function CustomTableCell(props) {
  const { value } = props;
  return (
    <TableCell >
      <NumericFormat value={value} displayType={'text'} thousandSeparator={true} />
    </TableCell>
  );
}

function CustomTableCell2(props) {
  const { value } = props;
  return (
    <TableCell sx={{  backgroundColor:'white'}} className="tmpr3">
      <NumericFormat value={value} displayType={'text'} thousandSeparator={true} />
    </TableCell>
  );
}


  return (
    
<div className="table_wrapper">

      <TableContainer className="table_container" sx={{ overflowX: 'auto'
       
  }} component={Paper}>
       
        <Table aria-label="sticky table" sx={{ minWidth: 2500 }}  >
     
       <TableHead className="tmph">
         <TableRow >
         
           <TableCell sx={{ backgroundColor:'white' , width:'50px' }} className="tmpl1" align="right">랭킹</TableCell>
           
           <TableCell sx={{ backgroundColor:'white' , width:'50px' }} className="tmpl2_black" align="right">상승</TableCell>
           
           <TableCell sx={{  backgroundColor:'white' , width:'100px' }}className="tmpl3" align="right">대표품번</TableCell>
           <TableCell sx={{  backgroundColor:'white' , width:'50px' }} className="tmpl4" align="right">이미지</TableCell>
           <TableCell sx={{  width:'100px' }} align="right">택가</TableCell>
           <TableCell sx={{  width:'50px' }} align="right">할인율</TableCell>
           <TableCell sx={{  width:'150px' }} align="right">제품명</TableCell>
           {/* <TableCell align="right">추이</TableCell> */}
           <TableCell sx={{  width:'50px' }} align="right">수량</TableCell>
           <TableCell sx={{  width:'50px' }} align="right">국내</TableCell>
           <TableCell sx={{  width:'50px' }} align="right">면세</TableCell>
           <TableCell sx={{  width:'50px' }} align="right">RF도매</TableCell>
           <TableCell sx={{  width:'50px' }} align="right">실판</TableCell>
           <TableCell align="right">협력사</TableCell>
           <TableCell sx={{  width:'50px' }} align="right">판매액</TableCell>
           <TableCell sx={{  width:'50px' }} align="right">누적판매량</TableCell>
           <TableCell sx={{  width:'50px' }} align="right">누적입고량</TableCell>
           <TableCell sx={{  width:'50px' }} align="right">물류재고</TableCell>
           
           <TableCell sx={{  backgroundColor:'white' ,width:'50px' }} className="tmpr3" align="right">총재고</TableCell>
           <TableCell sx={{  backgroundColor:'white' ,width:'50px' }} className="tmpr2" align="right">재고주수</TableCell>
           <TableCell sx={{  backgroundColor:'white' ,width:'50px' }} className="tmpr1" align="right">판매율</TableCell>

         </TableRow>
   
        
       </TableHead>
       <TableBody>  
         {
           Array.isArray(props.tableData) ? props.tableData.map((data) => (
             <>
             <TableRow className="tmp"
               key={data.repr_cd}
              //  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
               
             ></TableRow>
               <TableCell className="tmpl1" sx={{  backgroundColor:'white'}} >{data.ranking}</TableCell>
           <TableCell  className={data.rank_growth.includes("↑") ? "tmpl2_red" : "tmpl2_black"} sx={{  backgroundColor:'white'}}>{data.rank_growth}</TableCell>
           <TableCell  className="tmpl3" sx={{  backgroundColor:'white'}}>{data.prdt_cd}</TableCell>

          

           <TableCell  className="tmpl4" sx={{  backgroundColor:'white'}}><img className="image" alt="제품 이미지" src={data.image_name}></img></TableCell>
           <TableCell >{data.tag_price}</TableCell>
           <TableCell >{data.discount}%</TableCell>
           <TableCell >{data.prdt_nm}</TableCell>
           
           <TableCell >{data.sale_qty_kor_ttl}</TableCell>
           <TableCell >{data.sale_qty_kor_retail}</TableCell>
           <TableCell >{data.sale_qty_kor_duty}</TableCell>
           <TableCell >{data.sale_qty_kor_rfwholesale}</TableCell>
           <CustomTableCell value={data.asp}/>
           <TableCell >{data.mfac_compy_nm_list}</TableCell>
           <TableCell >{data.sale_amt_kor_ttl}</TableCell>

           
           <CustomTableCell value={data.ac_sale_qty_cns}/>
           <CustomTableCell value={data.ac_stor_qty_kor}/>
           <CustomTableCell value={data.wh_stock_qty_kor}/>
          
           <CustomTableCell2 value={data.stock_qty_kor}/>
          
           
           
           <TableCell sx={{  backgroundColor:'white'}} className="tmpr2">{data.woi}</TableCell>
           <TableCell sx={{  backgroundColor:'white'}} className="tmpr1">{data.sale_rate}%</TableCell>
           
               </>
           )):console.log("f")
         }
         
         
       </TableBody>
      
     </Table>
      
        
       
      </TableContainer>
      
    </div>

    
  );
}

export default DataTable;