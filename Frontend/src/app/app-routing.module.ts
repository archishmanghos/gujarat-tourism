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
import { GreatRannOfKutchComponent } from './great-rann-of-kutch/great-rann-of-kutch.component';
import { NarayanSarovarComponent } from './narayan-sarovar/narayan-sarovar.component';
import { LakhpatFortComponent } from './lakhpat-fort/lakhpat-fort.component';
import { RatanmahalSlothComponent } from './ratanmahal-sloth/ratanmahal-sloth.component';
import { DumasBeachComponent } from './dumas-beach/dumas-beach.component';
import { ShoolpaneshwarComponent } from './shoolpaneshwar/shoolpaneshwar.component';
import { JambughodaComponent } from './jambughoda/jambughoda.component';
import { LaxmiVilasPalaceComponent } from './laxmi-vilas-palace/laxmi-vilas-palace.component';
import { KirtiMandirComponent } from './kirti-mandir/kirti-mandir.component';
import { KaloDungarComponent } from './kalo-dungar/kalo-dungar.component';
import { NironaComponent } from './nirona/nirona.component';
import { NargolBeachComponent } from './nargol-beach/nargol-beach.component';
import { TithalBeachComponent } from './tithal-beach/tithal-beach.component';
import { PadamDungriEcotourismComponent } from './padam-dungri-ecotourism/padam-dungri-ecotourism.component';
import { PurnaWildlifeComponent } from './purna-wildlife/purna-wildlife.component';

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
  {path: 'statue-of-unity', component: StatueComponent},
  {path: 'smritivan', component: SmritivanComponent},
  {path: 'shrimad-rajchandra-ashram', component: RajchandraAshramComponent},
  {path: 'modhera-sun-temple', component: SunTempleComponent},
  {path: 'dholavira', component: DholaviraComponent},
  {path: 'rani-ki-vav', component: RaniKiVavComponent},
  {path: 'mahabat-maqbara', component: MaqbaraComponent},
  {path: 'mitiyala-wildlife-sanctuary', component: MitiyalaComponent},
  {path: 'girnar-hills', component: GirnarHillsComponent},
  {path: 'ashoke-edicts', component: AshokeEdictsComponent},
  {path: 'buddhist-caves', component: BuddhistCavesComponent},
  {path: 'navghan-kuwo', component: NavghanKuwoComponent},
  {path: 'uparkotFort', component: UparkotComponent},
  {path: 'damodar-kund', component: DamodarKundComponent},
  {path: 'somnathTemple', component: SomnathTempleComponent},
  {path: 'triveni-sangam', component: TriveniSangamComponent},
  {path: 'prabhas-patan-museum', component: PrabhasPatanComponent},
  {path: 'bhalka-tirth', component: BhalkaTirthComponent},
  {path: 'ahmedpur-mandvi', component: AhmedpurMandviComponent},
  {path: 'adi-kadi-vav', component: AdiKadiVavComponent},
  {path: 'kirti-toran', component: KirtiToranComponent},
  {path: 'jain-temple', component: JainTempleComponent},
  {path: 'bachuchara-mata-temple', component: BachucharaMataTempleComponent},
  {path: 'taranga-caves', component: TarangaCavesComponent},
  {path: 'panchasara-parshwanath-jain-derasar', component: PanchasaraParshwanathComponent},
  {path: 'patan-patola-heritage-museum', component: PatanPatolaComponent},
  {path: 'buddhist-monastery', component: BuddhistMonasteryComponent},
  {path: 'hatkeshwar-temple', component: HatkeshwarTempleComponent},
  {path: 'ranchodrai-temple', component: RanchodraiTempleComponent},
  {path: 'koteshwar-mahadev-temple', component: KoteshwarMahadevTempleComponent},
  {path: 'sayaji-baug', component: SayajiBaugComponent},
  {path: 'great-rann-of-kutch', component: GreatRannOfKutchComponent},
  {path: 'narayan-sarovar', component: NarayanSarovarComponent},
  {path: 'lakhpat-fort', component: LakhpatFortComponent},
  {path: 'ratanmahal-sloth-bear-sanctuary', component: RatanmahalSlothComponent},
  {path: 'dumas-beach', component: DumasBeachComponent},
  {path: 'shoolpaneshwar-wildlife-sanctuary', component: ShoolpaneshwarComponent},
  {path: 'jambughoda-wildlife-sanctuary', component: JambughodaComponent},
  {path: 'laxmi-vilas-palace', component: LaxmiVilasPalaceComponent},
  {path: 'kirti-mandir', component: KirtiMandirComponent},
  {path: 'kalo-dungar', component: KaloDungarComponent},
  {path: 'nirona', component: NironaComponent},
  {path: 'nargol-beach', component: NargolBeachComponent},
  {path: 'tithal-beach', component: TithalBeachComponent},
  {path: 'padam-dungri-ecotourism', component: PadamDungriEcotourismComponent},
  {path: 'purna-wildlife', component: PurnaWildlifeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
