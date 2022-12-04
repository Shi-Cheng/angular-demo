import { Injectable } from "@angular/core";

// 所有的服务对象都是可被注入的，全局注入模式
@Injectable({
  providedIn: 'root' // 服务提供者
})
export class LogService {
  heros: Array<{ id: number; name: string }> = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];
  getInitData() {
    return this.heros;
  };
  addLog(val: string) {

  };
}