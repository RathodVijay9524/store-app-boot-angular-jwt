import { Component } from '@angular/core';
import { User } from '../model/user';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  editedUser: any = {}; // Define the property to hold the edited user data

  // Method to open the modal with user data for editing
  editUser(user: any): void {
    // Assign the user data to editedUser
    this.editedUser = { ...user }; // Using spread operator to clone the user object
  }

  // Method to save the edited user data
  saveUser(): void {
    // Implement logic to save the edited user data
    console.log('Saving user:', this.editedUser);
    // You can send the editedUser object to your backend for saving
    // Clear the editedUser object after saving if needed
    this.editedUser = {};
  }


}
