import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageProvider } from '../../providers/storage/storage';
import { resetGenId } from '../../utils/id';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { sound } from '../../models/alarm';


@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  sound = sound;

  constructor(public navCtrl: NavController,
              public storage: StorageProvider,
              public local: LocalNotifications,
              // public musicCtrl:MusicControls,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  clear() {
    this.storage.storage.clear();
    resetGenId();
    this.local.cancelAll();
    this.local.clearAll();
  }

  play() {
  }

}
