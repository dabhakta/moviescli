import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../data.service';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  providers: [DataService]
})
export class LoginComponent implements OnInit {

  constructor(private dataservice: DataService, private router: Router) { }

  ngOnInit() {
  }

  logIn(email: string, password: string) {
    this.dataservice.loginUser(email, password);
    this.router.navigate(['/home']);
  }

  goBack() {
    this.router.navigate(['/users']);
  }

}
