import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service';
import { Observable } from 'rxjs/internal/Observable';
import { Hero } from '../models/hero.model';
import { Subject } from 'rxjs/internal/Subject';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'sw-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent implements OnInit {

  private heroes$: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroes$ = this.searchTerms.pipe(debounceTime(300), distinctUntilChanged(), switchMap((term: string) => this.heroService.searchHeroes(term)));
  }

  search(term: string){
    this.searchTerms.next(term);
  }

}
