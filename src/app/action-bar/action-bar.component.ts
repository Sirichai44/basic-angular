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
  @Output() numberChange = new EventEmitter();
  counter = 0;

  decrease() {
    if (this.counter - this.step >= 0) {
      this.counter -= this.step;
      this.numberChange.emit(this.counter);
    }
  }

  increase() {
    this.counter += this.step;
    this.numberChange.emit(this.counter);
  }
}
