// //import "../../styles/Table/data_table.scss"
// import * as React from 'react';
// import { useTable } from 'react-table'

// function DataTable(props) {
//     console.log("props:", props.tableData)
//     let dt = props.tableData;
//     console.log("variable dt:",dt )
//     let dt_l = {...dt};
//     console.log("variable ...dt:",...dt)
//     const data = React.useMemo(
//         () => [
//         ...dt
//         ],
//         []
//       )
    
//       const columns = React.useMemo(
//         () => [
//             {
//                 Header: '랭킹',
//                 accessor: 'ranking', // accessor is the "key" in the data
//               },
//               {
//                 Header: '상승',
//                 accessor: 'rank_growth',
//               },
//               {
//                 Header: '대표품번',
//                 accessor: 'prdt_cd',
//               },
//               {
//                 Header: '이미지',
//                 accessor: 'image_name',
//                 Cell: ({ value }) => <img src={value} alt="Table image" />,
//               },
//               {
//                 Header: '택가',
//                 accessor: 'tag_price',
//               },
//               {
//                 Header: '할인률',
//                 accessor: 'discount',
//               },
//               {
//                 Header: '제품명',
//                 accessor: 'prdt_nm',
//               },
//               {
//                 Header: '수량',
//                 accessor: 'sale_qty_kor_ttl',
//               },
//               {
//                 Header: '국내',
//                 accessor: 'sale_qty_kor_retail',
//               },
//               {
//                 Header: '면세',
//                 accessor: 'sale_qty_kor_duty',
//               },
//               {
//                 Header: 'RF도매',
//                 accessor: 'sale_qty_kor_rfwholesale',
//               },
//               {
//                 Header: '실판',
//                 accessor: 'asp',
//               },
//               {
//                 Header: '협력사',
//                 accessor: 'mfac_compy_nm_list',
//               },
//               {
//                 Header: '판매액',
//                 accessor: 'sale_amt_kor_ttl',
//               },
//               {
//                 Header: '누적판매량',
//                 accessor: 'ac_sale_qty_cns',
//               },
//               {
//                 Header: '누적입고량',
//                 accessor: 'ac_stor_qty_kor',
//               },
//               {
//                 Header: '물류재고',
//                 accessor: 'wh_stock_qty_kor',
//               },
//               {
//                 Header: '총재고',
//                 accessor: 'stock_qty_kor',
//               },
//               {
//                 Header: '재고주수',
//                 accessor: 'woi',
//               },
//               {
//                 Header: '판매율',
//                 accessor: 'sale_rate',
//               },
//         ],
//         []
//       )
    
//       const {
//         getTableProps,
//         getTableBodyProps,
//         headerGroups,
//         rows,
//         prepareRow,
//       } = useTable({ columns, data })
    
//       return (
//         <table {...getTableProps()} style={{ border: 'solid 1px gray' }} className="table_wrapper">
//           <thead>
//             {headerGroups.map(headerGroup => (
//               <tr {...headerGroup.getHeaderGroupProps()}>
//                 {headerGroup.headers.map(column => (
//                   <th
//                     {...column.getHeaderProps()}
//                     style={{
//                       borderBottom: 'solid 1px skyblue',
//                       background: 'white',
//                       color: 'black',
//                       fontWeight: 'bold',
//                     }}
//                   >
//                     {column.render('Header')}
//                   </th>
//                 ))}
//               </tr>
//             ))}
//           </thead>
//           <tbody {...getTableBodyProps()}>
//             {Array.isArray(rows)? rows.map(row => {
//               prepareRow(row)
//               return (
//                 <tr {...row.getRowProps()}>
//                   {row.cells.map(cell => {
//                     return (
//                       <td
//                         {...cell.getCellProps()}
//                         style={{
//                           padding: '10px',
//                           border: 'solid 1px gray',
//                           background: 'white',
//                         }}
//                       >
//                         {cell.render('Cell')}
//                       </td>
//                     )
//                   })}
//                 </tr>
//               )
//             }):"f"}
//           </tbody>
//         </table>
//       )
//   }
  
//   export default DataTable;
  