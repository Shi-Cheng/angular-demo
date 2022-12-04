import { Component } from '@angular/core';
import { LoginService } from '../component/injectable/login.injectable';
import { Runnable } from '../component/interface/car-interface.component';

@Component({
  selector: 'app-myc05',
  templateUrl: './myc05.component.html',
  styleUrls: ['./myc05.component.less'],
  providers: [LoginService]
})
export class Myc05Component implements Runnable {
  login: any;
  constructor(login: LoginService) {
    this.login = login;
  }
  start() {
    console.log("the myc05 is running");
  }
  stop() {
    console.log("the myc05 stops");
  }

  handleLogin() {
    this.login.start();
  }

  handleLogout() {
    this.login.logout();
  }

  
}
