import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from "../pages/home-page/home-page.component";
import { AppHeaderComponent } from "../components/app-header/app-header.component";
import { AppFooterComponent } from "../components/app-footer/app-footer.component";
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomePageComponent, AppHeaderComponent, AppFooterComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'player-finder';
}
