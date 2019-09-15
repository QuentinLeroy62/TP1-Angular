import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Hero } from '../models/hero.model';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Anakin Skywalker' },
      { id: 12, name: 'Wilhuff Tarkin' },
      { id: 13, name: 'Chewbacca' },
      { id: 14, name: 'Han Solo' },
      { id: 15, name: 'Greedo' },
      { id: 16, name: 'Jabba Desilijic Tiure' },
      { id: 18, name: 'Wedge Antilles' },
      { id: 19, name: 'Jek Tono Porkins' },
      { id: 20, name: 'Yoda' },
      { id: 21, name: 'Palpatine' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}