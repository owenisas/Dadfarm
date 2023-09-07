import Default from '@/layouts/default.vue'
import LandDetails from '@/global/LandDetails.vue'
import FarmerDetails from '@/global/FarmerDetails.vue'
import OrderDetails from '@/global/OrderDetails.vue'

export default [
  {
    path: '/',
    component: Default,
    children: [
      {
        path: '/marketplace/managers/:id',
        name: 'FarmManager',
        component:FarmerDetails,
        props: route => ({ id: route.params.id }),
      },
      {
        path: '/lands/:id',
        name: 'LandDetails',
        component:LandDetails,
        props: route => ({ id: route.params.id }),
      },
      {
        path: '/orders/:id',
        name: 'OrderDetails',
        component:OrderDetails,
        props: route => ({ id: route.params.id }),
      },
    ],
  },
]
