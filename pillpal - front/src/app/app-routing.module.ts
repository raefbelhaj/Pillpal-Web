import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './user/components/home-page/home-page.component';
import { SignUpComponent } from './user/components/sign-up/sign-up.component';
import { ContactComponent } from './user/components/contact/contact.component';
import { HomeComponent } from './patient/components/home/home.component';
import { OurDoctorsComponent } from './patient/components/our-doctors/our-doctors.component';
import { RendezvousComponent } from './patient/components/rendezvous/rendezvous.component';
import { SignInComponent } from './user/components/sign-in/sign-in.component';
import { AboutComponent } from './user/components/about/about.component';
import { VoiceRecorderComponent } from './voice-recorder/voice-recorder.component';


const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'home/signup', component: SignUpComponent },
  { path: 'home/contact', component: ContactComponent },
  { path: 'home/patient', component: HomeComponent },
  { path: 'home/doctor', component: HomeComponent },
  { path: 'home/patient/rendez-vous', component: RendezvousComponent },
  { path: 'home/signin', component: SignInComponent }, // Removed trailing space
  { path: 'home/patient/doctors', component: OurDoctorsComponent },
  {path: 'home/about', component: AboutComponent},
  
  { path: 'home/recorder', component:VoiceRecorderComponent},
  { path: '**', redirectTo: '/home' }, // Wildcard route for undefined paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
