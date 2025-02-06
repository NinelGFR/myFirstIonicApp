import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sumadora',
  templateUrl: './sumadora.page.html',
  styleUrls: ['./sumadora.page.scss'],
  standalone: false,
})
export class SumadoraPage implements OnInit {
  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  constructor() { }

  ngOnInit() {
  }

  sumar() {
    this.resultado = Number(this.numero1) + Number(this.numero2);
  }

}
