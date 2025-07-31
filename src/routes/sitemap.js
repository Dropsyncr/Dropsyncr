import docSitemap from 'docs/routes/docSitemap';
import paths from './paths';

const sitemap = [
  {
    id: 'tools',
    subheader: 'Tools',
    key: 'tools',
    icon: 'material-symbols:data-exploration-outline-rounded',
    items: [
      {
        name: 'Analytics',
        key: 'analytics',
        path: paths.analytics,
        pathName: 'analytics',
        icon: 'material-symbols:query-stats-rounded',
        active: true,
      },
    ],
  },
  {
    id: 'orders',
    subheader: 'Orders',
    key: 'orders',
    icon: 'material-symbols:widgets-outline-rounded',
    items: [
      {
        name: 'New Orders',
        key: 'New Orders',
        pathName: 'open_orders',
        icon: 'material-symbols:storefront-outline-rounded',
        active: true,
      },
      {
        name: 'Open Orders',
        pathName: 'open_orders',
        key: 'Open Orders',
        icon: 'material-symbols:phone-in-talk-outline-rounded',
        active: true,
      },
      {
        name: 'Procesed Orders',
        pathName: 'procesed_orders',
        key: 'Procesed Orders',
        icon: 'material-symbols:mail-outline-rounded',
        active: true,
      },
    ],
  },
  {
    id: 'warehousing',
    subheader: 'Warehousing',
    key: 'warehousing',
    icon: 'material-symbols:widgets-outline-rounded',
    items: [
      {
        name: 'Process Packages',
        key: 'Process Packages',
        pathName: 'processpackages',
        icon: 'material-symbols:storefront-outline-rounded',
        active: true,
      },
      {
        name: 'Picking tasks',
        pathName: 'picking_tasks',
        key: 'Picking tasks',
        icon: 'material-symbols:phone-in-talk-outline-rounded',
        active: true,
      },
      {
        name: 'Process Returns',
        pathName: 'process_returns',
        key: 'Process Returns',
        icon: 'material-symbols:mail-outline-rounded',
        active: true,
      },
    ],
  },
  {
    id: 'products',
    subheader: 'Products',
    key: 'products',
    icon: 'material-symbols:widgets-outline-rounded',
    items: [],
  },
  {
    id: 'helpdesk',
    subheader: 'Helpdesk',
    key: 'helpdesk',
    icon: 'material-symbols:widgets-outline-rounded',
    items: [],
  },
  {
    id: 'customers',
    subheader: 'Customers',
    key: 'customers',
    icon: 'material-symbols:widgets-outline-rounded',
    items: [],
  },
  {
    id: 'settings',
    subheader: 'Settings',
    key: 'settings',
    icon: 'material-symbols:widgets-outline-rounded',
    items: [
      {
        name: 'Apps & Integrations',
        key: 'Apps & Integrations',
        pathName: 'appsintegrations',
        icon: 'material-symbols:storefront-outline-rounded',
        active: true,
        items: [
          {
            id: 'Manage Stores',
            subheader: 'Manage Stores',
            key: 'Manage Stores',
            icon: 'material-symbols:widgets-outline-rounded',
          },
        ],
      },
      {
        name: 'Administators',
        pathName: 'administators',
        key: 'Administators',
        icon: 'material-symbols:phone-in-talk-outline-rounded',
        active: true,
      },
    ],
  },
  ...docSitemap,
];

export default sitemap;
