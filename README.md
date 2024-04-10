# Angular Básico (versão 17)

## Material

[ralflima.com - angular17](https://ralflima.com/treinamentos/angular17/01introducao.php)

[Playlist](https://www.youtube.com/playlist?list=PLWXw8Gu52TRKj3tFWHlkheh8rLQRqQ1__)

| Conteúdos abordados nas 39 primeiras aulas  | Conteúdos exclusivos (38 aulas extras)             |
|---------------------------------------------|------------------------------------------------------|
| - Introdução ao Angular                     | - Implementar serviços                               |
| - Configurar ambiente                       | - Comunicação entre componentes                      |
| - Criar componentes                         | - Configurar o Angular Material                      |
| - Diretivas                                 | - Realizando requisições com APIs                    |
| - Property biding                           | - Criando uma API falsa através do Node.js           |
| - Event biding                              | - Introdução ao RxJS                                 |
| - Built-in control flow                     | - Pipes                                              |
| - Configurar o Bootstrap                    | - Rotas                                              |
| - FormsModule                               | - Testes unitários                                   |
| - Reactive Forms                            | - Deploy                                             |
| - Validators                                |  |
| - Projeto prático.                          |  |

## Aulas

[1 - Introdução](https://ralflima.com/treinamentos/angular17/01introducao.php)  
[2 - Conceitos](https://ralflima.com/treinamentos/angular17/02conceitos.php)  
[3 - Criando e executar projetos](https://ralflima.com/treinamentos/angular17/03criar_executar.php)  

### Configurando o ambiente

- Ter o Node.js instalado, a versão mínima é a 18.13.0
- Baixe o Visual Studio Code.
- `npm install -g @angular/cli@17`
- `ng new angular-basico`
- - Estilo do projeto: CSS
- - Server-side rendering: Não
- - `ng s`

[4 - Componente](https://ralflima.com/treinamentos/angular17/04componente.php)  

- `ng generate component meu-componente`
- `ng g c meu-componente`
- importar em `app.component.ts`

[5 - Interpolação de texto](https://ralflima.com/treinamentos/angular17/05interpolacao_texto.php)  

Para trabalhar com a interpolação de textos, basta utilizar duas chaves: `{{}}`, dessa maneira podemos trabalhar com informações dinâmicas.

[6 - Event binding](https://ralflima.com/treinamentos/angular17/06event_binding.php)  

```HTML
<button (click)="mensagem()">Clique aqui</button>
<button (dblclick)="mensagem()">Clique aqui</button>
<textarea (keypress)="tecla()"></textarea>
```

[7 - Property binding](https://ralflima.com/treinamentos/angular17/07property_binding.php)  

Tornando uma propriedade HTML dinâmica.
`<a [href]="variavel">Clique aqui</a>`

[8 - Diretiva ngIf](https://ralflima.com/treinamentos/angular17/08diretiva_ngif.php)  

`<div class="quadrado" *ngIf="exibir"></div>`

[9 - Diretiva ngFor](https://ralflima.com/treinamentos/angular17/09diretiva_ngfor.php)  

`<li *ngFor="let n of nomes; index as indice">{{indice + 1}} - {{n}}</li>`

[10 - Diretiva ngSwitch](https://ralflima.com/treinamentos/angular17/10diretiva_ngswitch.php)  

```HTML
<div [ngSwitch]="linguagem">
  <p *ngSwitchCase="'HTML'">Linguagem de Marcação.</p>
  <p *ngSwitchCase="'CSS'">Linguagem de Estilo.</p>
  <p *ngSwitchCase="'Java'">Linguagem de Programação.</p>
  <p *ngSwitchDefault>Linguagem não encontrada!</p> 
</div>
```

[11 - Diretiva ngStyle](https://ralflima.com/treinamentos/angular17/11diretiva_ngstyle.php)  

```html
<li *ngFor="let l of lista" [ngStyle]="{'color': l=='Aprovado' ? 'green' : 'red'}">{{l}}</li>
```

[12 - Diretiva ngClass](https://ralflima.com/treinamentos/angular17/12diretiva_ngclass.php)  

Adiciona classes CSS em um elemento HTML.

[13 - Control Flow](https://ralflima.com/treinamentos/angular17/13control_flow.php)  

@if, @for, @switch swtich a partir da versão 17 do Angular

[14 - Control Flow condicional](https://ralflima.com/treinamentos/angular17/14control_flow_condicional.php)  

```HTML
@if (media >= 7) {
  <p>Aprovado</p>
}@else if (media >= 5) {
  <p>Exame</p>
}@else {
  <p>Reprovado</p>
}
```

[15 - Control Flow laço de repetição](https://ralflima.com/treinamentos/angular17/15control_flow_laco_repeticao.php)  

```HTML
@for (n of nomes; track $index) {
  <!-- a cor se baseia no true ou false do $odd (impar) -->
  <p [ngStyle]="{'color' : $odd ? 'lightblue' : 'pink'}">{{$index}} - {{n}}</p>
}@empty{
  <p [ngStyle]="{'color' : 'red'}">Não existe nenhum nome registrado.</p>
}
```

[16 - Control Flow estrutura de escolha](https://ralflima.com/treinamentos/angular17/16control_flow_estrutura_de_escolha.php)  

```HTML
@switch (linguagem) {
  @case ('HTML') { <p>Linguagem de marcação</p>}
  @case ('JAVA') { <p>A Linguagem que move o mundo</p>}
  @case ('CSS') { <p>Linguagem de estilo</p>}
  @default { <p>Linguagem não encontrada</p>}
}
```

[17 - Bootstrap](https://ralflima.com/treinamentos/angular17/17bootstrap.php)  

`npm i bootstrap@5.3.2`  
Abrir o arquivo angular.json e adicionar os arquivos CSS e JavaScript do Bootstrap.  
"node_modules/bootstrap/dist/css/bootstrap.min.css"  
"node_modules/bootstrap/dist/js/bootstrap.min.js"  
[Bootstrap - docs](https://getbootstrap.com/docs/5.3/getting-started/introduction/)  

[18 - FormsModule (parte 1)](https://ralflima.com/treinamentos/angular17/18formsmodule_parte1.php)  

Importar o `FormsModule`.
```HTML
<h1>{{nome}}</h1>
<input type="text" [(ngModel)]="nome">
```

[19 - FormsModule (parte 2)](https://ralflima.com/treinamentos/angular17/19formsmodule_parte2.php)  

```HTML
<h1>{{nome}}</h1>
<h2>{{cidade}}</h2>

<form>  <!-- usar name="" para identificar no caso de múltiplos campos -->
  <input type="text" name="nome" [(ngModel)]="nome" placeholder="nome">
  <input type="text" name="cidade" [(ngModel)]="cidade" placeholder="cidade">
</form>
```

[20 - Reactive Forms](https://ralflima.com/treinamentos/angular17/20reactive_forms.php)  

adicionar o formulário no typescript e conferir os imports.

`import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';`

```ts
  formulario = new FormGroup({
    nome : new FormControl(''),
    cidade : new FormControl('')
  });
```

```HTML
<form [formGroup]="formulario">
  <p><label for="nome">Nome:</label>
  <input type="text" id="nome" formControlName="nome" placeholder="Nome"></p>
  <p><label for="cidade">Cidade:</label>
  <input type="text" id="cidade" formControlName="cidade" placeholder="Cidade"></p>
</form>

<p>Nome: {{formulario.value.nome}}</p>
<p>Cidade: {{formulario.value.cidade}}</p>
```

[21 - Apresentação do projeto](https://ralflima.com/treinamentos/angular17/21projeto_apresentacao.php)  
[22 - Criar componente do projeto](https://ralflima.com/treinamentos/angular17/22criar_componente_projeto.php)  
[23 - Strictnullchecks](https://ralflima.com/treinamentos/angular17/23stricktnullchecks.php)  

para o TypeScript aceitar variáveis não iniciadas:
editar o arquivo `tsconfig.json`
> adicionar no inicio de `compilerOptions`
> > `"strictNullChecks": false,`

[24 - Criar formulário](https://ralflima.com/treinamentos/angular17/24criar_formulario.php)  

criar os 3 inputs, 4 botões e formatação no CSS.

[25 - Criar tabela](https://ralflima.com/treinamentos/angular17/25criar_tabela.php)  
[26 - Implementar formulário reativo](https://ralflima.com/treinamentos/angular17/26formulario_reativo.php)  

`imports: [ReactiveFormsModule],`

`<form [formGroup]="formulario">` e nos campos `formControlName="nome"`

[27 - Validators](https://ralflima.com/treinamentos/angular17/27validators.php)  

```js
  formulario = new FormGroup({
    nome : new FormControl('', [Validators.required, Validators.minLength(3)]),
    idade : new FormControl(null, [Validators.required, Validators.min(0), Validators.max(120)]),
    cidade : new FormControl('', [Validators.required, Validators.minLength(3)])
  })
```

[28 - Criar modelo de pessoa](https://ralflima.com/treinamentos/angular17/28modelo_pessoa.php)  

`src\app\modelo\Pessoa.ts`

```js
export class Pessoa
{
  nome:string;
  idade:number;
  cidade:string;
}
```

[29 - Mensagens de validação](https://ralflima.com/treinamentos/angular17/29mensagens_validacao.php)  

```HTML
<form [formGroup]="formulario">
  <!-- nome -->
  @if (formulario.get('nome').hasError('required') && formulario.get('nome').touched ) {
    <p class="alert alert-warning">O campo Nome é obrigatório!</p>
  }
  @if (formulario.get('nome').hasError('minlength') && formulario.get('nome').touched ) {
    <p class="alert alert-light">O campo Nome precisa ter pelo menos três caracteres.</p>
  }
  <input type="text"    formControlName="nome"    placeholder="Nome" class="form-control">

  <!-- idade -->
  @if (formulario.get('idade').hasError('required') && formulario.get('idade').touched ) {
    <p class="alert alert-warning">O campo Idade é obrigatório!</p>
  }
  @if (formulario.get('idade').hasError('min') && formulario.get('idade').touched ) {
    <p class="alert alert-light">O campo Idade não aceita números inferiores a 0.</p>
  }
  @if (formulario.get('idade').hasError('max') && formulario.get('idade').touched ) {
    <p class="alert alert-light">O campo Idade não aceita números superiores a 120.</p>
  }
  <input type="number"  formControlName="idade"   placeholder="Idade" class="form-control">

  <!-- cidade -->
  @if (formulario.get('cidade').hasError('required') && formulario.get('cidade').touched ) {
    <p class="alert alert-warning">O campo Cidade é obrigatório!</p>
  }
  @if (formulario.get('cidade').hasError('minlength') && formulario.get('cidade').touched ) {
    <p class="alert alert-light">O campo Cidade precisa ter pelo menos três caracteres.</p>
  }
  <input type="text"    formControlName="cidade"  placeholder="Cidade" class="form-control">
```

[30 - Propriedade disabled](https://ralflima.com/treinamentos/angular17/30propriedade_disabled.php)  

```HTML
<input type="button" value="Cadastrar" class="btn btn-primary" 
    [disabled]="
      formulario.get('nome').getError('required') || 
      formulario.get('nome').getError('minlength') ||

      formulario.get('idade').getError('required') || 
      formulario.get('idade').getError('min') ||
      formulario.get('idade').getError('max') ||
      
      formulario.get('cidade').getError('required') || 
      formulario.get('cidade').getError('minlength')
    ">
```

[31 - Visilidade de botões](https://ralflima.com/treinamentos/angular17/31visibilidade_botoes.php)  
[32 - Criar vetor](https://ralflima.com/treinamentos/angular17/32criar_vetor.php)  
[33 - Função de cadastro](https://ralflima.com/treinamentos/angular17/33cadastro.php)  
[34 - Função de listagem](https://ralflima.com/treinamentos/angular17/34listagem.php)  
[35 - Função de seleção](https://ralflima.com/treinamentos/angular17/35selecao.php)  
[36 - Função de alteração](https://ralflima.com/treinamentos/angular17/36alterar.php)  
[37 - Função de remoção](https://ralflima.com/treinamentos/angular17/37remover.php)  
[38 - Função para cancelar](https://ralflima.com/treinamentos/angular17/38cancelar.php)  
[39 - Considerações](https://ralflima.com/treinamentos/angular17/39conclusao.php)  

## Instrutor

[GitHub](https://github.com/ralflima)

[LinkedIn](https://www.linkedin.com/in/ralf-lima-3b93708a/)

[YouTube](https://www.youtube.com/ralflima)

[Instagram](https://www.instagram.com/ralflima_dev)

## Angular generated readme.md

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.3.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
