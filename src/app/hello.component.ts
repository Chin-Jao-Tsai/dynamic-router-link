import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1 (click)='click()'>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
  @Output() childEvent = new EventEmitter();

  click(){
    this.childEvent.emit("hello Component");
  }
}
