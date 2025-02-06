import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-traductor',
  templateUrl: './traductor.page.html',
  styleUrls: ['./traductor.page.scss'],
  standalone: false,
})
export class TraductorPage implements OnInit {
  numero: number = 0;
  resultado: string = '';

  constructor() {}

  traducirNumero() {
    this.resultado = this.convertirNumeroALetras(this.numero);
  }

  convertirNumeroALetras(num: number): string {
    if (num < 1 || num > 1000) {
      return 'Número fuera de rango';
    }

    const unidades = [
      '', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'
    ];
    const especiales = [
      'diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'
    ];
    const decenas = [
      '', '', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'
    ];
    const centenas = [
      '', 'cien', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'
    ];

    if (num === 1000) return 'mil';
    if (num < 10) return unidades[num];
    if (num < 20) return especiales[num - 10];
    if (num < 100) {
      return num % 10 === 0
        ? decenas[Math.floor(num / 10)]
        : `${decenas[Math.floor(num / 10)]} y ${unidades[num % 10]}`;
    }
    if (num % 100 === 0) return centenas[num / 100];
    if (num < 200) return `ciento ${this.convertirNumeroALetras(num - 100)}`;
    return `${centenas[Math.floor(num / 100)]} ${this.convertirNumeroALetras(num % 100)}`;
  }

  ngOnInit() {
  }
}
