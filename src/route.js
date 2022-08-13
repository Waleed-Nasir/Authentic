import React from 'react';

const SignUp1 = React.lazy(() => import('./Demo/Authentication/SignUp/SignUp1'));
const Signin1 = React.lazy(() => import('./Demo/Authentication/SignIn/SignIn1'));
const Forgot = React.lazy(() => import('./Demo/Authentication/Forgot/Forgot'));
const VerifyOTP = React.lazy(() => import('./Demo/Authentication/VerifyOTP/VerifyOTP'));

const route = [
    { path: '/auth/signup', exact: true, name: 'Signup 1', component: SignUp1 },
    { path: '/auth/forgot', exact: true, name: 'Forgot Password', component: Forgot },
    { path: '/auth/signin', exact: true, name: 'Signin 1', component: Signin1 },
    { path: '/auth/verifyOTP', exact: true, name: 'Verify OTP', component: VerifyOTP },
];

export default route;