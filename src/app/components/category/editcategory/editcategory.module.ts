import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditcategoryRoutingModule } from './editcategory-routing.module';
import { EditcategoryComponent } from './editcategory.component';
import { FormsModule } from '@angular/forms';
import { FilePickerModule } from 'ngx-awesome-uploader';


@NgModule({
  declarations: [
    EditcategoryComponent
  ],
  imports: [
    CommonModule,
    EditcategoryRoutingModule,
    FormsModule,
    FilePickerModule
  ]
})
export class EditcategoryModule { }
