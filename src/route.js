import React from 'react';

const SignUp1 = React.lazy(() => import('./Demo/Authentication/SignUp/SignUp1'));
const Signin = React.lazy(() => import('./Demo/Authentication/SignIn/SignIn1'));
const Forgot = React.lazy(() => import('./Demo/Authentication/Forgot/Forgot'));
const VerifyOTP = React.lazy(() => import('./Demo/Authentication/VerifyOTP/VerifyOTP'));

const route = [
    { path: '/signup', exact: true, name: 'Signup 1', component: SignUp1 },
    { path: '/forgot', exact: true, name: 'Forgot Password', component: Forgot },
    { path: '/signin', exact: true, name: 'Signin 1', component: Signin },
    { path: '/verifyOTP', exact: true, name: 'Verify OTP', component: VerifyOTP },
];

export default route;