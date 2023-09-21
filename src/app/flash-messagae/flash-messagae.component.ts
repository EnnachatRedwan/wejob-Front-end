import { Component, Input, OnInit } from '@angular/core';
import { FlashMessage } from './FlashMessage';
import { FlashMessageService } from '../flash-message.service';

@Component({
  selector: 'app-flash-messagae',
  templateUrl: './flash-messagae.component.html',
  styleUrls: ['./flash-messagae.component.css'],
})
export class FlashMessagaeComponent {
  constructor(public flashMessageService: FlashMessageService) {}
}
