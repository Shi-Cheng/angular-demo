import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPrecticeDirective]'
})
export class PrecticeDirectiveDirective {

  /**
   * 自定义指令默认构造方法里面接受的是应用元素的DOM，可以用自定义指令修改样式，做其他操作
   * @param el 
   */
  constructor(el: ElementRef) {
    console.log("directive");
    console.log(el);
    el.nativeElement.style.background = '#fcc';
    el.nativeElement.style.color = 'red';
    el.nativeElement.style.padding = "5px";
   }

}
