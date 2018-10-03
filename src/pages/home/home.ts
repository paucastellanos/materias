import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { DibujoPage } from '../dibujo/dibujo';
import { CsPage } from '../cs/cs';
import { ComPage } from '../com/com';
import { PyePage } from '../pye/pye';
import { PappsPage } from '../papps/papps';
import { MiPage } from '../mi/mi';
import { RobPage } from '../rob/rob';

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
  mi = MiPage;
  rob = RobPage;


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

  clickmi(){
    this.navCtrl.push(this.mi);
  }

  clickrob(){
    this.navCtrl.push(this.rob);
  }

}
