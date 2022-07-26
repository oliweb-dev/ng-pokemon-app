import {Component, OnInit} from "@angular/core";
import {Pokemon} from "./pokemon";
import {POKEMONS} from "./mock-pokemon-list";

@Component({
   selector: "app-root",
   templateUrl: "app.composent.html",
})
export class AppComponent implements OnInit {
   pokemontList: Pokemon[] = POKEMONS;
   pokemonSelected: Pokemon | undefined;

   ngOnInit(): void {
      console.table(this.pokemontList);
   }

   selectPokemon(pokemonId: string) {
      const pokemon: Pokemon | undefined = this.pokemontList.find((p) => p.id === +pokemonId);

      if (pokemon) {
         console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}`);
         this.pokemonSelected = pokemon;
      } else {
         console.log(`Vous avez cliqué n'existe pas`);
         this.pokemonSelected = pokemon;
      }
   }
}
