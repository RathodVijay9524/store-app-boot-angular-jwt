import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule,ReactiveFormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  adminMenus = [

    {
      title: 'Home',
      link: '/admin/dashboard',
      icon: 'circle-plus',
      cssClass: '',
    },
    {
      title: 'User',
      link: '/admin/users/list',
      icon: 'circle-plus',
      cssClass: '',
    },
    {
      title: 'Product',
      link: '/admin/products/list',
      icon: 'building-store',
      cssClass: '',
    },
    {
      title: 'Category',
      link: '/admin/categorys/list',
      icon: 'file-diff',
      cssClass: '',
    },
    {
      title: 'Order',
      link: '/admin/orders/list',
      icon: 'truck-return',
      cssClass: '',
    },
    {
      title: 'Payment',
      link: '/admin/payments/list',
      icon: 'users-group',
      cssClass: '',
    },  
    {
      title: 'Logout',
      link: '#!',
      icon: 'logout-2',
      cssClass: '',
    },
  ];

}
