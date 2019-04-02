import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.scss']
})
export class SobreMiComponent implements OnInit {

  public infoCards = [];
  constructor(private service: MainService) { }

  ngOnInit() {
    this.service.getData().subscribe(datos => (this.infoCards = datos.trayectoria));
  }

}
