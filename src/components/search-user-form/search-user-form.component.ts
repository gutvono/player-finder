import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { GetProfileService } from '../../services/getProfile/get-profile.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-search-user-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './search-user-form.component.html',
  styleUrl: './search-user-form.component.scss'
})
export class SearchUserFormComponent {
    search = new FormControl('');
    public showError: boolean = false;
    public errorMessage?: string;

    constructor(
        private getProfileService: GetProfileService
    ) {}

  searchProfile() {
    const userId = this.search.value;
    if (userId) {
      this.getProfileService.getProfile(userId).subscribe(
        (profile) => {
          // Handle the profile data
          console.log(profile);
        },
        (error) => {
          // Handle the error
          this.showError = true;
          this.errorMessage = 'Failed to fetch profile';
        }
      );
    } else {
      this.showError = true;
      this.errorMessage = 'User ID is required';
    }
  }
}
