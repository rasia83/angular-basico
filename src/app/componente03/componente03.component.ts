import { Component } from '@angular/core';

@Component({
  selector: 'app-componente03',
  standalone: true,
  imports: [],
  templateUrl: './componente03.component.html',
  styleUrl: './componente03.component.css'
})
export class Componente03Component {

  caminho:string = `assets/conjunto-de-cenas-do-caminho-da-natureza-diferente/`;
  dia:string = this.caminho + `1.png`;
  noite:string = this.caminho + `3.png`;

  imagem:string = this.caminho + `1.png`;
 
  alterarImagem() {
    if(this.imagem == this.dia) {
      this.imagem = this.noite;
    } else {
      this.imagem = this.dia;
    }

  }
}
