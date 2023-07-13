import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { CounterComponent } from './counter/counter.component';
import { DbzModule } from './dbz/dbz.module';
import { HeroComponent } from './heroes/hero/hero.component';
import { ListComponent } from './heroes/list/list.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    HeroComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
