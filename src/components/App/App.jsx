import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "components/SharedLayout/SharedLayout";

const RegisterPage = lazy(() => import("pages/RegisterPage"));
const LoginPage = lazy(() => import("pages/LoginPage"));
const ContactsPage = lazy(() => import("pages/ContactsPage/ContactsPage"));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </>
  )
}