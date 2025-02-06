import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.page.html',
  styleUrls: ['./tabla.page.scss'],
  standalone: false,
})
export class TablaPage implements OnInit {
  numero: number = 0;
  tabla: string[] = [];

  constructor() { }

  generarTabla() {
    if (this.numero <= 0) {
      this.tabla = ['Ingrese un número válido'];
      return;
    }

    this.tabla = [];
    for (let i = 1; i <= 13; i++) {
      this.tabla.push(`${this.numero} x ${i} = ${this.numero * i}`);
    }
  }

  ngOnInit() {
  }

}
