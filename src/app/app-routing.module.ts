import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {BikeListComponent} from './components/bike-list/bike-list.component';
import {BikeFormComponent } from './components/bike-form/bike-form.component';

const routes: Routes = [
{
  path: '',
  redirectTo: '/bikes',
  pathMatch: 'full'
},
{
  path: 'bikes',
  component:BikeListComponent
},
{
  path: 'bikes/add',
  component:BikeFormComponent
},
{
  path: 'bikes/edit/:id',
  component:BikeFormComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
