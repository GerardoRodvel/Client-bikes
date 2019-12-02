import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BikeFormComponent } from './components/bike-form/bike-form.component';
import { BikeListComponent } from './components/bike-list/bike-list.component';
import { BikesService } from './services/bikes.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BikeFormComponent,
    BikeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BikesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
