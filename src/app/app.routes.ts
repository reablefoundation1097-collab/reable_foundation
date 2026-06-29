import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Programs} from './pages/programs/programs';
import { Impact } from './pages/impact/impact';
import { GetInvolved} from './pages/get-involved/get-involved';
import { Contact } from './pages/contact/contact';
import { VariCampaign } from './pages/vari-campaign/vari-campaign';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Reable Foundation | Empowering Special Abilities'
  },
  {
    path: 'about',
    component: About,
    title: 'About | Reable Foundation'
  },
  {
    path: 'programs',
    component: Programs,
    title: 'Programs | Reable Foundation'
  },
  {
    path: 'impact',
    component: Impact,
    title: 'Impact | Reable Foundation'
  },
  {
    path: 'get-involved',
    component: GetInvolved,
    title: 'Get Involved | Reable Foundation'
  },
  {
    path: 'contact',
    component: Contact,
    title: 'Contact | Reable Foundation'
  },
  {
    path: 'vari-campaign',
    component: VariCampaign,
    title: 'Vari Campaign | Reable Foundation'
  },
  {
    path: '**',
    redirectTo: ''
  }
];