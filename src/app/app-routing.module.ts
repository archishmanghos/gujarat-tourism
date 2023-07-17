import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { FestivalDetailsComponent } from './festival-details/festival-details.component';
import { SaputaraDetailsComponent } from './saputara-details/saputara-details.component';
import { NavratriDetailsComponent } from './navratri-details/navratri-details.component';
import { DarbarDetailsComponent } from './darbar-details/darbar-details.component';
import { GirComponent } from './gir/gir.component';
import { VadnagarComponent } from './vadnagar/vadnagar.component';
import { StatueComponent } from './statue/statue.component';
import { SmritivanComponent } from './smritivan/smritivan.component';
import { RajchandraAshramComponent } from './rajchandra-ashram/rajchandra-ashram.component';
import { SunTempleComponent } from './sun-temple/sun-temple.component';
import { DholaviraComponent } from './dholavira/dholavira.component';
import { RaniKiVavComponent } from './rani-ki-vav/rani-ki-vav.component';
import { MaqbaraComponent } from './maqbara/maqbara.component';
import { MitiyalaComponent } from './mitiyala/mitiyala.component';
import { GirnarHillsComponent } from './girnar-hills/girnar-hills.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'about', component: AboutComponent },
  {path: 'contact', component: ContactComponent},
  { path: 'userlogin', component: LoginComponent },
  {path: 'adminlogin', component: LoginComponent},
  {path: 'festivals', component: FestivalDetailsComponent},
  {path: 'saputara', component: SaputaraDetailsComponent},
  {path: 'navratri', component: NavratriDetailsComponent},
  {path: 'dangdarbar', component: DarbarDetailsComponent},
  {path: 'gir', component: GirComponent},
  {path: 'vadnagar', component: VadnagarComponent},
  {path: 'statueOfUnity', component: StatueComponent},
  {path: 'smritivan', component: SmritivanComponent},
  {path: 'shrimad-rajchandra-ashram', component: RajchandraAshramComponent},
  {path: 'modhera-sun-temple', component: SunTempleComponent},
  {path: 'dholavira', component: DholaviraComponent},
  {path: 'rani-ki-vav', component: RaniKiVavComponent},
  {path: 'mahabat-maqbara', component: MaqbaraComponent},
  {path: 'mitiyala-wildlife-sanctuary', component: MitiyalaComponent},
  {path: 'girnar-hills', component: GirnarHillsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
