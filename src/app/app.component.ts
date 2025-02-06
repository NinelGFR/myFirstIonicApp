import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Sumadora', url: '/sumadora', icon: 'calculator' },
    { title: 'Traductor', url: '/traductor', icon: 'text' },
    { title: 'Tabla', url: '/tabla', icon: 'grid' },
    { title: 'Video', url: '/video', icon: 'videocam' },
  ];
  constructor() {}
}
