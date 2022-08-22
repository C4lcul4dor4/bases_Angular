import { Injectable } from "@angular/core";

import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService{

    private _personajes: Personaje[]=[
        { 
          nombre: 'Bulma',
          poder: 1500
        },
        {
          nombre: 'Gotten',
          poder: 4500
        }
      ];

    get personajes(): Personaje[]{
        return [...this._personajes];
    }

    constructor(){ }

    agregarPersonaje(personaje: Personaje){
        this._personajes.push(personaje);
    }

}