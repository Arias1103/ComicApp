import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';

import {HeroesService}  from '../../services/heroes.service'

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html'
})
export class SearcherComponent implements OnInit {

  heroes:any []=[];
  term: string;
  @Input() hero: any ={};
  @Input() index: number;

  constructor( private _activatedRoute: ActivatedRoute,
               private _heroesService: HeroesService,
               private router: Router) {
   }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params =>{
        this.term = params['term'];
        this.heroes = this._heroesService.searchHeroes(params ['term']);
        console.log(this.heroes);
    })
  }

  showHero(){
    this.router.navigate(['/hero', this.index]);
  }

}
