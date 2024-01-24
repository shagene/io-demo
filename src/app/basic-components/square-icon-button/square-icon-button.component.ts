// square-icon-button.component.ts

import { Component, Input, OnDestroy, OnInit} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { Subscription } from 'rxjs';

type BadgePosition = 'above after' | 'above before' | 'below before' | 'below after';

@Component({
  selector: 'app-square-icon-button',
  templateUrl: './square-icon-button.component.html',
  styleUrls: ['./square-icon-button.component.scss'],
  imports: [MatButtonModule, MatIconModule, MatBadgeModule, CommonModule], // Include MatBadgeModule
  standalone: true
})
export class SquareIconButtonComponent implements OnInit, OnDestroy {
  @Input() iconName?: string; // The name of the Material icon to display
  @Input() ariaLabel?: string; // Optional ARIA label for accessibility
  @Input() badgeContent: number | string = 0; // The content of the badge (number or text)
  @Input() badgePosition: BadgePosition = 'above after'; // Position of the badge

  currentTheme: string | undefined;
  themeSubscription: Subscription | undefined;

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.themeSubscription = this.themeService.themeChanged$.subscribe((theme) => {
      this.currentTheme = theme;
    });
  }

  ngOnDestroy() {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }
}
