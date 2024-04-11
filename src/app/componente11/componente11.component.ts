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

  indice:number = -1;

  // função de cadastro
  cadastrar(){
    this.vetor.push(this.formulario.value as Pessoa);
    this.formulario.reset();
  }

  selecionar(indice:number){

    this.indice = indice;

    this.formulario.setValue({
      nome : this.vetor[indice].nome,
      idade : this.vetor[indice].idade,
      cidade : this.vetor[indice].cidade
    });

    this.btnCadastrar = false;
  }

  alterar(){

    this.vetor[this.indice] = this.formulario.value as Pessoa;

    this.formulario.reset();

    this.btnCadastrar = true;

  }

}
