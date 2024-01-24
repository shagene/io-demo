import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-helpcenter',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './helpcenter.page.html',
  styleUrl: './helpcenter.page.scss'
})
export class HelpcenterPage {

}
