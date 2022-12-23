import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Paper from '@mui/material/Paper';
import '../styles/FormStyles.css'
import { Button, TablePagination,Box } from '@mui/material';
import { useState } from 'react';
import { CSVLink } from "react-csv";
import { ThemeProvider } from '@mui/material';
import myTheme from './myTheme';


const PlansTable = ({filteredPlans}) => {

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

//--------------- flattening the fliteredPlans ---------------//

  const csvData = filteredPlans.map(item => {
    const newItem = {};
    Object.entries(item).forEach(([key, value]) => {
      if (typeof value === 'object') {
        Object.entries(value).forEach(([nestedKey, nestedValue]) => {
          newItem[`${nestedKey} ${key}`] = nestedValue;
        });
      } else {
        newItem[key] = value;
      }
    });
    return newItem;
  });

  return (
    <ThemeProvider theme={myTheme}>
              <Box className="export-box">
        <Button
          color="secondary"
          startIcon={<FileDownloadIcon />}
          variant="contained"
          className="export-btn"
        >
        <CSVLink
          data={csvData}
          filename={"filtered-plans.csv"}
          className="export-link"
          target="_blank"
        >
          Export filtered data
        </CSVLink>
            </Button>
            </Box>
      <Paper className="table-paper">
        <TableContainer component={Paper}  >
          <Table sx={{ minWidth: 650, }} className="offer-form" aria-label="simple table">
            <TableHead className='table-paper'>
              <TableRow >
                <TableCell>Plan</TableCell>
                <TableCell>Persian Name</TableCell>
                <TableCell align="left">Service</TableCell>
                <TableCell align="left">OfferID</TableCell>
                <TableCell align="left">Duration&nbsp;(D)</TableCell>
                <TableCell align="left">Price&nbsp;(T)</TableCell>
                <TableCell align="left">Type</TableCell>
                <TableCell align="left">Category&nbsp;</TableCell>
                <TableCell align="left">SubCategory</TableCell>
                <TableCell align="left">Payment Method</TableCell>
                <TableCell align="left">Opt-in</TableCell>
                <TableCell align="left">Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredPlans
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((pkg) => (
                <TableRow
                  className="table-rows"
                  key={pkg._id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {pkg.name.english}
                  </TableCell>
                  <TableCell align="left">{pkg.name.persian}</TableCell>
                  <TableCell align="left">{pkg.service}</TableCell>
                  <TableCell align="left">{pkg.offerID}</TableCell>
                  <TableCell align="left">{pkg.duration}</TableCell>
                  <TableCell align="left">{pkg.price}</TableCell>
                  <TableCell align="left">{pkg.type}</TableCell>
                  <TableCell align="left">{pkg.category}</TableCell>
                  <TableCell align="left">{pkg.subcategory}</TableCell>
                  <TableCell align="left">{pkg.payment}</TableCell>
                  <TableCell align="left">{pkg.optin}</TableCell>
                  <TableCell align="left">{pkg.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
        rowsPerPageOptions={[5,10,20]}
        component="div"
        count={filteredPlans.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  </ThemeProvider>
  );
}

export default PlansTable;