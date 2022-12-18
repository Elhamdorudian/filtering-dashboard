// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../styles/Layout.css';

// const css = `
// .layout{
//     background-color: red;
//     height:100%;
// }
// .wrapper{
//     background-color: yellow;
// `;


const Layout = ({children}) => {

    return(
        <>
            {/* <style type="text/css">{css}</style> */}
            <div className="wrapper">
                <div className="layout">
                    {children}
                </div>
            </div>
        </>
    )
}

export default Layout;