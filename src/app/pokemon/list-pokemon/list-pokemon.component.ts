import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Pokemon} from '../pokemon';
import {PokemonService} from '../pokemon.service';

@Component({
   selector: 'app-list-pokemon',
   templateUrl: './list-pokemon.component.html',
})
export default class ListPokemonComponent implements OnInit {
   pokemontList: Pokemon[];

   constructor(private router: Router, private pokemonService: PokemonService) {}

   ngOnInit() {
      this.pokemontList = this.pokemonService.getPokemonList();
   }

   goToPokemon(pokemon: Pokemon) {
      this.router.navigate(['/pokemon', pokemon.id]);
   }
}
