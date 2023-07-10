import { Directive, HostListener } from '@angular/core';

@Directive({
    selector: '[blockCopyPaste]'
})
export class BlockCopyPasteDirective {
    constructor() {

    }

    @HostListener('paste', ['$event']) blockPaste(e: KeyboardEvent) {
        e.preventDefault();
        this.presentAlert("此欄位內容禁止貼上!");
    }

    @HostListener('copy', ['$event']) blockCopy(e: KeyboardEvent) {
        e.preventDefault();
        this.presentAlert("此欄位內容禁止複製!");
    }

    @HostListener('cut', ['$event']) blockCut(e: KeyboardEvent) {
        e.preventDefault();
        this.presentAlert("此欄位內容禁止剪下!");
    }

    presentAlert(msg: string) {
      alert(msg);
    }
}