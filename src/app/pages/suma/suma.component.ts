import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent implements OnInit {

  mensajes: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }
  suma():void{
    var number1 = 0, number2 = 0
    let n1 = <HTMLInputElement> document.getElementById('num1');
    let n2 = <HTMLInputElement> document.getElementById('num2');
    number1 = parseInt(n1.value);
    number2 = parseInt(n2.value);
    this.dataService.setSuma(number1,number2).subscribe( (suma :any[])=>{
      console.log(suma);
      this.mensajes.push(suma);
    });
  }
}


