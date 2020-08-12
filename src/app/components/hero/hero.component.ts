import { Component} from '@angular/core';
import { ActivatedRoute} from '@angular/router'

import {HeroesService} from '../../Services/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent {

  constructor (private activatedRoute: ActivatedRoute) { 

    this.activatedRoute.params.subscribe(params => {
      console.log(params);
    })
  }

  

}
