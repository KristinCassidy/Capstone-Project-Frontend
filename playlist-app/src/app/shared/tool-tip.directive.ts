import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appToolTip]'
})
export class ToolTipDirective {
    @HostBinding('class.open') isOpen = false;
    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }
}

// Not complete