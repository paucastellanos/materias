import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { DibujoPage } from '../dibujo/dibujo';
import { CsPage } from '../cs/cs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  historia = HistoriaPage;
  dibujo = DibujoPage;
  cs = CsPage;


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



}
