import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from '../components/sidebar/sidebar';
import { Header } from '../components/header/header';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,CommonModule, Header, Sidebar ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('admin-panel');
}
