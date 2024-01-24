import HomeViewVue from '@/views/HomeView.vue'
import MealsDetailsVue from '@/views/MealsDetailsVue.vue'
import MealsViewVue from '@/views/MealsView.vue'

export enum RouteNames {
  HOME = 'Home',
  MEALS = 'Meals',
  MEALS_DETAIL = 'MealsDetail'
}

export const routes = [
  {
    path: '/',
    name: RouteNames.HOME,
    component: HomeViewVue,
    isNavbarLink: true
  },
  {
    path: '/meals',
    name: RouteNames.MEALS,
    component: MealsViewVue,
    isNavbarLink: true
  },
  {
    path: '/meals/:id',
    name: RouteNames.MEALS_DETAIL,
    component: MealsDetailsVue,
    isNavbarLink: false
  }
]
