import React, { Component, Suspense, useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loader from './layout/Loader'
import Aux from "../hoc/_Aux";
import ScrollToTop from './layout/ScrollToTop';
import routes from "../route";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminLayout = Loadable({
    loader: () => import('./layout/AdminLayout'),
    loading: Loader
});

const App = () => {
    const [Authenticated, setAuthenticated] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('userDetails')
        if (token) {
            setAuthenticated(true)
        }
    }, [])
    const menu = routes.map((route, index) => {
        return (route.component) ? (
            <Route
                key={index}
                path={route.path}
                exact={route.exact}
                name={route.name}
                render={props => (
                    <route.component {...props} />
                )} />
        ) : (null);
    });

    return (
        <Aux>
            <ToastContainer />
            <ScrollToTop>
                <Suspense fallback={<Loader />}>
                    <Switch>
                        {menu}
                        <Route path="/" component={(props)=><AdminLayout {...props}  Authenticated={Authenticated}/>}  />
                    </Switch>
                </Suspense>
            </ScrollToTop>
        </Aux>
    )
}

export default App;
