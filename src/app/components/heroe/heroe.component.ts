import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from "src/app/services/heroes.service";
import { Heroe } from "./../../services/heroes.service";

@Component({
  selector: "app-heroe",
  templateUrl: "./heroe.component.html",
  styles: []
})
export class HeroeComponent implements OnInit {
  Heroe: Heroe = {
    bio: "",
    nombre: "",
    casa: "",
    img: "",
    aparicion: "",
    id: -1
  };

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService
  ) {
    this._activatedRoute.params.subscribe(params => {
      this.Heroe = this._heroesService.getHeroe(params.id);
    });
  }

  ngOnInit() {}
}
