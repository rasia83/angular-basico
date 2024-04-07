import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente08',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente08.component.html',
  styleUrl: './componente08.component.css'
})
export class Componente08Component {

  media:number = 9;

  a:number = 1.1;
  b:number = -3.2;

  nomes:string[] = ["Tiago", "Victória", "Isabela"];

  // Variável contendo uma linguagem (HTML, CSS, JS)
  linguagem:string = 'JAVA';

}
