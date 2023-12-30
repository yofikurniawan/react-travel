import { Routes, Route } from "react-router-dom";

//import view Login
import Login from '../pages/admin/Login.jsx';

// import PrivateRoutes
import PrivateRoutes from './PrivateRoutes.jsx';

// import view Dashboard
import Dashboard from '../pages/admin/dashboard/Index.jsx';

//import view admin categories Index
import CategoriesIndex from '../pages/admin/categories/Index.jsx';

//import view admin category Create
import CategoryCreate from '../pages/admin/categories/Create.jsx';

//import view admin category Edit
import CategoryEdit from '../pages/admin/categories/Edit.jsx';

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

            <Route path="/admin/categories"
            element={
                <PrivateRoutes>
                    <CategoriesIndex />
                </PrivateRoutes>
            } />

            <Route
                path="/admin/categories/create"
                element={
                        <PrivateRoutes>
                            <CategoryCreate />
                        </PrivateRoutes>
                }
            />

            <Route
                path="/admin/categories/create"
                element={
                        <PrivateRoutes>
                            <CategoryCreate />
                        </PrivateRoutes>
                }
            />

            <Route
                path="/admin/categories/create"
                element={
                        <PrivateRoutes>
                            <CategoryCreate />
                        </PrivateRoutes>
                }
            />

            <Route
                path="/admin/categories/edit/:id"
                element={
                        <PrivateRoutes>
                            <CategoryEdit />
                        </PrivateRoutes>
                }
            />

        </Routes>
    )
}

export default RoutesIndex