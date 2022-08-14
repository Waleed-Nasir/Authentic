import React, { Component, Suspense, useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Fullscreen from "react-full-screen";
import windowSize from 'react-window-size';

import Navigation from './Navigation';
import NavBar from './NavBar';
import Breadcrumb from './Breadcrumb';
import Loader from "../Loader";
import routes from "../../../routes";
import Aux from "../../../hoc/_Aux";
import * as actionTypes from "../../../store/actions";

import './app.scss';
import { checkAuth } from '../../../utils';
const ProtectedRoute = ({ isEnabled, ...props }) => {
    return (isEnabled) ? <Route {...props} /> : <Redirect to="/auth/signin" />;
};
const AdminLayout = (props) => {
    useEffect(() => {
        if (props.windowWidth > 992 && props.windowWidth <= 1024 && props.layout !== 'horizontal') {
            props.onComponentWillMount();
        }
    }, [])
    const fullScreenExitHandler = () => {
        if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
            props.onFullScreenExit();
        }
    };



    const mobileOutClickHandler = () => {
        if (props.windowWidth < 992 && props.collapseMenu) {
            props.onComponentWillMount();
        }
    }

    /* full screen exit call */
    document.addEventListener('fullscreenchange', fullScreenExitHandler);
    document.addEventListener('webkitfullscreenchange', fullScreenExitHandler);
    document.addEventListener('mozfullscreenchange', fullScreenExitHandler);
    document.addEventListener('MSFullscreenChange', fullScreenExitHandler);

    const menu = routes.map((route, index) => {
        return (route.component) ? (
            <ProtectedRoute
                key={index}
                path={route.path}
                exact={route.exact}
                name={route.name}
                isEnabled={checkAuth()}
                render={props => (
                    <route.component {...props} />
                )} />
        ) : (null);
    });

    return (
        <Aux>
            <Fullscreen enabled={props.isFullScreen}>
                <Navigation />
                <NavBar />
                <div className="pcoded-main-container" onClick={() => mobileOutClickHandler}>
                    <div className="pcoded-wrapper">
                        <div className="pcoded-content">
                            <div className="pcoded-inner-content">
                                {/* <Breadcrumb /> */}
                                <div className="main-body">
                                    <div className="page-wrapper">
                                        <Suspense fallback={<Loader />}>
                                            <Switch>
                                                {menu}
                                                <Redirect from="/" to={props.defaultPath} />
                                            </Switch>
                                        </Suspense>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fullscreen>
        </Aux>
    );

}

const mapStateToProps = state => {
    return {
        defaultPath: state.defaultPath,
        isFullScreen: state.isFullScreen,
        collapseMenu: state.collapseMenu,
        configBlock: state.configBlock,
        layout: state.layout
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFullScreenExit: () => dispatch({ type: actionTypes.FULL_SCREEN_EXIT }),
        onComponentWillMount: () => dispatch({ type: actionTypes.COLLAPSE_MENU })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(windowSize(AdminLayout));