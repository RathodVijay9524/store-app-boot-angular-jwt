import { Component } from '@angular/core';

import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { User } from '../model/user';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { UserService } from '../../../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule,RouterModule,ToastrModule,CommonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  user=new User(0,'','','','','');
  errors: any = {};
  msg:any;
  dupEmail:any;

  constructor(
    private toastr: ToastrService,
    private service:UserService
    
  ) {}

  formSubmit(event: SubmitEvent, signUpForm: NgForm){
    if (signUpForm.valid) {

      this.service.signupUser(this.user).subscribe(response=>{
        this.msg = response.message;
        console.log('User registered... successfully:', response.user);
        this.toastr.success(this.msg, '', {
          positionClass: 'toast-top-center',
        });
        this.user = new User(0,'', '', '', 'male', '');
        this.errors='';
        },
        error => {
          this.errors=error.error;
          this.dupEmail=error.error.error;
          console.error('An error occurred:', error);
          if(this.dupEmail==='Internal Server Error'){
            this.toastr.error(this.dupEmail, 'Duplicate entry, Use other Email', {
              positionClass: 'toast-top-right',
            });
          }
         
        })


    }
    else {
      console.log("Invalid Form");
      this.toastr.error('Form is not valid !!', '', {
        positionClass: 'toast-top-right',
      });

    }


  }
   
    
    
     
    
    
  


}
