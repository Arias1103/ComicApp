import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {HeroesService}  from '../../services/heroes.service'

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html'
})
export class SearcherComponent implements OnInit {

  heroes:any []=[];

  constructor( private _activatedRoute: ActivatedRoute,
               private _heroesService: HeroesService    ) {
   }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params =>{
      // console.log(params['term']);
      const term = params['term'];
      if (term) {
        this.heroes = this._heroesService.searchHeroes(term);
        console.log(this.heroes);
      }
    })
  }

}
