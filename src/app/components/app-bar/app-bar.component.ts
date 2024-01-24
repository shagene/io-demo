import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { Subscription } from 'rxjs';
import { ThemeService } from '../../services/theme.service';
import {MatButtonModule} from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-bar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, MatIconModule, MatBadgeModule],
  templateUrl: './app-bar.component.html',
  styleUrl: './app-bar.component.scss'
})
export class AppBarComponent implements OnInit, OnDestroy {
  currentTheme: string | undefined;
  themeSubscription: Subscription | undefined;
  dwLogoSrc: string | undefined;
  dividerSrc: string | undefined;
  ioSrc: string | undefined;

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.themeSubscription = this.themeService.themeChanged$.subscribe((theme) => {
      this.currentTheme = theme;
      this.updateLogo();
    });
    this.updateLogo(); // Also set the logo on initial load
  }

  updateLogo() {
    this.dwLogoSrc = this.currentTheme === 'theme-1-light' ? '/assets/images/disneyblack.png' : '/assets/images/disneywhite.png';
  }

  ngOnDestroy() {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }
}