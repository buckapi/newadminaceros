import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { UploaderCaptions } from 'ngx-awesome-uploader';
import { Yeoman } from '@services/yeoman.service';
import { DemoFilePickerAdapter } from '@app/file-picker.adapter';
import { HttpClient } from '@angular/common/http';
import { Butler } from '@app/services/butler.service';
import { DataApiService } from '@app/services/data-api.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrls: ['./editcategory.component.css']
})
export class EditcategoryComponent implements OnInit {
  @ViewChild('deleteSwal')
   category:any;
   products$:any={};
   public captions: UploaderCaptions = {
     dropzone: {
       title: 'Imágenes del producto',
       or: '.',
       browse: 'Cargar',
     },
     cropper: {
       crop: 'Cortar',
       cancel: 'Cancelar',
     },
     previewCard: {
       remove: 'Borrar',
       uploadError: 'error',
     },
   };
  data = {
    images: [] as string[], // o cualquier otro tipo de dato adecuado, como any[]
    name: '',
    description: '',
    price: null,
    stock: 0,
    ref: '',
    idBranch: ''
  };
 
  adapter = new  DemoFilePickerAdapter(this.http,this._butler);
  constructor(
    public router:Router,
    public http:HttpClient,
    public _butler:Butler,
    public dataApiService:DataApiService,
    public yeoman: Yeoman
    ) 
    { 
      this.data=this.yeoman.preview;

    }
    cancelarUpdate(){
     this.router.navigate(['/cateall']);
   }

   onSubmit() {
     this.data.images = this._butler.uploaderImages;
     this.dataApiService.categoryUpdate(this.data, this.yeoman.preview.id).subscribe((response) => {
       console.log(response);
       this._butler.uploaderImages = [];
       this.router.navigate(['cateall']);
       Swal.fire({
         position: 'center',
         icon: 'success',
         title: 'Información actualizada',
         showConfirmButton: false,
         timer: 1500,
       });
     });
     console.log(this.data);
   }

  ngOnInit(): void {
  }

}
