import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})

export class PublicacionesComponent implements OnInit {
  mensajes: any[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getPost().subscribe( (posts: any[]) => {
      console.log(posts);
      this.mensajes = posts;
    });
  }
}
