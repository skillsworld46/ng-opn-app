import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InputSwitchModule } from 'primeng/inputswitch';
import { SidebarModule } from 'primeng/sidebar';
import { MENU_ITEMS } from '../app.constant';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    SidebarModule,
    InputSwitchModule,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  sidebarVisible: boolean = false;
  darkMode: boolean = false;
  menuItems;

  constructor(
    private themeService: ThemeService,
    private router: Router,
  ) {
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
    if (this.darkMode) {
      this.themeService.switchTheme('dark-blue');
    } else {
      this.themeService.switchTheme('light-blue');
    }
  }
}
