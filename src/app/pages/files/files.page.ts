import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-files',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './files.page.html',
  styleUrl: './files.page.scss'
})
export class FilesPage {

}
