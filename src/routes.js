import DashboardPage from './pages/DashboardPage.vue';
import AppLayout from './AppLayout.vue';
import { classRoutes } from './classRoutes'

export const routes = [
  {
    path: '',
    name: "AppLayout",
    component: AppLayout,
    children: [
      {
        path: '',
        name: "DashboardPage",
        component: DashboardPage
      }
      , ...classRoutes
    ]
  }
];
