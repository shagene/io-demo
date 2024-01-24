/* theme.service.ts */
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly THEME_KEY = 'selectedTheme';
  private themes = ['theme-1-light', 'theme-1-dark'];
  private activeTheme = new BehaviorSubject<string>('theme-1-light');

  themeChanged$ = this.activeTheme.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.loadSavedTheme();
    }
  }

  setActiveTheme(theme: string) {
    if (!this.themes.includes(theme)) {
      console.warn(`Attempted to set unknown theme: ${theme}`);
      return;
    }

    console.log(`Setting active theme: ${theme}`); // Log the theme being set
    this.activeTheme.next(theme);
    document.documentElement.setAttribute('data-theme', theme);

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.THEME_KEY, theme);
    }
  }

  toggleTheme() {
    const currentIndex = this.themes.indexOf(this.activeTheme.getValue());
    const nextIndex = (currentIndex + 1) % this.themes.length;
    this.setActiveTheme(this.themes[nextIndex]);
  }

  private loadSavedTheme() {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem(this.THEME_KEY);
      if (savedTheme && this.themes.includes(savedTheme)) {
        console.log(`Loading saved theme: ${savedTheme}`); // Log the saved theme
        this.setActiveTheme(savedTheme);
      } else {
        console.log(`Setting default theme: ${this.themes[0]}`); // Log the default theme
        this.setActiveTheme(this.themes[0]);
      }
    }
  }
}
