import { AfterViewInit, Component, ElementRef, TemplateRef, ViewChild } from '@angular/core';
import {Person} from './view-parent.service'

@Component({
  selector: 'app-view-parent',
  templateUrl: './view-parent.component.html',
  styleUrls: ['./view-parent.component.less']
})
export class ViewParentComponent implements AfterViewInit{
  
  @ViewChild('domLabelChild', { static: true })
  public domLabelChild: TemplateRef<any>;

  @ViewChild('a1', {static: true})
  public a1: TemplateRef<any>;

  @ViewChild('a2', {static: true})
  public a2: TemplateRef<any>;

  ngAfterViewInit() {
    console.log(this.domLabelChild)
  }

  isValid:boolean = false;

  data: String = 'test';

  heroes: Array<Person> = [
    {
      name: "zhangsan",
      age: 12
    }, 
    {
      name: "lisi",
      age: 20
    }
  ]
}
