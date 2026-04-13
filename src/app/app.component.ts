import {Component} from '@angular/core';
import {OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {PokekService} from "./service/pokek.service";
import {DamageTypePipe} from "./damage-type.pipe";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, DamageTypePipe, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private pokek: PokekService) {
  }

  survivedText: string = '';

  typeList: any[] = [];
  typeSelected?: any;
  attackerType: any;

  baseMultiplier = 40;
  isLowLife = false;
  isCritical = false;
  isHitKO = false;

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.pokek.fetchPokek().then(data => {
      this.typeList = data;
    });
  }

  async onSelectType(type: any) {
    this.typeSelected = await this.pokek.fetchObj(type);
  }

  getDamagetype(): { chave: string, valor: any[] }[] {
    let teste = Object.entries(this.typeSelected['damage_relations']);
    return teste.map(([chave, valor]: [string, any]) => ({
      chave,
      valor
    })).filter(e =>
      !e.chave.includes('to') &&
      !e.chave.includes('no')
    );
  }

  selectAttackerType(type: any, damageType: string) {
    this.attackerType = type;
    if (damageType === 'double_damage_from') this.attackerType.multiplier = -10;
    if (damageType === 'half_damage_from') this.attackerType.multiplier = 10;
  }

  generateRevivalChance() {
    let value = this.baseMultiplier;

    value += this.attackerType.multiplier;
    if (this.isHitKO) value += -10;
    if (this.isCritical) value += -10;
    if (this.isLowLife) value += 10;

    const random_number = (Math.random() * 100).toFixed(2);

    if (value >= parseFloat(random_number)) {
      this.survivedText = 'Survived';
    } else {
      this.survivedText = 'Died';
    }

    setTimeout(() => {
      this.survivedText = '';
    }, 10000);
  }

}
