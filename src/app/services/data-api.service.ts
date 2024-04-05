import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { Butler } from "@services/butler.service";
import { Yeoman } from './yeoman.service';
import { AuthRESTService } from '@services/authREST.service';

export interface ProductInterface {
}

export interface CategoryInterface {

}
@Injectable({
  providedIn: 'root'
})
export class DataApiService {
	//ticket: Observable<any>;
	url:any;
	
  	constructor(
	  	public butler:Butler, 
		public yeoman: Yeoman,
  		private AuthRESTService:AuthRESTService,
 	 	private http: HttpClient
  	) {
		}
  	headers : HttpHeaders = new HttpHeaders({  		
		  "Content-Type":"application/json"	
	});


	deleteProduct(id: string){
		const token = this.AuthRESTService.getToken();
		const url_api=	this.yeoman.origin.restUrl+`/api/products/${id}/?access_token$={token}`;
		return this.http
		.delete<ProductInterface>(url_api, {headers: this.headers})
		.pipe(map(data => data));
	}
	deleteCategory(id: string){
		const token = this.AuthRESTService.getToken();
		const url_api=	this.yeoman.origin.restUrl+`/api/categories/${id}/?access_token$={token}`;
		return this.http
		.delete<CategoryInterface>(url_api, {headers: this.headers})
		.pipe(map(data => data));
	}

	
	

	getAllProducts(){
		const url_api = 	this.yeoman.origin.restUrl+'/api/products';
		return this.http.get(url_api);
	}
	getAllCategory(){
		const url_api = 	this.yeoman.origin.restUrl+'/api/categories';
		return this.http.get(url_api);
	}
	getAllOrders(){
		const url_api = 	this.yeoman.origin.restUrl+'/api/orders';
		return this.http.get(url_api);
	}
	getProduct(id: string){
		const url_api = 	this.yeoman.origin.restUrl+`/api/products/${id}`;
		return this.http.get(url_api);
	}

	

	productUpdate(car :ProductInterface, id: string){
		// let token = this.authService.getToken();
		const url_api=	this.yeoman.origin.restUrl+`/api/products/${id}`;
		return this.http
		.put<ProductInterface>(url_api, car)
		.pipe(map(data => data));
	}
	categoryUpdate(category :CategoryInterface, id: string){
		// let token = this.authService.getToken();
		const url_api=	this.yeoman.origin.restUrl+`/api/categories/${id}`;
		return this.http
		.put<CategoryInterface>(url_api, category)
		.pipe(map(data => data));
	}

	
	saveProduct(product :ProductInterface){
		const url_api=	this.yeoman.origin.restUrl+'/api/products';
		return this.http
		.post<ProductInterface>(url_api, product)
		.pipe(map(data => data));
	}
	saveCategory(category :CategoryInterface){
		const url_api=	this.yeoman.origin.restUrl+'/api/categories';
		return this.http
		.post<CategoryInterface>(url_api, category)
		.pipe(map(data => data));
	}
	
}