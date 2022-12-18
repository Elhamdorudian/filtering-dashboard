// import Paper from '@mui/material/Paper';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import { useState } from 'react';
// import '../styles/Table.css';
// const columns = [
//   { id: 'offerID', label: 'OfferID', minWidth: 120,  alight: 'right' },
//   { id: 'type', label: 'Type', minWidth: 120, alight: 'right', format: (value) => value.toLocaleString('en-US') },
//   {
//     id: 'category',
//     label: 'Category',
//     minWidth: 120,
//     format: (value) => value.toLocaleString('en-US'),
//   },
//   {
//     id: 'subcategory',
//     label: 'Subcategiry',
//     minWidth: 120,
//     format: (value) => value.toLocaleString('en-US'),
//   },
//   {
//     id: 'qouta',
//     label: 'Qouta',
//     minWidth: 120,
//     format: (value) => value.toFixed(2),
//   },
//   {
//     id: 'service',
//     label: 'Service',
//     minWidth: 120,
//     format: (value) => value.toFixed(2),
//   },
//   {
//     id: 'paymentMethod',
//     label: 'Payment Method',
//     minWidth: 120,
//     format: (value) => value.toFixed(2),
//   },
// ];

// function createData(name, code, population, size) {
//   return { name, code, population, size };
// }

// const rows = [
//   createData('a', 'b', 1324171354, 3287263),
//   createData('a', 'f', 1403500365, 9596961),
//   createData('f', 'h', 60483973, 301340),
//   createData('United States', 'US', 327167434, 9833520),
//   createData('Canada', 'CA', 37602103, 9984670),
//   createData('Australia', 'AU', 25475400, 7692024),
//   createData('Germany', 'DE', 83019200, 357578),
//   createData('Ireland', 'IE', 4857000, 70273),
//   createData('Mexico', 'MX', 126577691, 1972550),
//   createData('Japan', 'JP', 126317000, 377973),
//   createData('France', 'FR', 67022000, 640679),
//   createData('United Kingdom', 'GB', 67545757, 242495),
//   createData('Russia', 'RU', 146793744, 17098246),
//   createData('Nigeria', 'NG', 200962417, 923768),
//   createData('Brazil', 'BR', 210147125, 8515767),
// ];

// export default function StickyHeadTable() {
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   return (
//     <Paper sx={{ width: '100%', overflow: 'hidden', maxWidth: '800' }}>
//       <TableContainer className="table-container">
//         <Table stickyHeader aria-label="sticky table">
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 <TableCell
//                   key={column.id}
//                 //   align={column.align}
//                   style={{ minWidth: column.minWidth }}
//                 >
//                   {column.label}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows
//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               .map((row) => {
//                 return (
//                   <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
//                     {columns.map((column) => {
//                       const value = row[column.id];
//                       return (
//                         <TableCell key={column.id} align={column.align}>
//                           {column.format && typeof value === 'number'
//                             ? column.format(value)
//                             : value}
//                         </TableCell>
//                       );
//                     })}
//                   </TableRow>
//                 );
//               })}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         rowsPerPageOptions={[10, 20]}
//         component="div"
//         count={rows.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//     </Paper>
//   );
// }


import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const PlansTable = ({filteredPlans}) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Plan</TableCell>
            <TableCell align="right">Service</TableCell>
            <TableCell align="right">OfferID</TableCell>
            <TableCell align="right">Duration&nbsp;(D)</TableCell>
            <TableCell align="right">Price&nbsp;(T)</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Category&nbsp;</TableCell>
            <TableCell align="right">SubCategory</TableCell>
            <TableCell align="right">Payment Method</TableCell>
            <TableCell align="right">Opt-in</TableCell>
            <TableCell align="right">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredPlans.map((pkg) => (
            <TableRow
              key={pkg._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {pkg.name.english}
              </TableCell>
              <TableCell align="right">{pkg.service}</TableCell>
              <TableCell align="right">{pkg.offerID}</TableCell>
              <TableCell align="right">{pkg.duration}</TableCell>
              <TableCell align="right">{pkg.price}</TableCell>
              <TableCell align="right">{pkg.type}</TableCell>
              <TableCell align="right">{pkg.category}</TableCell>
              <TableCell align="right">{pkg.subcategory}</TableCell>
              <TableCell align="right">{pkg.payment}</TableCell>
              <TableCell align="right">{pkg.optin}</TableCell>
              <TableCell align="right">{pkg.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default PlansTable;