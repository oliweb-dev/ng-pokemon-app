import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styles: [
  ]
})
export class SearchPokemonComponent implements OnInit {
  // {...'a'.'ab'.'abz'.'ab'.'abc'.....}
  searchTerms = new Subject<string>();
  // {...pokemonList(a)..pokemonList(ab)...}
  pokemons$: Observable<Pokemon[]>;

  constructor(private router: Router, private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemons$ = this.searchTerms.pipe( // mettre à jour le flux
      // 1) {...'a'.'ab'.'abz'...'ab'...'abc'.....}
      debounceTime(300),
      // 2) {...'ab'...'ab'...'abc'.....}
      distinctUntilChanged(),
      // 3) {...'ab'...'abc'.....}
      // concatMap / mergeMap / switchMap -> le plus intéressant switchMap, il va juste réaliser la requête avec le dernier élément
      switchMap((term) => this.pokemonService.searchPokemonList(term) )


    );
  }

  search(term: string) {
    // on va pousser son term de recherche, un peu comme un push de tableau, mais pour un flux de données
    this.searchTerms.next(term);
  }

  goToDetailPokemon(pokemon: Pokemon) {
    this.router.navigate(['/pokemon', pokemon.id]);
  }

}
