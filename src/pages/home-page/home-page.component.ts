import { Component } from '@angular/core';
import { AppHeaderComponent } from '../../components/app-header/app-header.component';
import { AppFooterComponent } from '../../components/app-footer/app-footer.component';
import { SearchUserFormComponent } from "../../components/search-user-form/search-user-form.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [AppHeaderComponent, AppFooterComponent, SearchUserFormComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
}
