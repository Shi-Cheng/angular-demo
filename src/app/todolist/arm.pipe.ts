import { OnInit, Pipe } from "@angular/core";

@Pipe({
  name: 'app-army-pipe'
})
export class ArmyPipe implements OnInit{
  ngOnInit(): void {
    
  }
  transform(val: any, level = 'normal') {
    if(level == 'normal') {
      return '初级';
    } else if(level == 'middle') {
      return '中级';
    } else if(level = 'high') {
      return '高级';
    } else {
      return '其他'
    }
  }
}
