import { Component, TemplateRef, ViewChild } from '@angular/core';
import { flush } from '@angular/core/testing';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.less']
})
export class NgIfComponent {
  hasMore: boolean =  true;
  @ViewChild('noMore', {static: true})
  public noMore: TemplateRef<any>;

  ngStyleTest = {
    color: 'red',
    backGroundColor: 'blue',
    'border-color': 'black'
  }

  ngClassObg = {
    btn: true,
    'btn-success': false,
    'btn-danger': true
  }
  level: String = 'c01';
  c01: String = 'c01';
  c00: String = 'c00';
  c02: String = 'c02';

  ngOnInit() {
    console.log()
  }
  
  loadMOre() {
    this.hasMore = !this.hasMore;

    this.ngStyleTest['border-color'] = 'red';
  }

  showMore() {
    this.hasMore = !this.hasMore;
  }

  loadMore2() {
    this.ngClassObg['btn-success'] = true
    this.ngClassObg['btn-danger'] = false
  }
}
