import { Routes, Route } from "react-router-dom";

//import view Login
import Login from '../pages/admin/Login.jsx';

function RoutesIndex() {
    return (
        <Routes>
            {/* <Route "/admin/login" /> */}
            <Route path="/admin/login" element={<Login />} />
        </Routes>
    )
}

export default RoutesIndex