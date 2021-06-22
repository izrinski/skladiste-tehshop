import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Laptop } from './laptop';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent  {

  @Input() laptop: Laptop | null = null;
  @Output() edit = new EventEmitter<Laptop>();


}
