// home.page.ts
import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss'
})
export class HomePage {
  greeting: string | undefined;
  randomUser: string | undefined;

  constructor() {
    this.greeting = this.getGreeting();
    this.randomUser = this.getRandomUser();
  }

  private getGreeting(): string {
    const hour = new Date().getHours();
    if (hour < 12) {
      return 'Morning';
    } else if (hour < 18) {
      return 'Afternoon';
    } else {
      return 'Evening';
    }
  }

  private getRandomUser(): string {
    const users = ['Evan', 'Jose', 'Melissa', 'Steven', 'Mark', 'Emily'];
    return users[Math.floor(Math.random() * users.length)];
  }
  
}

