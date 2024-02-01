import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AppBarComponent } from './components/app-bar/app-bar.component';
import { ThemeService } from './services/theme.service';
import { Subscription } from 'rxjs';
import { ThemeSwitcherComponent } from './components/theme-switcher/theme-switcher.component';
import { NavRailComponent } from './components/nav-rail/nav-rail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppBarComponent, ThemeSwitcherComponent, NavRailComponent, CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'App';
  currentTheme: string | undefined;
  themeSubscription: Subscription | undefined;

  backgroundImage1 = '../assets/images/space2.jpg';
  backgroundImage2 = '../assets/images/space.gif';
  currentBackgroundImage: string;

  constructor(private themeService: ThemeService) {
    // Randomly select one of the background images on component initialization
    this.currentBackgroundImage = this.getRandomBackgroundImage();
  }

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

  private getRandomBackgroundImage(): string {
    // Generate a random number (0 or 1) to select one of the images
    const randomIndex = Math.floor(Math.random() * 2);

    // Return the selected image URL based on the random number
    return randomIndex === 0 ? this.backgroundImage1 : this.backgroundImage2;
  }
}
