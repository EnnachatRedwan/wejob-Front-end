import { Injectable, Input, OnInit } from '@angular/core';
import { FlashMessage } from './flash-messagae/FlashMessage';

@Injectable({
  providedIn: 'root',
})
export class FlashMessageService {
  @Input()
  flashMessage?: FlashMessage = undefined;

  show = false;

  constructor() {}

  showMessage(flashMessage: FlashMessage) {
    this.flashMessage = flashMessage;
    this.show = true;
    setTimeout(() => {
      this.show = false;
      this.flashMessage = undefined;
    }, 4000);
  }
}
