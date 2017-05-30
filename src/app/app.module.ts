import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// components
import { AppComponent } from './components/app/app.component';
import { AppRoutingModule } from './app-routing.module';
import { CrimsonTitleComponent } from './components/crimson-title/crimson-title.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';

// services
import { UserService } from './services/user.service';
import { PhotoService } from './services/photo.service';


@NgModule({
  declarations: [
    AppComponent,
    CrimsonTitleComponent,
    NavigationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    UserService,
    PhotoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
