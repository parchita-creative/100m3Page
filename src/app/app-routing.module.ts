import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CareersApplyComponent } from './careers/careers-apply/careers-apply.component';
import { CareersDetailsComponent } from './careers/careers-details/careers-details.component';
import { CareersComponent } from './careers/careers.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
    {
    path: '',
    component: HomeComponent,
    },
    {
        path: '/careers',
        component: CareersComponent
    },
    {
      path: '/careers/details/:id',
      component: CareersDetailsComponent
    },
    {
      path: '/careers/apply/:id',
      component: CareersApplyComponent
    },
    {
      path: '',
      redirectTo: '',
      pathMatch: 'full'
  }, {
      path: '**',
      redirectTo: '',
      pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
