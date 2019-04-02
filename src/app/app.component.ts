import { Component, ViewChild, OnInit } from '@angular/core';
import { IgxNavigationDrawerComponent } from 'igniteui-angular';
import { MainService } from './services/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  title = '';
  public navItems = [];
  public selected = '';
  @ViewChild(IgxNavigationDrawerComponent)
  public drawer: IgxNavigationDrawerComponent;

  public drawerState = {
    miniTemplate: false,
    open: true,
    pin: true
  };

  constructor(private service: MainService){}

  ngOnInit(): void {
    this.service.getData().subscribe(this.asignarDatos.bind(this));
  }

  asignarDatos(data) {
    this.navItems = data.menu;
    this.selected = this.navItems[0].text;
    this.asignarTitulo();
  }

  asignarTitulo() {
    this.title = 'José Rafael - ' + this.selected;
  }



  /** Select item and close drawer if not pinned */
  public navigate(item) {
    this.selected = item.text;
    this.asignarTitulo();
    if (!this.drawer.pin) {
      this.drawer.close();
    }
  }
}
