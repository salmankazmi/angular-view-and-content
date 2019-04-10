import { Component, Input,ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<ng-content></ng-content>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
  @ContentChild('myContent')
  myElement;

  ngOnInit() {
    // console.log(this.myElement);
  }
}
