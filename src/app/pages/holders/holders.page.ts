import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-holders',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './holders.page.html',
  styleUrl: './holders.page.scss'
})
export class HoldersPage {

}
