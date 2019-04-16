import { Component, Input,ContentChild, ElementRef, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import { SplitButton } from 'primeng/primeng';


@Component({
  selector: 'hello',
  template: `<p-splitButton label="Save" icon="pi pi-check" (onClick)="save()" [model]="items" tabindex="-1" #split></p-splitButton>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent implements OnInit, AfterViewInit {
  /* @Input() name: string;
  @ContentChild('myContent')
  myElement; */

  @ViewChild('split')
  splitButton: SplitButton

  ngOnInit() {
    // console.log(this.myElement);
    //let x = this.splitButton['el'].nativeElement.querySelectorAll('.ui-splitbutton-menubutton')[0].setAttribute('tabindex', '-1');
  }

  ngAfterViewInit () {
    let x = this.splitButton['el'].nativeElement.querySelector('.ui-splitbutton-menubutton')
    //let a = this.splitButton['el'].nativeElement.getElementsByTagName('button');
    console.log(x);
    //a.setAttribute('tabindex', '-1')
    //console.log(a);
    //document.getElementById('split').removeAttribute('tabindex');
    //console.log(document.getElementById('split'));
  }
}
