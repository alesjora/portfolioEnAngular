import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-proyect',
  templateUrl: './card-proyect.component.html',
  styleUrls: ['./card-proyect.component.scss']
})
export class CardProyectComponent implements OnInit {
  @Input() public titulo: string;
  @Input() public subtitulo: string;
  @Input() public rutaImagen: string;
  @Input() public descripcion: string;

  constructor() { }

  ngOnInit() {
  }

}
