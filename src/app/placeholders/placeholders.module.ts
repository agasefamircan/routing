import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceholdersRoutingModule } from './placeholders-routing.module';
import { PlaceholderHomeComponent } from './placeholder-home/placeholder-home.component';
import { PlaceholdersComponent } from './placeholders/placeholders.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PlaceholderHomeComponent,
    PlaceholdersComponent
  ],
  imports: [
    CommonModule,
    PlaceholdersRoutingModule,
    SharedModule
  ],
  exports:[
    // PlaceholderHomeComponent
  ]
})
export class PlaceholdersModule { }
