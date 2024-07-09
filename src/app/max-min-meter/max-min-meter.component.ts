import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActionBarComponent } from '../action-bar/action-bar.component';

@Component({
  selector: 'app-max-min-meter',
  standalone: true,
  imports: [ActionBarComponent],
  templateUrl: './max-min-meter.component.html',
  styleUrl: './max-min-meter.component.css',
})
export class MaxMinMeterComponent {
  @Input() minLabel: string = 'Min Label';
  @Input() maxLabel: string = 'Max Label';

  @Output() minChange = new EventEmitter();
  @Output() maxChange = new EventEmitter();

  doMinChange(value: number) {
    this.minChange.emit(value);
  }

  doMaxChange(value: number) {
    this.maxChange.emit(value);
  }
}
