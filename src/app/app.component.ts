// app.component.ts

import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { RouterOutlet } from '@angular/router';
import { AppBarComponent } from './components/app-bar/app-bar.component';
import { ThemeService } from './services/theme.service';
import { Subscription } from 'rxjs';
import { ThemeSwitcherComponent } from './components/theme-switcher/theme-switcher.component';
import { NavRailComponent } from './components/nav-rail/nav-rail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppBarComponent, ThemeSwitcherComponent, NavRailComponent, CommonModule, RouterOutlet, ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'App';
  currentTheme: string | undefined;
  themeSubscription: Subscription | undefined;

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.themeSubscription = this.themeService.themeChanged$.subscribe((theme) => {
      this.currentTheme = theme;
    });
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  ngOnDestroy() {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }

  // ngOnDestroy method removed
}
