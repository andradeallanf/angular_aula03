import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Produto } from '../modelo/Produto';
import { RequisicaoService } from '../requisicao.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(private requisicao:RequisicaoService) { }

  ngOnInit(): void {
    this.selecionarProduto();
  }

  //Formulario 
  formulario = new FormGroup({
    produto: new FormControl,
    marca : new FormControl,
    valor : new FormControl 
  });

  // Vetor de produtos
  vetor: Produto[] = [];
  
  
  // Cadastrar produto
  cadastrarProduto() {
    this.requisicao.cadastrar(this.formulario.value)
    .subscribe(retorno => {
      this.vetor.push(retorno);
      this.formulario.reset();  
    });
  }

  // Selecionar produtos
  selecionarProduto() {
    this.requisicao.selecionar()
    .subscribe(retorno => {this.vetor = retorno});
  }
}
