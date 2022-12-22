import '../styles/Layout.css';

const Layout = ({children}) => {

    return(
        <>

            <div className="wrapper">
                <div className="layout">
                    {children}
                </div>
            </div>
        </>
    )
}

export default Layout;