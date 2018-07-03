import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DoctorsDisplayComponent } from './doctors-display/doctors-display.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'doctors' },
    { path: 'doctors', component: DoctorsDisplayComponent},
    { path: 'profile/:id', component: DoctorProfileComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
