import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroServiceService } from './hero-service.service';
import { MessageComponent } from './message/message.component';
import { MessageService } from './message.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,HeroesComponent, HeroDetailComponent, MessageComponent ],
  bootstrap:    [ AppComponent ],
  providers: [HeroServiceService, MessageService]
})
export class AppModule { }
