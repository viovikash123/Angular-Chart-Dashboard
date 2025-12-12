import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  imports: [RouterLink,RouterLinkActive,],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
items: {icon: string; link: string} [] = [
  {icon:'icon-stats-dots', link:'analytics'},
  {icon:'icon-cog', link:'setting'},
  {icon:'icon-clipboard', link:'tasks'},
  {icon:'icon-shield', link:'privacy'},
  {icon:'icon-bubbles2', link:'comments'},
  {icon:'icon-wrench', link:'tools'},
  {icon:'icon-plus', link:'create'},
  {icon:'icon-file-text2', link:'documents'},
];
}
