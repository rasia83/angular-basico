import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../modelo/Pessoa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-componente11',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './componente11.component.html',
  styleUrl: './componente11.component.css'
})
export class Componente11Component {

  formulario = new FormGroup({
    nome : new FormControl('', [Validators.required, Validators.minLength(3)]),
    idade : new FormControl(null, [Validators.required, Validators.min(0), Validators.max(120)]),
    cidade : new FormControl('', [Validators.required, Validators.minLength(3)])
  })

  // visibilidade
  btnCadastrar:boolean = true;

  // vetor
  vetor:Pessoa[] = [];

  // função de cadastro
  cadastrar(){
    // cadastro no vetor
    this.vetor.push(this.formulario.value as Pessoa);

    // limpeza dos inputs
    this.formulario.reset();

    // visualização via console
    console.table(this.vetor);

  }


}
