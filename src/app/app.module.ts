import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule}  from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TrackerServiceService } from './tracker-service.service';
import {NgPipesModule} from 'ngx-pipes';



@NgModule({
  imports:      [ BrowserModule, FormsModule ,HttpClientModule,NgPipesModule],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: [TrackerServiceService]
})
export class AppModule { }
