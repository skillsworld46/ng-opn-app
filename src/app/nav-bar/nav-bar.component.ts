import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SidebarModule } from 'primeng/sidebar';
import { StyleClassModule } from 'primeng/styleclass';
import { MENU_ITEMS } from '../app.constant';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    SidebarModule,
    FormsModule,
    CommonModule,
    RippleModule,
    StyleClassModule,
    ButtonModule,
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  sidebarVisible: boolean = false;
  darkMode: boolean = false;
  darkModeIcon: string = 'pi pi-moon';
  menuItems;

  constructor(private themeService: ThemeService, private router: Router) {
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
    if (!this.darkMode) {
      this.darkMode = true;
      this.themeService.switchTheme('dark-blue');
      this.darkModeIcon = 'pi pi-sun';
    } else {
      this.darkMode = false;
      this.themeService.switchTheme('light-blue');
      this.darkModeIcon = 'pi pi-moon';
    }
  }
}
