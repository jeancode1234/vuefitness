import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '@/components/HomeComponent.vue'
import slideComponent from '@/components/slideComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import LoginComponent from '@/components/auth/LoginComponent.vue'
import RegisterComponent from '@/components/auth/RegisterComponent.vue'
import NavBarComponent from '@/components/NavBarComponent.vue'
import DashboardComponent from '@/views/admin/dashboardComponent.vue'
import IndexComponent from '@/views/admin/indexComponent.vue'
import CreateprogrammeComponent from '@/views/admin/programmes/createComponent.vue'
import ContactView from '@/views/ContactView.vue'
import AproposView from '@/views/AproposView.vue'


const routes = [
  {
    path:'/',
    component:NavBarComponent,
    children:[
      {
        path: '/',
        components:{
          default:NavBarComponent,
          one:HomeComponent,
        }
      },
      {
        path: '/contact',
        components:{
          default:NavBarComponent,
          one:ContactView,
        }
      },
      {
        path: '/apropos',
        components:{
          default:NavBarComponent,
          one:AproposView,
        }
      }, 
    ]
},

{
  path: '/dashboardAdmin',
  component: DashboardComponent,
  
  children:[
    {
      path: '/dashboardAdmin',
      components:{
        default:DashboardComponent,
        two:IndexComponent,
      }
    },
    {
      path: '/AdminCreateProgramme',
      components:{
        default:DashboardComponent,
        two:CreateprogrammeComponent,
      }
    },
    // {
    //   path: '/AdminRendezVous',
    //   components:{
    //     default:DashboardComponent,
    //     two:AllAppointmentComponent,
    //   }
    // },
    // {
    //   path: '/AdminCreatePays',
    //   components:{
    //     default:DashboardComponent,
    //     two:CreateComponent,
    //   }
    // },
    // {
    //   path: '/AdminCreateProgramme',
    //   components:{
    //     default:DashboardComponent,
    //     two:CreateprogrammeComponent,
    //   }
    // },
    // {
    //   path: '/AdminAllProgram',
    //   components:{
    //     default:DashboardComponent,
    //     two:AllprogrammeComponent,
    //   }
    // },
    // {
    //   path: '/AdminDetailsProgramme/:programme',
    //   name:'detail',
    //   components:{
    //     default:DashboardComponent,
    //     two:DetailProgrammeComponent,
    //   },
    //   props: {
    //     default: true,
    //     two: true
    // }, 
    // },
    // {
    //   path: '/AdminEditProgramme/:programme',
    //   name:'edit',
    //   components:{
    //     default:DashboardComponent,
    //     two:EditComponent,
    //   },
    //   props: {
    //     default: true,
    //     two: true
    // }, 
    // },
  ]
},

  {
    path: '/slide',
    name: 'cardslide',
    component: slideComponent
  },
  {
    path: '/footer',
    name: 'footer',
    component: FooterComponent
  },
  {
    path: '/login',
    name: 'LoginForm',
    component: LoginComponent
  },
  {
    path: '/register',
    name: 'RegisterForm',
    component: RegisterComponent
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
// router.beforeEach((to, from, next)=>{
//   if(to.matched[0].name == 'admin'){
//     this.$router.push('/dashboard')
//   }
//   next()
// })
export default router
