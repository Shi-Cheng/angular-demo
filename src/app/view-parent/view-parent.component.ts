import { AfterViewInit, Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { LogService } from '../component/injectable/log.injectable';
import {Person, Heros} from './view-modal.service'

@Component({
  selector: 'app-view-parent',
  templateUrl: './view-parent.component.html',
  styleUrls: ['./view-parent.component.less']
})
export class ViewParentComponent implements OnInit, AfterViewInit{
  log;
  heros: Array<Heros>;
  constructor(logService: LogService) {
    this.log = logService;
  }

  ngOnInit(): void {
    this.heros = this.log.getInitData(); 
  }

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
