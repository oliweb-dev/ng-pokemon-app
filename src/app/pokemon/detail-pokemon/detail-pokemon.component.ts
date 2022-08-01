import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Pokemon} from '../pokemon';
import {PokemonService} from '../pokemon.service';

@Component({
   selector: 'app-detail-pokemon',
   templateUrl: './detail-pokemon.component.html',
})
export class DetailPokemonComponent implements OnInit {
   pokemonList: Pokemon[];
   pokemon: Pokemon | undefined;

   constructor(private route: ActivatedRoute, private router: Router, private pokemonService: PokemonService) {}

   ngOnInit() {
      const pokemonId: string | null = this.route.snapshot.paramMap.get('id');

      if (pokemonId) {
         //this.pokemon = this.pokemonList.find(p => p.id === +pokemonId);
         this.pokemonService.getPokemonById(+pokemonId).subscribe(p => (this.pokemon = p));
      }
   }

   deletePokemon(pokemon: Pokemon) {
      this.pokemonService.deletePokemonById(pokemon.id).subscribe(() => this.goToPokemonList());
   }

   goToPokemonList() {
      this.router.navigate(['/pokemons']);
   }

   goToEditPokemon(pokemon: Pokemon) {
      this.router.navigate(['/edit/pokemon', pokemon.id]);
   }
}
