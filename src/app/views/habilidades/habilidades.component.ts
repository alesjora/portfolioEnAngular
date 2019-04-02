import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss']
})
export class HabilidadesComponent implements OnInit {

  public habilidades = [];
  constructor(private service: MainService) { }

  ngOnInit() {
    this.service.getData().subscribe(datos => (this.habilidades = datos.habilidades));
  }

}
