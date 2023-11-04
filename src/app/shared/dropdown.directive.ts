import {
  Directive,
  HostBinding,
  HostListener,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  private isOpen = false;

  constructor(private el: ElementRef) {}

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    const ulElement = this.el.nativeElement.querySelector('ul.dropdown-menu');

    if (ulElement) {
      if (this.isOpen) {
        ulElement.classList.add('open');
      } else {
        ulElement.classList.remove('open');
      }
    }
  }
}
