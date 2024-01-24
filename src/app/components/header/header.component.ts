// header.component.ts
import { Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { Subscription } from 'rxjs';
import { ThemeService } from '../../services/theme.service';
import { MatIcon } from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatIcon, MatTooltipModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss', 
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input() icons: {name: string, tooltip: string} [] | undefined;
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
