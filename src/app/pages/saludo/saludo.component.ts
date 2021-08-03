import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {
  
  mensajes: any[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
      this.dataService.getSaludo().subscribe( (saludo: any[]) => {
      console.log(saludo);
      this.mensajes.push(saludo);
    });
  }

}
