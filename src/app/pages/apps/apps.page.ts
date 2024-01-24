import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-apps',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './apps.page.html',
  styleUrl: './apps.page.scss'
})
export class AppsPage {

}
