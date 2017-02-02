import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../data.service';

@Component({
  moduleId: module.id,
  selector: 'app-users',
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.css'],
  providers: [DataService]
})

export class UsersComponent implements OnInit {

  usersTitle = "Users";
  users = [];
  currentuser: any;
  currentuserbool: boolean = true;
  email: string;

  constructor(
    private dataservice: DataService,
    private router: Router) { }

  ngOnInit() {
    this.getUsers();
    this.getCurrentUser();
  }

  getUsers() {
    this.users = this.dataservice.getUsers();
  }

  getCurrentUser() {
    this.currentuser = this.dataservice.getCurrentUser();
    this.updateDisplayCurrentUser();
  }

  updateDisplayCurrentUser() {
    if (this.currentuser !== null) {
      this.currentuserbool = true;
    } else {
      this.currentuserbool = false;
    }
  }

  logIn() {
    this.router.navigate(['/login']);
  }

  register() {
    this.router.navigate(['/register']);
  }

  signOut() {
    if (this.currentuser !== null) {
      this.dataservice.signoutUser();
      window.location.reload();
    }
  }
}
