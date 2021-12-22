import { Directive ,ElementRef,HostListener,Input,OnInit} from '@angular/core';

@Directive({
  selector: '[appColors]'
})
export class ColorsDirective implements OnInit{

  constructor(private el:ElementRef) { 
    el.nativeElement.style.backgroundColor = 'pink';

  }
  ngOnInit(){

  }
  
  
  public divtag:any;
  @Input() selectedColor="";

  @HostListener('mouseenter') onMouseEnter() {
    debugger;
    this.el.nativeElement.style.backgroundColor = this.selectedColor;
  }
  
}