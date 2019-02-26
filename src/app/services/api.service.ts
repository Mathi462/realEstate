import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  adminUrl: string;
  headerOptions: any;
  authToken : any
  constructor(public http: HttpClient) {

  this.adminUrl = 'http://localhost:3001';

  

  }

  postData(endUrl, body) {
    return new Promise((res) => {
      this.headerOptions = new HttpHeaders();
      
      this.http.post(this.adminUrl + endUrl, body, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).subscribe(data => {
        res(data);
      }, err => {
        console.error(err);
      });
    });
  }

  postDataImage(endUrl, body) {
    return new Promise((res) => {
      this.http.post(this.adminUrl + endUrl, body).subscribe(data => {
        res(data);
      }, err => {
        console.error(err);
      });
    });
  }

  retriveData(endUrl) {
    return new Promise((res) => {
      this.headerOptions = new HttpHeaders();
      
      this.http.get(this.adminUrl + endUrl, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).subscribe(data => {
        res(data);
      }, err => {
        console.error(err);
      });
    });
  }

  deleteData(endUrl) {
    return new Promise((res) => {
      this.headerOptions = new HttpHeaders();
      this.http.delete(this.adminUrl + endUrl, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).subscribe(data => {
        res(data);
      }, err => {
        console.error(err);
      });
    });
  }


  updateData(endUrl, body) {
    return new Promise((res) => {
      this.headerOptions = new HttpHeaders();
      this.http.put(this.adminUrl + endUrl, body, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).subscribe(data => {
        res(data);
      }, err => {
        console.error(err);
      });
    });
  }

  // getProfile(endUrl) {

  //   return new Promise((res) => {
  //     this.headerOptions = new HttpHeaders();
  //     this.loadToken();
  //     this.headerOptions.append('Authorization', this.authToken);
  //     this.headerOptions.append('Content-Type', 'application/json');
  //     this.http.get(this.adminUrl + endUrl, { headers: this.headerOptions  })
  //     .subscribe(data => {
  //       res(data);
  //     }, err => {
  //       console.error(err);
  //     });
  //   });   
    
  // }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
    console.log(this.authToken)
  }

  // loggedIn() {
  //   return tokenNotExpired('id_token');
  // }
}
