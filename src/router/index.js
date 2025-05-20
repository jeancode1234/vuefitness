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
import HistoriqueView from '@/views/historiqueView.vue'
import RepasComponent from '@/views/admin/repas/RepasComponent.vue'
import TestimonialsComponent from '@/components/testimonialsComponent.vue'
import QuestionsComponent from '@/components/questionsComponent.vue'
import LoadingComponent from '@/components/LoadingComponent.vue'
import CounterComponent from '@/components/CounterComponent.vue'
import GalleryComponent from '@/components/GalleryComponent.vue'
import ServiceView from '@/views/ServiceView.vue'
import WindowsComponent from '@/components/WindowsComponent.vue'
import AbonnementComponent from '@/components/AbonnementComponent.vue'
import ScroollTopComponent from '@/components/ScroollTopComponent.vue'
import LoadComponent from '@/components/LoadComponent.vue'

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
        path: '/services',
        components:{
          default:NavBarComponent,
          one:ServiceView,
        }
      },
      {
        path: '/apropos',
        components:{
          default:NavBarComponent,
          one:AproposView,
        }
      }, 
      {
        path: '/historique',
        components:{
          default:NavBarComponent,
          one:HistoriqueView,
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
    {
      path: '/AllRepas',
      components:{
        default:DashboardComponent,
        two:RepasComponent,
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
  path: '/question',
  name: 'question',
  component: QuestionsComponent
},
{
  path: '/abonnement',
  name: 'abonnement',
  component: AbonnementComponent
},
{
  path: '/windows',
  name: 'windows',
  component: WindowsComponent
},
{
  path: '/testimonial',
  name: 'testimonial',
  component: TestimonialsComponent
},
{
  path: '/loading',
  name: 'Loading',
  component: LoadingComponent
},
{
  path: '/load',
  name: 'Load',
  component: LoadComponent
},
{
  path: '/counter',
  name: 'Counter',
  component: CounterComponent,
},
{
  path: '/gallery',
  name: 'Gallery',
  component: GalleryComponent,
},
{
  path: '/scroll',
  name: 'scroll',
  component: ScroollTopComponent,
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
