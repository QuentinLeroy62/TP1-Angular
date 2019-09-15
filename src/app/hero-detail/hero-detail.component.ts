import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../models/hero.model';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../services/hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'sw-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor(private route: ActivatedRoute, 
    private heroService: HeroService, 
    private location: Location ) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(){
    const id: number = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(myResult => this.hero = myResult);
  }

  goBack(){
    this.location.back();
  }

  //Sauvegarde changement puis retour une fois sauvegardé
  save(){
    this.heroService.updateHero(this.hero).subscribe(response => {
      this.goBack();
    });
  }
}
