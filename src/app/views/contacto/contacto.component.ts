import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  profileForm = this.fb.group({
    nombre: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    mensaje: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  get email() {
    return this.profileForm.get('email');
  }
  get nombre() {
    return this.profileForm.get('nombre');
  }
  get mensaje() {
    return this.profileForm.get('mensaje');
  }

}
