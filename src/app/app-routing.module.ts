import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './template/main-page/main-page.component';
import { ProfileComponent } from './template/profile/profile.component';
import { SearchFormComponent } from './template/search-form/search-form.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'search', component: SearchFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
