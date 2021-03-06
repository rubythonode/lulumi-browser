export default [
  {
    path: '/',
    name: 'about-main',
    component: require('./components/AboutMainView'),
  },
  {
    path: '/lulumi',
    name: 'about-main-lulumi',
    component: require('./components/AboutMainView/Lulumi'),
  },
  {
    path: '/preferences',
    component: require('./components/AboutMainView/Preferences'),
    children: [
      {
        path: 'search',
        name: 'about-main-preferences-search-engine-provider',
        component: require('./components/AboutMainView/Preferences/SearchEngineProvider'),
      },
      {
        path: 'homepage',
        name: 'about-main-preferences-homepage',
        component: require('./components/AboutMainView/Preferences/Homepage'),
      },
      {
        path: 'downloads',
        name: 'about-main-preferences-downloads',
        component: require('./components/AboutMainView/Preferences/Downloads'),
      },
      {
        path: 'extensions',
        name: 'about-main-preferences-extensions',
        component: require('./components/AboutMainView/Preferences/Extensions'),
      },
      {
        path: '',
        name: 'about-main-preferences',
        redirect: 'search',
      },
    ],
  },
  {
    path: '*',
    redirect: '/',
  },
];
