import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from "src/app/services/heroes.service";
import { Heroe } from "./../../services/heroes.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styles: []
})
export class SearchComponent implements OnInit {
  heroes: Heroe[] = [];
  word: string = "";
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService
  ) {}

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.word = params.searchWord;
      this.heroes = this._heroesService.buscarHeroes(this.word);
    });
  }
}
