import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import DashboardHome from "../pages/dashboard/DashboardHome";
import HotelList from "../pages/hotels/HotelList";
import BookingList from "../pages/bookings/BookingList";

import Layout from "../components/layout/Layout";

import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import { useAuth } from "../context/AuthContext";

function AppRoutes() {

  const { isAuthenticated } = useAuth();

  return (
    <BrowserRouter>
      <Routes>

        {/* root route */}
        <Route
          path="/"
          element={
            isAuthenticated
              ? <Navigate to="/dashboard" />
              : <Navigate to="/login" />
          }
        />

        {/* public routes */}

        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />

        {/* protected routes */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Layout>
                <DashboardHome />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/hotels"
          element={
            <ProtectedRoute>
              <Layout>
                <HotelList />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/bookings"
          element={
            <ProtectedRoute>
              <Layout>
                <BookingList />
              </Layout>
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;