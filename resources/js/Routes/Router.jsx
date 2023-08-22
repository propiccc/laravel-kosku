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
const SliderIndex = lazy(() => import("../pages/System/Slider/Index"));
const VisiMisiIndex = lazy(() => import("../pages/System/VisiMisi/Index"));
const SettingInadex = lazy(() => import("../pages/System/Setting/Index"));
const DivisiIndex = lazy(() => import("../pages/System/Divisi/Index"));
const NewsIndex = lazy(() => import("../pages/System/News/Index"));
const InstagramIndex = lazy(() => import("../pages/System/Instagram/Index"));
const JabatanIndex = lazy(() => import("../pages/System/Jabatan/Index"));
const ContentIndex = lazy(() => import("../pages/System/Content/Index"));
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
                        <Route path="slider" element={<SliderIndex />} exact />
                        <Route
                            path="visimisi"
                            element={<VisiMisiIndex />}
                            exact
                        />
                        <Route path="news" element={<NewsIndex />} exact />
                        <Route
                            path="setting"
                            element={<SettingInadex />}
                            exact
                        />
                        <Route path="divisi" element={<DivisiIndex />} exact />
                        <Route
                            path="instagram"
                            element={<InstagramIndex />}
                            exact
                        />
                        <Route
                            path="jabatan"
                            element={<JabatanIndex />}
                            exact
                        />
                        <Route
                            path="content"
                            element={<ContentIndex />}
                            exact
                        />
                    </Route>
                </Route>
            </Routes>
        </>
    );
}
export default Router;
