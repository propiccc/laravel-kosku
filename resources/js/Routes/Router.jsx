import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// ? components
import Login from "../pages/Auth/Login";
import Signin from "../pages/Auth/Signin";
import PrivateRoute from "../util/PrivateRoute";
import FlexPrivateRoute from "../util/FlexPrivateRoute";
import Dashboard from "../Layouts/Dashboard";
import Guest from "../util/Guest";
import NotFound from "../pages/Auth/NotFound";
import Home from "../pages/View/Home/Home";
import PropertyDetails from "../pages/View/Home/PropertyDetails";
import DashboardPemilik from '../Layouts/DashboardPemilik';
import SewaDetail from "../pages/UserSystem/Sewa/DetailSewa";
import Test from '../pages/test';

// ? lazy component
const UserIndex = lazy(() => import("../pages/System/User/Index"));
const DashboardIndex = lazy(() => import("../pages/System/Dashboard/Index"));
const PenjualanIndex = lazy(() => import("../pages/System/Penjualan/Index"));
const SewaIndex = lazy(() => import("../pages/UserSystem/Sewa/Index"));
// const SewaDetail = lazy(() => import("../pages/UserSystem/Sewa/DetailSewa"));
const PropertyIndex = lazy(() => import("../pages/UserSystem/Property/Index"));

function Router() {
    return (
        <>
            <Routes>
                
                <Route path="/*" element={<NotFound />} />
                <Route path="/" element={<Home />} />
                <Route path="/test" element={<Test />} />
                
                <Route path="/property/:uuid/detail" element={<PropertyDetails />} />
                <Route path="/sewa/:uuid/detail" element={<SewaDetail />} /> 

                <Route element={<Guest />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Signin />} />
                </Route>
                // * Dashboard Pemilik
                <Route path="/dashboard" element={<FlexPrivateRoute Acc="user" />}>
                    <Route element={<DashboardPemilik />}>
                        <Route path="property" element={<PropertyIndex />} />
                        <Route path="sewa" element={<SewaIndex />} />
                    </Route>
                </Route>
                // * Dashboard Admin
                <Route path="/system" element={<PrivateRoute />}>
                    <Route element={<Dashboard />}>
                        <Route path="user" element={<UserIndex />} />
                        <Route path="dashboard" element={<DashboardIndex />} />
                        <Route path="penjualan" element={<PenjualanIndex />} />
                    </Route>
                </Route>
            </Routes>
        </>
    );
}
export default Router;
