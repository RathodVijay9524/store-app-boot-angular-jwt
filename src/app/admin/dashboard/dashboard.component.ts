import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IconsModule } from '../../icons/icons.module';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule,ReactiveFormsModule, IconsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  adminMenus = [

    {
      title: 'Home',
      link: '/admin/dashboard',
      icon: 'home-check',
      cssClass: '',
    },
    {
      title: 'User',
      link: '/admin/users/list',
      icon: 'users-group',
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
      icon: 'file-diff',
      cssClass: '',
    },  
    {
      title: 'Logout',
      link: '/logout',
      icon: 'logout-2',
      cssClass: '',
    },
  ];

}
