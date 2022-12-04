import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-blog-header',
  templateUrl: './blog-header.component.html',
  styleUrls: ['./blog-header.component.less']
})
export class BlogHeaderComponent implements OnInit{
  // 普通属性不能被父组件传值
  // private headerTitle: string = null;

  // 输入型属性：父组件可以向子组件传值
  @Input()
  public headerTitle: string;

  ngOnInit(): void {
    
  }
}
