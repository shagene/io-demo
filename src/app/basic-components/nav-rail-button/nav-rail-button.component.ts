import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Router, RouterModule, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-rail-button',
  standalone: true,
  imports: [MatIcon, MatButtonModule, CommonModule, RouterModule, RouterLinkActive],
  templateUrl: './nav-rail-button.component.html',
  styleUrl: './nav-rail-button.component.scss'
})
export class NavRailButtonComponent {
  constructor(private router: Router) { }
  @Input()
  icon!: string;
  @Input()
  route!: string;
  @Input()
  title!: string;


  navigate() {
    this.router.navigateByUrl(this.route);
  }
}

