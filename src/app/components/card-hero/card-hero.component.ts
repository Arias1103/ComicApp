import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-card-hero',
  templateUrl: './card-hero.component.html',
  styles: [],
})
export class CardHeroComponent implements OnInit {
  @Input() hero: any = {};
  @Input() index: number;

  @Output() heroSelected: EventEmitter<number>;

  constructor(private router: Router) {
    this.heroSelected = new EventEmitter();
  }

  ngOnInit(): void {}

  showHero() {
    this.heroSelected.emit(this.index);
  }
}
