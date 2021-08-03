import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {
url : string
  constructor(private http: HttpClient ) { }
  getSaludo(){
    return this.http.get("http://guadalupegranados.andocodeando.net/proyecto/index.php");
  }
  getPost(){
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
  setSuma(num1: string | number, num2: string | number){
    this.url = 'http://guadalupegranados.andocodeando.net/proyecto/index.php?n1='+num1+'&n2='+num2
    return this.http.get(this.url);
  }
}
export class DataService2{
  constructor(public database: AngularFirestore) {}
  
}
