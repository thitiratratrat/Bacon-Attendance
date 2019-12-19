import AllClasses from './pages/AllClasses.vue';
import ClassByID from './pages/ClassByID.vue';

export const classRoutes = [
  {
    path: 'classes',
    name: "AllClasses",
    component: AllClasses
  },
  {
    path: 'classes/:id',
    name: "ClassByID",
    component: ClassByID
  }
];
