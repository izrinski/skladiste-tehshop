import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tv } from './tv';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent  {

  @Input() tv: Tv | null = null;
  @Output() edit = new EventEmitter<Tv>();


}

