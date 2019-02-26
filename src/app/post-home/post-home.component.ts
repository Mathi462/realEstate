import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-home',
  templateUrl: './post-home.component.html',
  styleUrls: ['./post-home.component.css']
})
export class PostHomeComponent implements OnInit {

  registrationPropertyStatus : any
  registrationProperty = new FormGroup({
    // f_name: new FormControl(''),
    // l_name: new FormControl(''),
    // email: new FormControl(''),
    // password: new FormControl(''),
    // state: new FormControl(''),
    // city: new FormControl(''),
    // mobile: new FormControl(''),

    Title : new FormControl(''),
    Price : new FormControl(''),
    Property_type : new FormControl(''),
    Transaction : new FormControl(''),
    Bedrooms : new FormControl(''),
    Bathrooms : new FormControl(''),
    Min_area : new FormControl(''),
    Max_area : new FormControl(''),
    State : new FormControl(''),
    City : new FormControl(''),
    Description : new FormControl(''),
  })

  constructor(private fb: FormBuilder, public apiService: ApiService, public router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.registrationProperty.value)
    
    this.apiService.postData('/homes/home',this.registrationProperty.value).then(adminRegisterStatuss =>{
      this.registrationPropertyStatus = adminRegisterStatuss
      console.log(this.registrationPropertyStatus)
      alert('Property Register Successfully')
      this.router.navigate(['/view-home-list']);
      
    })
  }

}
