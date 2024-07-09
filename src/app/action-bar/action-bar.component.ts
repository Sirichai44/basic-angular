import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  standalone: true,
  imports: [],
  templateUrl: './action-bar.component.html',
  styleUrl: './action-bar.component.css',
})
export class ActionBarComponent {
  @Input() step: number = 1;
  @Output() counterChange = new EventEmitter();
  @Input() counter = 0;

  decrease() {
    if (this.counter - this.step >= 0) {
      this.counter -= this.step;
      this.counterChange.emit(this.counter);
    }
  }

  increase() {
    this.counter += this.step;
    this.counterChange.emit(this.counter);
  }
}
