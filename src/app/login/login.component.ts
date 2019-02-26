import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: FormGroup;
  
  adminRegisterStatus: any

  registrationForm = new FormGroup({
    f_name: new FormControl(''),
    l_name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    state: new FormControl(''),
    city: new FormControl(''),
    mobile: new FormControl(''),
  })

  loginForm = new FormGroup({
    
    email: new FormControl(''),
    password: new FormControl(''),
    
  })



  constructor(private fb: FormBuilder, public apiService: ApiService, public router: Router) { }

  OnInit() {
    this.form = this.fb.group({
      f_name: [''],
      l_name: [''],
      email: [''],
      password: [''],
      state: [''],
      city: [''],
      mobile: [''],
    });

    
  }


  
  onSubmit() {
    console.log(this.registrationForm.value)
    this.apiService.postData('/admins/admin',this.registrationForm.value).then(adminRegisterStatuss =>{
      this.adminRegisterStatus = adminRegisterStatuss
      console.log(this.adminRegisterStatus)
      alert('Register Successfully')
      // this.router.navigate(['/'])
      
    })
  }

  login(){
    console.log(this.loginForm.value)
    this.apiService.postData('/admins/authenticate',this.loginForm.value).then(adminRegisterStatuss =>{
      this.adminRegisterStatus = adminRegisterStatuss
      console.log(this.adminRegisterStatus)

      if(this.adminRegisterStatus.success)
      {
        alert('Login Successfully')

        console.log(this.adminRegisterStatus.user.user)

        localStorage.setItem("user", JSON.stringify( this.adminRegisterStatus.user.user) )
        this.router.navigate(['/dashboard'])
      }
      else{
        alert('Email Id or Password Incorrect')
      }
      
      
    })
  }
}
