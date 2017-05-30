import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// components
import { AppComponent } from './components/app/app.component';
import { CrimsonTitleComponent } from './components/crimson-title/crimson-title.component';

// services
import { UserService } from './services/user.service';
import { PhotoService } from './services/photo.service';


@NgModule({
  declarations: [
    AppComponent,
    CrimsonTitleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
