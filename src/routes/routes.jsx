import { Routes, Route } from "react-router-dom";

//import view Login
import Login from '../pages/admin/Login.jsx';

// import PrivateRoutes
import PrivateRoutes from './PrivateRoutes.jsx';

// import view Dashboard
import Dashboard from '../pages/admin/dashboard/Index.jsx';

function RoutesIndex() {
    return (
        <Routes>
            {/* <Route "/admin/login" /> */}
            <Route path="/admin/login" element={<Login />} />

            <Route path="/admin/dashboard" 
            element={
                <PrivateRoutes>
                    <Dashboard />
                </PrivateRoutes>
            } />
        </Routes>
    )
}

export default RoutesIndex