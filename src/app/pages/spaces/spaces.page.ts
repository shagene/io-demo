import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-spaces',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './spaces.page.html',
  styleUrl: './spaces.page.scss'
})
export class SpacesPage {

}
