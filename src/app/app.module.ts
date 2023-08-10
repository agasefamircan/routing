import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaceholderHomeComponent } from './placeholders/placeholder-home/placeholder-home.component';
import { PlaceholdersModule } from './placeholders/placeholders.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlaceholdersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
