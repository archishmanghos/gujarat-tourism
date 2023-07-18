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
import { AshokeEdictsComponent } from './ashoke-edicts/ashoke-edicts.component';
import { BuddhistCavesComponent } from './buddhist-caves/buddhist-caves.component';
import { NavghanKuwoComponent } from './navghan-kuwo/navghan-kuwo.component';
import { UparkotComponent } from './uparkot/uparkot.component';
import { DamodarKundComponent } from './damodar-kund/damodar-kund.component';
import { SomnathTempleComponent } from './somnath-temple/somnath-temple.component';
import { TriveniSangamComponent } from './triveni-sangam/triveni-sangam.component';
import { PrabhasPatanComponent } from './prabhas-patan/prabhas-patan.component';
import { BhalkaTirthComponent } from './bhalka-tirth/bhalka-tirth.component';
import { AhmedpurMandviComponent } from './ahmedpur-mandvi/ahmedpur-mandvi.component';
import { AdiKadiVavComponent } from './adi-kadi-vav/adi-kadi-vav.component';
import { KirtiToranComponent } from './kirti-toran/kirti-toran.component';
import { JainTempleComponent } from './jain-temple/jain-temple.component';
import { BachucharaMataTempleComponent } from './bachuchara-mata-temple/bachuchara-mata-temple.component';
import { TarangaCavesComponent } from './taranga-caves/taranga-caves.component';
import { PanchasaraParshwanathComponent } from './panchasara-parshwanath/panchasara-parshwanath.component';
import { PatanPatolaComponent } from './patan-patola/patan-patola.component';
import { BuddhistMonasteryComponent } from './buddhist-monastery/buddhist-monastery.component';
import { HatkeshwarTempleComponent } from './hatkeshwar-temple/hatkeshwar-temple.component';
import { RanchodraiTempleComponent } from './ranchodrai-temple/ranchodrai-temple.component';
import { SayajiBaugComponent } from './sayaji-baug/sayaji-baug.component';
import { KoteshwarMahadevTempleComponent } from './koteshwar-mahadev-temple/koteshwar-mahadev-temple.component';
import { GreatRannOfKutchComponent } from './great-rann-of-kutch/great-rann-of-kutch.component'

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
    DarbarDetailsComponent,
    GirComponent,
    VadnagarComponent,
    StatueComponent,
    SmritivanComponent,
    RajchandraAshramComponent,
    SunTempleComponent,
    DholaviraComponent,
    RaniKiVavComponent,
    MaqbaraComponent,
    MitiyalaComponent,
    GirnarHillsComponent,
    AshokeEdictsComponent,
    BuddhistCavesComponent,
    NavghanKuwoComponent,
    UparkotComponent,
    DamodarKundComponent,
    SomnathTempleComponent,
    TriveniSangamComponent,
    PrabhasPatanComponent,
    BhalkaTirthComponent,
    AhmedpurMandviComponent,
    AdiKadiVavComponent,
    KirtiToranComponent,
    JainTempleComponent,
    BachucharaMataTempleComponent,
    TarangaCavesComponent,
    PanchasaraParshwanathComponent,
    PatanPatolaComponent,
    BuddhistMonasteryComponent,
    HatkeshwarTempleComponent,
    RanchodraiTempleComponent,
    SayajiBaugComponent,
    KoteshwarMahadevTempleComponent,
    GreatRannOfKutchComponent
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
