import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './controls/header/header.component';
import { MenuComponent } from './controls/menu/menu.component';
import { AirlineBrickComponent } from './bricks/airline-brick/airline-brick.component';
import { MainPageComponent } from './template/main-page/main-page.component';
import { SearchFormComponent } from './template/search-form/search-form.component';
import { ProfileComponent } from './template/profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    AirlineBrickComponent,
    MainPageComponent,
    SearchFormComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
