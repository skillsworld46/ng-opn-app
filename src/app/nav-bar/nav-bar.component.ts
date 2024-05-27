import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';
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

  constructor(
    private themeService: ThemeService,
  ) {

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
