import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {

  public proyectos = [];
  constructor(private service: MainService) { }

  ngOnInit() {
    this.service.getData().subscribe(datos => (this.proyectos = datos.proyectos));
  }

}
