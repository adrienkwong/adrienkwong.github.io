import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import {Data} from '../../providers/data/data'

@Component({
  templateUrl: 'build/pages/history/history.html',
})
export class HistoryPage {

  constructor(private navCtrl: NavController, public viewCtrl: ViewController, public dataService: Data) {
  }

  


  dismiss() {
    this.viewCtrl.dismiss();
  }

}
