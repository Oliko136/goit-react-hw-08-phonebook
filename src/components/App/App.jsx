import { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { refreshUser } from "../../redux/auth/auth-operations";
import { selectAuthLoading } from "../../redux/selectors";
import SharedLayout from "components/SharedLayout/SharedLayout";
import PublicRoute from "components/PublicRoute/PublicRoute";
import PrivateRoute from "components/PrivateRoute/PrivateRoute";

const RegisterPage = lazy(() => import("pages/RegisterPage"));
const LoginPage = lazy(() => import("pages/LoginPage"));
const ContactsPage = lazy(() => import("pages/ContactsPage/ContactsPage"));
const NotFoundPage = lazy(() => import("pages/NotFoundPage"));

export const App = () => {
  const isLoadingUser = useSelector(selectAuthLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch])

  return (
    !isLoadingUser && (
      <>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route element={<PublicRoute />}>
              <Route path="register" element={<RegisterPage />} />
              <Route path="login" element={<LoginPage />} />
            </Route>
            <Route element={<PrivateRoute />}>
             <Route path="contacts" element={<ContactsPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
         </Route>
      </Routes>
    </>
    )
    
  )
}