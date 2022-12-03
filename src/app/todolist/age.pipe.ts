import { Pipe } from "@angular/core";

@Pipe({
    name: 'AgePipe'
})
export class AgePipe{
    // 管道的固定函数 transform
    transform(val: Number, lang='zh') {
        if(lang == 'zh') {
            if(val >= 18) {
                return '已成年';
            } else {
                return '未成年';
            }
        } else {
            if(val >= 18) {
                return 'older';
            } else {
                return 'yonger';
            }
        }
    }
}
