import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { DibujoPage } from '../dibujo/dibujo';
import { CsPage } from '../cs/cs';
import { ComPage } from '../com/com';
import { PyePage } from '../pye/pye';
import { PappsPage } from '../papps/papps';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  historia = HistoriaPage;
  dibujo = DibujoPage;
  cs = CsPage;
  com = ComPage;
  pye = PyePage;
  papps = PappsPage;


  constructor(public navCtrl: NavController) {

  }
  clickhistoria(){
    this.navCtrl.push(this.historia);
  }

  clickdibujo(){
    this.navCtrl.push(this.dibujo);
  }

  clickcs(){
    this.navCtrl.push(this.cs);
  }

  clickcom(){
    this.navCtrl.push(this.com);
  }

  clickpye(){
    this.navCtrl.push(this.pye);
  }

  clickpapps(){
    this.navCtrl.push(this.papps);
  }

}
