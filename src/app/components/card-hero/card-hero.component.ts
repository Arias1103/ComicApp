import { Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-card-hero',
  templateUrl: './card-hero.component.html',
  styles: [
  ]
})
export class CardHeroComponent implements OnInit {

@Input() hero: any = {};
@Input() index: number;


  constructor(private router: Router) { 
    
  }

  ngOnInit(): void {
  }

  showHero(){
    this.router.navigate(['/hero', this.index]);
  }

}
