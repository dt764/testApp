import { Component } from '@angular/core';
import { 

  IonHeader, IonToolbar, IonTitle, IonContent, IonButton,
  IonBackButton, IonInput, IonItem, IonLabel, IonButtons

} from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-reservation',
  templateUrl: './create-reservation.page.html',
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton,
    IonInput, IonItem, IonLabel, FormsModule, IonButtons, IonButton
  ]
})
export class CreateReservationPage {

  reservationName: string = '';

  constructor(private navCtrl: NavController) {}

  saveReservation() {
    if(this.reservationName.trim()) {
      console.log("Reserva creada:", this.reservationName);
      this.navCtrl.navigateBack('/tabs/reservations');
    } else {
      alert("Ingrese un nombre válido");
    }
  }
  cancel() {
    this.navCtrl.navigateBack('/tabs/reservations');
  }
}