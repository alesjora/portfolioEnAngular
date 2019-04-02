import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() public titulo: string;
  @Input() public subtitulo: string;
  @Input() public descripcion: string;

  constructor() { }

  ngOnInit() {
  }

}
