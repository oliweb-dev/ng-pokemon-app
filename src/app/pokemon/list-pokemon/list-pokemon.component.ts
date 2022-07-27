import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {POKEMONS} from '../mock-pokemon-list';
import {Pokemon} from '../pokemon';

@Component({
   selector: 'app-list-pokemon',
   templateUrl: './list-pokemon.component.html',
})
export default class ListPokemonComponent {
   pokemontList: Pokemon[] = POKEMONS;

   constructor(private router: Router) {}

   goToPokemon(pokemon: Pokemon) {
      this.router.navigate(['/pokemon', pokemon.id]);
   }
}
