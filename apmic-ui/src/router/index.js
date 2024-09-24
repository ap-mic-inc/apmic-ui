import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import HomePage from '@/pages/HomePage.vue'
import BtnPage from '@/pages/componentsPage/BtnPage.vue'
import DescriptionPage from '@/pages/DescriptionPage.vue'
import CheckboxPage from '@/pages/componentsPage/CheckboxPage.vue'
import TogglePage from '@/pages/componentsPage/TogglePage.vue'
import DropDownPage from '@/pages/componentsPage/DropDownPage.vue'
import ListPage from '@/pages/componentsPage/ListPage.vue'
import CollapsibleBlockPage from '@/pages/componentsPage/CollapsibleBlockPage.vue'
import InputBoxPage from '@/pages/componentsPage/InputBoxPage.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      { path: '/', name: 'HomePage', component: HomePage },
      { path: '/description', name: 'DescriptionPage', component: DescriptionPage },
      { path: '/btn', name: 'BtnPage', component: BtnPage },
      { path: '/radio', name: 'CheckboxPage', component: CheckboxPage },
      { path: '/toggle', name: 'TogglePage', component: TogglePage },
      { path: '/dropdown', name: 'DropDownPage', component: DropDownPage },
      { path: '/list', name: 'ListPage', component: ListPage },
      { path: '/collapsibleBlock', name: 'CollapsibleBlockPage', component: CollapsibleBlockPage },
      { path: '/input', name: 'InputBoxPage', component: InputBoxPage }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
