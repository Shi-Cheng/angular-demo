import { Component } from '@angular/core';

@Component({
  selector: 'app-myc04',
  templateUrl: './myc04.component.html',
  styleUrls: ['./myc04.component.less']
})
export class Myc04Component {
  name:String = "zhangsan";
  age: Number = 20;

  printName() {
    console.log(this.name);
  }
}
