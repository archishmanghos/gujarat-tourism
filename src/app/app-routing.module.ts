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
  {path: 'statueOfUnity', component: StatueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
