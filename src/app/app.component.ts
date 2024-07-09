import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaxMinMeterComponent } from './max-min-meter/max-min-meter.component';
import { SquareFlexComponent } from './square-flex/square-flex.component';
import { ActionBarComponent } from './action-bar/action-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MaxMinMeterComponent,
    SquareFlexComponent,
    ActionBarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'basic-angular';
  appMinLabel = 'Min Label';
  appMaxLabel = 'Max Label';

  doAppMinChange(value: number) {
    console.log('App Min Change:', value);
  }

  doAppMaxChange(value: number) {
    console.log('App Max Change:', value);
  }

  squareWidth = 300;
  squareHeight = 200;

  doSquareWidthChange(value: number) {
    this.squareWidth = value;
  }

  appCounter = 100;
}
