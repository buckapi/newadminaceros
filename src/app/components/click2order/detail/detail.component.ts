import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataApiService } from '@app/services/data-api.service';
import { Yeoman } from '@app/services/yeoman.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  category:string="";
  constructor
    (public yeoman:Yeoman,
    public router:Router,
    public dataApiService:DataApiService
    ) {
      if(this.yeoman.preview.images===undefined){
        this.router.navigate([''])}
        this.findCategory();
      }

delete(){ 
  this.dataApiService.deleteProduct(this.yeoman.preview.id).subscribe(response=>{
    this.dataApiService.getAllProducts().subscribe(response=>{
      
      this.yeoman.all=response;
    });
  });
  this.router.navigate(['/c2oAll']);
}

findCategory(){
  for (let i=0;i<this.yeoman.allcategory.length;i++){
    if(this.yeoman.preview.idCategory===this.yeoman.allcategory[i].id){
      this.category=this.yeoman.allcategory[i].name;
    }
  }
}
cancelDelete(){}
  ngOnInit(): void {

  
  }
}
