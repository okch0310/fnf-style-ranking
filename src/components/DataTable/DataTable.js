import "../../styles/Table/data_table.scss"


import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function DataTable(props) {

 

  console.log("넘어가?", props.tableData)
  const dt= Array.from(props.tableData);
  console.log(dt)

  return (
    <div className="table_wrapper">
      <TableContainer className="table_container" component={Paper}>
        <Table sx={{ minWidth: 650 }} stickyHeader aria-label="sticky table"  >
          <TableHead>
            <TableRow>
              <TableCell align="right" className="tmp" >랭킹</TableCell>
              <TableCell align="right">상승</TableCell>
              <TableCell align="right">품번</TableCell>
              <TableCell align="right">대표품번</TableCell>
              <TableCell align="right">이미지</TableCell>
              <TableCell align="right">택가</TableCell>
              <TableCell align="right">할인율</TableCell>
              <TableCell align="right">제품명</TableCell>
              {/* <TableCell align="right">추이</TableCell> */}
              <TableCell align="right">수량</TableCell>
              <TableCell align="right">국내</TableCell>
              <TableCell align="right">면세</TableCell>
              <TableCell align="right">RF도매</TableCell>
              <TableCell align="right">실판</TableCell>
              <TableCell align="right">협력사</TableCell>
              <TableCell align="right">판매액</TableCell>
              <TableCell align="right">누적판매량</TableCell>
              <TableCell align="right">누적입고량</TableCell>
              <TableCell align="right">물류재고</TableCell>
              <TableCell align="right">총재고</TableCell>
              <TableCell align="right">재고주수</TableCell>
              <TableCell align="right">판매율</TableCell>

            </TableRow>
      
           
          </TableHead>
          
          <TableBody>  
            {
              Array.isArray(props.tableData) ? props.tableData.map((data) => (
                <>
                <TableRow
                  key={data.repr_cd}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                ></TableRow>
                  <TableCell >{data.ranking}</TableCell>
              <TableCell>{data.rank_growth}</TableCell>
              <TableCell>{data.repr_cd}</TableCell>
              <TableCell>{data.prdt_cd}</TableCell>
              <TableCell><img className="image" alt="제품 이미지" src={data.image_name}></img></TableCell>
              <TableCell>{data.tag_price}</TableCell>
              <TableCell>{data.discount}</TableCell>
              <TableCell>{data.prdt_nm}</TableCell>
              
              <TableCell>{data.sale_qty_kor_ttl}</TableCell>
              <TableCell>{data.sale_qty_kor_retail}</TableCell>
              <TableCell>{data.sale_qty_kor_duty}</TableCell>
              <TableCell>{data.sale_qty_kor_rfwholesale}</TableCell>
              <TableCell>{data.asp}</TableCell>
              <TableCell>{data.mfac_compy_nm_list}</TableCell>
              <TableCell>{data.sale_amt_kor_ttl}</TableCell>
              <TableCell>{data.ac_sale_qty_cns}</TableCell>
              <TableCell>{data.ac_stor_qty_kor}</TableCell>
              <TableCell>{data.wh_stock_qty_kor}</TableCell>
              <TableCell>{data.stock_qty_kor}</TableCell>
              <TableCell>{data.woi}</TableCell>
              <TableCell>{data.sale_rate}</TableCell>
              
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