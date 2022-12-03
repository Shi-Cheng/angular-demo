import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.less']
})
export class NgModelComponent implements OnInit{
  inputValue: String = "default value";
  msg: String = "";
  
  handleNameChange() {
    if(!this.inputValue) {
      this.msg = "please insert value.";
    }
    if(this.inputValue.length >10) {
      this.msg = "the value over limit."
    }
  }
  ngOnInit() {

  }
}
