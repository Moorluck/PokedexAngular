import { Component, OnInit, OnChanges, SimpleChanges, Input, ChangeDetectorRef } from '@angular/core';
import { PokemonServiceService } from '../services/pokemon-service.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemons: any[] = []

  page: number = 1;

  constructor(
    private pokemonService: PokemonServiceService,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit(): void {  
    this.getData()
  }

  getData() {
    this.pokemons = []
    this.pokemonService.getPokemons(this.page).subscribe(
      (response: any) => {
        response.results.forEach((pokemon: any) => {
          this.pokemonService.getDetails(pokemon.name).subscribe(
            (pokemonDetails: any) => {
              this.pokemons.push(pokemonDetails)
              this.pokemons.sort(
                (p1, p2) => p1.id - p2.id
              )
            }
          )
        })
      }
    )
  }

  changePage(value: string) {
    if (value === "+") {
      this.page+=1
    }
    else {
      if (this.page > 1) {
        this.page -= 1
      }
    }
    this.getData()
  }

}
