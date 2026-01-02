import {createBrowserRouter} from 'react-router-dom';
import PublicComponent from 'core/layouts/public/public.component';
import    HomeComponent from 'pages/home/home.component';
import FormComponent from 'pages/form/form.component';
import TableComponent from 'pages/table/table.component';
import {Routes} from './routes';
import NotFound from 'pages/not-found/notfound.component';
import AuthComponent from 'core/layouts/auth/auth.component';
import LoginComponent from 'pages/login/login.component';
import AuthProtectedComponent from './protected/auth-protected.component';
import UsersComponent from "../pages/users/users.component";
import StatisticsComponent from "../pages/statistics/statistics.component";
import ProductsComponent from "../pages/products/products.component";
import OrdersComponent from "../pages/orders/orders.component";
import FormResponsesComponent from "../pages/form-responses/form-responses.component";
import AddUserComponent from "../pages/add-user/add-user.component";
import AdminProfileComponent from "../pages/admin-profile/admin-profile.component";
import RegisterComponent from "../pages/register/register.component";
import ForgotPasswordComponent from "../pages/forgot-password/forgot-password.component";
import OtpComponent from "../pages/otp/otp.component";
import ResetPasswordComponent from "../pages/reset-password/reset-password.component";

const router = createBrowserRouter([
    {
        element: <AuthProtectedComponent layout='public'><PublicComponent/></AuthProtectedComponent>,
        children: [
            {
                path: Routes.home,
                element: <HomeComponent/>,
            },
            {
                path: Routes.form,
                element: <FormComponent/>,
            },
            {
                path: Routes.table,
                element: <TableComponent/>,
            },
            {
                path: Routes.users,
                element: <UsersComponent/>,
            },
            {
                path: Routes.statistics,
                element: <StatisticsComponent/>,
            },
            {
                path: Routes.products,
                element: <ProductsComponent/>,
            },
            {
                path: Routes.orders,
                element: <OrdersComponent/>,
            },
            {
                path: Routes.form_responses,
                element: <FormResponsesComponent/>,
            },
            {
                path: Routes.add_user,
                element: <AddUserComponent/>,
            },
            {
                path: Routes.profile,
                element: <AdminProfileComponent/>,
            },

        ],
    },
    {
        path: Routes.auth,
        element: <AuthProtectedComponent layout='auth'><AuthComponent/></AuthProtectedComponent>,
        children: [
            {
                path: Routes.login,
                element: <LoginComponent/>,
            },
            {
                path: Routes.register,
                element: <RegisterComponent/>,
            },
            {
                path: Routes.forgot_password,
                element: <ForgotPasswordComponent/>,
            },
            {
                path: Routes.verify_otp,
                element: <OtpComponent/>,
            },
            {
                path: Routes.reset_password,
                element: <ResetPasswordComponent/>,
            },


        ],
    },
    {
        path: '*',
        element: <NotFound/>,
    }
], {basename: '/',});

export default router;
