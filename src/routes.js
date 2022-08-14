import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const DashboardDefault = React.lazy(() => import('./Demo/Dashboard/Default'));
const Home = React.lazy(() => import('./Dashboard/Home'));
const Gallery = React.lazy(() => import('./Dashboard/Gallery'));
const KeepOnTrack = React.lazy(() => import('./Dashboard/KeepOnTrack'));
const Infulancer = React.lazy(() => import('./Dashboard/Infulancer'));
const Metrics = React.lazy(() => import('./Dashboard/Metrics'));
const Campaign = React.lazy(() => import('./Dashboard/Campaign'));
const CampaignDetail = React.lazy(() => import('./Dashboard/CampaignDetail'));


const UIBasicButton = React.lazy(() => import('./Demo/UIElements/Basic/Button'));
const UIBasicBadges = React.lazy(() => import('./Demo/UIElements/Basic/Badges'));
const UIBasicBreadcrumbPagination = React.lazy(() => import('./Demo/UIElements/Basic/BreadcrumbPagination'));

const UIBasicCollapse = React.lazy(() => import('./Demo/UIElements/Basic/Collapse'));
const UIBasicTabsPills = React.lazy(() => import('./Demo/UIElements/Basic/TabsPills'));
const UIBasicBasicTypography = React.lazy(() => import('./Demo/UIElements/Basic/Typography'));

const FormsElements = React.lazy(() => import('./Demo/Forms/FormsElements'));

const BootstrapTable = React.lazy(() => import('./Demo/Tables/BootstrapTable'));

const Nvd3Chart = React.lazy(() => import('./Demo/Charts/Nvd3Chart/index'));

const GoogleMap = React.lazy(() => import('./Demo/Maps/GoogleMap/index'));

const OtherSamplePage = React.lazy(() => import('./Demo/Other/SamplePage'));
const OtherDocs = React.lazy(() => import('./Demo/Other/Docs'));

const routes = [
    { path: '/dashboard/default', exact: true, name: 'Default', component: DashboardDefault },
    { path: '/basic/button', exact: true, name: 'Basic Button', component: UIBasicButton },
    { path: '/basic/badges', exact: true, name: 'Basic Badges', component: UIBasicBadges },
    { path: '/basic/breadcrumb-paging', exact: true, name: 'Basic Breadcrumb Pagination', component: UIBasicBreadcrumbPagination },
    { path: '/basic/collapse', exact: true, name: 'Basic Collapse', component: UIBasicCollapse },
    { path: '/basic/tabs-pills', exact: true, name: 'Basic Tabs & Pills', component: UIBasicTabsPills },
    { path: '/basic/typography', exact: true, name: 'Basic Typography', component: UIBasicBasicTypography },
    { path: '/forms/form-basic', exact: true, name: 'Forms Elements', component: FormsElements },
    { path: '/tables/bootstrap', exact: true, name: 'Bootstrap Table', component: BootstrapTable },
    { path: '/charts/nvd3', exact: true, name: 'Nvd3 Chart', component: Nvd3Chart },
    { path: '/maps/google-map', exact: true, name: 'Google Map', component: GoogleMap },
    { path: '/sample-page', exact: true, name: 'Sample Page', component: OtherSamplePage },
    { path: '/docs', exact: true, name: 'Documentation', component: OtherDocs },

    ///

    { path: '/Home', exact: true, name: 'Home', component: Home },
    { path: '/Gallery', exact: true, name: 'Gallery', component: Gallery },
    { path: '/KeepOnTrack', exact: true, name: 'KeepOnTrack', component: KeepOnTrack },
    { path: '/Infulancer', exact: true, name: 'Infulancer', component: Infulancer },
    { path: '/Metrics', exact: true, name: 'Metrics', component: Metrics },
    { path: '/Campaigns', exact: true, name: 'Campaign', component: Campaign },
    { path: '/CampaignDetail', exact: true, name: 'CampaignDetail', component: CampaignDetail },



];

export default routes;