import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MdbCarouselModule} from 'mdb-angular-ui-kit/carousel';
import { ContactComponent } from './contact/contact.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { FestivalsComponent } from './festivals/festivals.component';
import { FooterComponent } from './footer/footer.component';
import { FestivalDetailsComponent } from './festival-details/festival-details.component';
import { SaputaraDetailsComponent } from './saputara-details/saputara-details.component';
import { NavratriDetailsComponent } from './navratri-details/navratri-details.component';
import { DarbarDetailsComponent } from './darbar-details/darbar-details.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    HomepageComponent,
    LoginComponent,
    ContactComponent,
    DestinationsComponent,
    FestivalsComponent,
    FooterComponent,
    FestivalDetailsComponent,
    SaputaraDetailsComponent,
    NavratriDetailsComponent,
    DarbarDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MdbCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
