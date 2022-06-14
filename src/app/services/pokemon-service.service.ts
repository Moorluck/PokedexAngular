import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  constructor(
    private http: HttpClient
  ) { }

  getPokemons(page: number) {
    return this.http.get("https://pokeapi.co/api/v2/pokemon?limit=15" + "&offset=" + (page - 1) * 15)
  }

  getDetails(idOrName: string) {
    return this.http.get("https://pokeapi.co/api/v2/pokemon/" + idOrName)
  }
}
