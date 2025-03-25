import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { MENU_ITEMS } from '../app.constant';
import { DrawerModule } from 'primeng/drawer';
@Component({
  selector: 'app-nav-bar',
  standalone: true,
    imports: [
    FormsModule,
    CommonModule,
    RippleModule,
    StyleClassModule,
    ButtonModule,
      DrawerModule,
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  sidebarVisible: boolean = false;
  darkMode: boolean = false;
  darkModeIcon: string = 'pi pi-moon';
  menuItems;

    constructor(private router: Router) {
    this.menuItems = MENU_ITEMS;
  }

  navigate(route: string) {
    if (route) {
      this.router.navigate([route]);
      this.sidebarVisible = false;
    }
  }

  clickMenu() {
    if (this.sidebarVisible) {
      this.sidebarVisible = false;
    } else {
      this.sidebarVisible = true;
    }
  }

  toggleDarkMode() {
      const element = document.querySelector('html');
      element?.classList.toggle('my-app-dark');
  }
}
