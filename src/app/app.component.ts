import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{

  survivedText: string = '';

  baseMultiplier = 40;
  value: number = this.baseMultiplier;

  isLowLife = false;
  isCritical = false;
  isHitKO = false;

  generateRevivalChance(multiplier: number) {
    let value = this.baseMultiplier;

    value += multiplier;
    if (this.isHitKO) value += -10;
    if (this.isCritical) value += -10;
    if (this.isLowLife) value += 10;

    this.value += multiplier;

    const random_number = (Math.random() * 100).toFixed(2);

    if (value >= parseFloat(random_number)) {
      this.survivedText = 'Survived';
    } else {
      this.survivedText = 'Died';
    }

    setTimeout(() => {
      this.survivedText = '';
      this.updateValue();
    }, 10000);
  }

  updateValue() {
    this.value = this.baseMultiplier;
    if (this.isHitKO) this.value += -10;
    if (this.isCritical) this.value += -10;
    if (this.isLowLife) this.value += 10;
  }
}
