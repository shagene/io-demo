// nav-rail.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { Subscription } from 'rxjs';
import { ThemeService } from '../../services/theme.service';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { NavRailButtonComponent } from '../../basic-components/nav-rail-button/nav-rail-button.component';


@Component({
  selector: 'app-nav-rail',
  standalone: true,
  imports: [CommonModule, MatIcon, MatButtonModule, NavRailButtonComponent],
  templateUrl: './nav-rail.component.html',
  styleUrls: ['./nav-rail.component.scss']
})
export class NavRailComponent implements OnInit, OnDestroy{
  currentTheme: string | undefined;
  themeSubscription: Subscription | undefined;

  constructor(private themeService: ThemeService, private router: Router) { }
  

  navigateTo(route: string) {
    this.router.navigateByUrl(route);
  }

  ngOnInit() {
    this.themeSubscription = this.themeService.themeChanged$.subscribe((theme) => {
      console.log(theme)
      this.currentTheme = theme;
    });
  }


  ngOnDestroy() {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }

}
