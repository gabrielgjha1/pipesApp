import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipesApp';

  nombre:string = 'Gabriel'


  mostrarNOmbre(){

    console.log(this.nombre);

  }

}
