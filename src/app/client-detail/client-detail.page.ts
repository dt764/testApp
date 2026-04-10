import { Component, Input } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle,
  IonContent, IonBackButton, IonButtons } from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.page.html',
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonBackButton,
    IonButtons
  ]
})
export class ClientDetailPage {

  @Input() id?: string;

  constructor(private navCtrl: NavController) {}

  goBack() {
    this.navCtrl.navigateBack('/tabs/clients');
  }

}