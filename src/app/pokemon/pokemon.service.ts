import {Injectable} from '@angular/core';
import {POKEMONS} from './mock-pokemon-list';
import {Pokemon} from './pokemon';

@Injectable()
export class PokemonService {
   getPokemonList(): Pokemon[] {
      return POKEMONS;
   }

   getPokemonById(pokemonId: number): Pokemon | undefined {
      return POKEMONS.find(p => p.id === pokemonId);
   }

   getPokemonTypeList(): string[] {
      return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik', 'Poson', 'Fée', 'Vol', 'Combat', 'Psy'];
   }
}
