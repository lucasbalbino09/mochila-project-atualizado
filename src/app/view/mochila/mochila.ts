import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabel } from 'primeng/floatlabel';
import { InputNumber } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';

interface ItemMochila {
  descricao: string;
  quantidade: number;
}

@Component({
  selector: 'app-mochila',
  imports: [ButtonModule, InputNumber, InputTextModule, FloatLabel, ReactiveFormsModule, CommonModule ],
  exportAs: 'mochila',
  templateUrl: './mochila.html',
  styleUrl: './mochila.scss',
})
export class Mochila {
  itensList: ItemMochila[] = [];
  form: FormGroup;

   constructor() {
    this.form = new FormGroup({
      descricao: new FormControl('', Validators.required),
      quantidade: new FormControl(0, Validators.required),
    });
  }

  adicionar() {
    var formulario = this.form.value;

    const item: ItemMochila = {
      descricao: formulario.descricao,
      quantidade: formulario.quantidade,
    };

    this.itensList.push(item);
    this.form.reset();
  }

  remover(item: ItemMochila) {
    const index = this.itensList.indexOf(item);
    this.itensList.splice(index, 1);
  }
}
