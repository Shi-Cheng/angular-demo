import { Component } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.less']
})
export class ViewChildComponent {
  content= 'child dom';
}
