import { Injectable } from "@angular/core";

// 定义注册组件，谁用谁注入模式,优点避免全局干扰
@Injectable()
export class LoginService {
  startTime: any;
  endTime: any;

  start() {
    this.startTime = new Date();
    return console.log("login time: " + this.startTime);
  };
  logout() {
    this.endTime = new Date();
    console.log("logout time: " + this.endTime);
    console.log("停留在系统 【" + (this.endTime - this.startTime) + "】秒。")
  };
}