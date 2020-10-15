import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CareersComponent } from './careers/careers.component';
import { CareersDetailsComponent } from './careers/careers-details/careers-details.component';
import { CareersApplyComponent } from './careers/careers-apply/careers-apply.component';
import { CareersService } from './careers.service';
//import { MessageService } from './message.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CareersComponent,
    CareersDetailsComponent,
    CareersApplyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CareersService,
    //MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
