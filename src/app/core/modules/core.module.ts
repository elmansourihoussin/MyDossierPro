import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../compenents/footer/footer.component';
import { HeaderComponent } from '../compenents/header/header.component';
import { SidbarComponent } from '../compenents/sidbar/sidbar.component';
import {MaterialModule} from "./material.module";



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidbarComponent
  ],
    imports: [
        CommonModule,
        MaterialModule
    ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidbarComponent
  ]
})
export class CoreModule { }
CoreModule
