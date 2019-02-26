import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-home-list',
  templateUrl: './view-home-list.component.html',
  styleUrls: ['./view-home-list.component.css']
})
export class ViewHomeListComponent implements OnInit {

  gethome: any

  img_list : any = [
    { src : 'assets/images/recent-property-1.png'} ,
    { src : 'assets/images/recent-property-2.png'} ,
    { src : 'assets/images/recent-property-3.png'} ,
    { src : 'assets/images/recent-property-4.png'} ,
    { src : 'assets/images/recent-property-5.png'} ,
    { src : 'assets/images/recent-property-6.png'} 

  ]

  constructor(private fb: FormBuilder, public apiService: ApiService, public router: Router) { 
    this.getList()
  }

  ngOnInit() {
  }

  getList(){
    this.apiService.retriveData('/homes/home').then(adminRegisterStatuss =>{
      this.gethome = adminRegisterStatuss
      console.log(this.gethome)
     
      
    })
  }

}
