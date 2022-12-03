import { Component, OnInit } from '@angular/core';
import { Employ, ArmyObject } from './todolist.service';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.less']
})
export class TodolistComponent implements OnInit{
  numberValue: String = "";
  lists: Array<String> = ['bob', 'tim', 'alice'];
  employList: Array<Employ> = []
  armyList: Array<ArmyObject> = []

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

    this.armyList.push(
      {
        id: 1,
        name: 'Alice',
        type: 'middle'
      },
      {
        id: 2,
        name: 'Smith',
        type: 'high'
      }
    )
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
