import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  contatos = [
    {
      id: '1',
      nome: 'Nathalia',
      telefone: '119994-7854',
      email: "nathalia@gmail.com"
    },
    {
      id: '2',
      nome: 'Lucas',
      telefone: '119994-7777',
      email: "lucas@gmail.com"
    },
    {
      id: '3',
      nome: 'Aldria',
      telefone: '119994-9999',
      email: "aldria@gmail.com"
    }
  ]

  constructor(public navCtrl: NavController) {
  }

  onItemClick(contato){
    console.log("item-click", contato);
  }


}
