import {Directive, ElementRef, HostListener, Input} from "@angular/core";

@Directive({
   selector: "[pkmnBorderCard]",
})
export class BorderCardDirective {
   initialColor: string = "#f5f5f5";
   defaultColor: string = "#009688";
   defaultHeight: number = 180;

   constructor(private el: ElementRef) {
      this.setHeight(this.defaultHeight);
      this.setBorder(this.initialColor);
   }

   @Input("pkmnBorderCard") borderColor: string; // avec alias
   //@Input() pkmnBorderCard: string; // sans alias -> - bien pour compréhension

   @HostListener("mouseenter") onMouseEvent() {
      this.setBorder(this.borderColor || this.defaultColor);
   }

   @HostListener("mouseleave") onMouseLeave() {
      this.setBorder(this.initialColor);
   }

   setHeight(height: number) {
      this.el.nativeElement.style.height = `${height}px`;
   }

   setBorder(color: string) {
      this.el.nativeElement.style.border = `solid 4px ${color}`;
   }
}
