import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';



@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [MatIconModule, CommonModule, MatButtonModule],
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.scss'
})
export class ThemeSwitcherComponent implements OnInit {

  activeTheme!: string;
  showThemeOptions = false;

  constructor(private themeService: ThemeService) {

  }
  
  ngOnInit(): void {
    this.themeService.themeChanged$.subscribe(theme => {
      this.activeTheme = theme;
    });
  }

  toggleThemeOptions() {
    this.showThemeOptions = !this.showThemeOptions;
  }

  setTheme(theme: string) {
    this.themeService.setActiveTheme(theme);
    this.showThemeOptions = false;
  }
}

