import { Component, OnInit } from '@angular/core';
import {Hero} from '../models/hero.model';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'sw-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes:Array<Hero>;

  constructor(private heroService: HeroService) { }

  getHeroes(){
    this.heroService.getHeroes().subscribe(myResult => this.heroes = myResult);
  }

  ngOnInit() {
    //Récupérer les données
    this.getHeroes();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
