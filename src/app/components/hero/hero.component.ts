import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

import {HeroesService} from '../../services/heroes.service'
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent {

  hero: any={};

  constructor( private _activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService
              ) {
    this._activatedRoute.params.subscribe(params => {
      console.log(params);
      this.hero = this._heroesService.getHero(params['id']);
    })
   }



}
