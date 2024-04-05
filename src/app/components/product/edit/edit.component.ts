import { Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import { UploaderCaptions } from 'ngx-awesome-uploader';
import { Yeoman } from '@services/yeoman.service';
import { DemoFilePickerAdapter } from  '@app/file-picker.adapter';
import { HttpClient } from '@angular/common/http';
import { Butler } from '@app/services/butler.service';
import { DataApiService } from '@app/services/data-api.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @ViewChild('deleteSwal')
  category='Seleccione una';
  categorySeted:boolean=false;
 
  
 
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
    referencia: '',
    idCategory: '',
    dimensiones: '',
    calibre: ''
  };

  
 
  adapter = new  DemoFilePickerAdapter(this.http,this._butler);
  constructor(
    public router:Router,
    public http:HttpClient,
    public _butler:Butler,
    public dataApiService:DataApiService,
    public yeoman:Yeoman) { 
      this.data=this.yeoman.preview;

     }
     cancelarUpdate(){
      this.router.navigate(['/proAll']);
    }

    onSubmit() {
      this.data.images = this._butler.uploaderImages;
      this.dataApiService.productUpdate(this.data, this.yeoman.preview.id).subscribe((response) => {
        console.log(response);
        this._butler.uploaderImages = [];
        this.router.navigate(['proall']);
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
    getAllCategories(){
      this.dataApiService.getAllCategory().subscribe(response=>{
        this.yeoman.categories=response;
        this.yeoman.allcategory=response;
        this.yeoman.allCategoriesSize= this.yeoman.categories.length;
      });
    }
   
    onCategorySelect(category:any) {        
      this.data.idCategory = category.idCategory;
      console.log(category.id);
    }
    
    setCategory(category:any){
      let index=category;
      console.log("seleccionada: "+this.yeoman.allcategory[index].name);
      this.categorySeted=true;
      if (this.yeoman.categories!==undefined){
      this.data.idCategory=this.yeoman.allcategory[index].id;
      console.log("id: "+JSON.stringify(this.data.idCategory));
      }
    }
  ngOnInit(): void {
  }

}
