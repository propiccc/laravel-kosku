import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// ? components
import Login from "../pages/Auth/Login";
import PrivateRoute from "../util/PrivateRoute";
import Dashboard from "../Layouts/Dashboard";
import Guest from "../util/Guest";
import NotFound from "../pages/Auth/NotFound";
import Home from "../pages/View/Home/Home";

// ? lazy component
const UserIndex = lazy(() => import("../pages/System/User/Index"));
const PemilikIndex = lazy(() => import("../pages/System/Pemilik/Index"));
function Router() {
    return (
        <>
            <Routes>
                <Route path="/*" element={<NotFound />} />
                <Route path="/" element={<Home />} />
                <Route element={<Guest />}>
                    <Route path="/@System@bmc" element={<Login />} />
                </Route>

                <Route path="/system" element={<PrivateRoute />}>
                    <Route element={<Dashboard />}>
                        <Route path="user" element={<UserIndex />} />
                        <Route path="pemilik" element={<PemilikIndex />} />
                    </Route>
                </Route>
            </Routes>
        </>
    );
}
export default Router;
