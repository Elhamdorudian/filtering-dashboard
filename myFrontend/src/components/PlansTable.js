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



  return (
    <ThemeProvider theme={myTheme}>
      <Paper className="table-paper">
        <Box className="export-box">
        <Button
          color="secondary"
          startIcon={<FileDownloadIcon />}
          variant="contained"
          className="export-btn"
        >
        <CSVLink
          data={filteredPlans}
          filename={"filtered-plans.csv"}
          className="export-link"
          target="_blank"
        >
          Export filtered data
        </CSVLink>
            </Button>
            </Box>
        <TableContainer component={Paper}  >
          <Table sx={{ minWidth: 650, }} className="offer-form" aria-label="simple table">
            <TableHead className='table-paper'>
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
              {filteredPlans
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((pkg) => (
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