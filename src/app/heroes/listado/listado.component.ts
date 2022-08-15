import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{
  heroes: string[] = ['Spiderman','SuperLopez', 'Salamandro', 'Policarpio','Lugoberto','Lala'];
  borrado: string = "";


  borrarHeroe(){
    console.log("Borrando......");
    //Saca el primer elemento del arreglo y lo retorna
    this.borrado = this.heroes.shift() || "";
    //Saca el ultimo elemento del arreglo y lo retorna
    //this.heroes.pop();
  }
}
