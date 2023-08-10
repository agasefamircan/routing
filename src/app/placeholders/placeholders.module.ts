import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceholdersRoutingModule } from './placeholders-routing.module';
import { PlaceholderHomeComponent } from './placeholder-home/placeholder-home.component';


@NgModule({
  declarations: [
    PlaceholderHomeComponent
  ],
  imports: [
    CommonModule,
    PlaceholdersRoutingModule
  ],
  exports:[
    // PlaceholderHomeComponent
  ]
})
export class PlaceholdersModule { }
