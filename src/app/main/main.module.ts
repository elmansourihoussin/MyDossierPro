import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { CoreModule } from '../core/modules/core.module';



@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
