import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Mobitel } from './mobitel';

@Component({
  selector: 'app-mobitel',
  templateUrl: './mobitel.component.html',
  styleUrls: ['./mobitel.component.css']
})
export class MobitelComponent  {

  @Input() mobitel: Mobitel | null = null;
  @Output() edit = new EventEmitter<Mobitel>();


}
