import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { User } from '../model/user';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {


  
   
  
  // Method to view user details
viewUser(id: number): void {
  console.log('Viewing user with ID:', id);
 
  // Implement logic to display user details
  // For example, you can open a modal or navigate to a different page to view user details
}

// Method to edit user details
editUser(id: number): void {
  console.log('Editing user with ID:', id);

  // Implement logic to edit user details
  // For example, you can open a modal or navigate to an edit page with user details pre-filled
}

addUser(){

}

// Method to delete user
deleteUser(id: number, user: User): void {
  console.log('Deleting user with ID:', id);
  console.log('User Details:', user);
  // Implement logic to delete user
  // For example, you can prompt the user for confirmation before deleting or perform deletion directly
}


}
