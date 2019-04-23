import { Component, OnInit, Input } from "@angular/core";
import { Heroe } from "./../../services/heroes.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-heroe-tarjeta",
  templateUrl: "./heroe-tarjeta.component.html",
  styles: []
})
export class HeroeTarjetaComponent implements OnInit {
  @Input() heroe: Heroe = {
    img: "",
    nombre: "",
    aparicion: "",
    casa: "",
    bio: "",
    id: -1
  };
  @Input() index: number = -1;

  constructor(private _router: Router) {}

  ngOnInit() {}

  getHeroe = () => this._router.navigate(["/heroe", this.index]);
}
