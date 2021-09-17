import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Inbox', icon: 'home' },
    { title: 'Login', url: '/login', icon: 'person-circle' },
    { title: 'Tus Recetas', url: '/folder/Outbox', icon: 'book' },
    { title: 'Creador de Recetas', url: '/nueva-receta', icon: 'pencil'},
    { title: 'Favoritos', url: '/folder/Archived', icon: 'heart' },
    { title: '', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Tus datos', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}