import { Component, OnInit } from '@angular/core';
import { Employ } from './todolist.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.less']
})
export class TodolistComponent implements OnInit{
  numberValue: String = "";
  lists: Array<String> = ['bob', 'tim', 'alice'];
  employList: Array<Employ> = []

  deleteStyle = {
    'delete-btn': true
  }

  ngOnInit(): void {
    this.employList.push({
      id:1,
      name: 'bob',
      age: 18, 
      address: '深圳'
    })
  }

  handleAdd() {
    this.lists.push(this.numberValue);
    this.numberValue = '';
  }

  handleDelete(index: number) {
    //this.lists.splice(index, 1);
    this.employList.splice(index, 1);
  }
}
