import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../data.service';

@Component({
  moduleId: module.id,
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css'],
  providers: [DataService]
})
export class RegisterComponent implements OnInit {

  constructor(private dataservice: DataService, private router: Router) { }

  ngOnInit() {
  }

  register(email: string, password: string) {
    this.dataservice.registerUser(email, password);
    this.router.navigate(['/users']);
  }

  goBack() {
    this.router.navigate(['/users']);
  }

}
