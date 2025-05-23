import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Heroe } from 'src/app/interfaces/heroes.interface';
import { IonicModule, ToastController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HeroesBDService } from 'src/app/services/heroes-bd.service';

@Component({
  selector: 'app-heroe-edit',
  templateUrl: './heroe-edit.component.html',
  styleUrls: ['./heroe-edit.component.scss'],
  imports: [ 
    FormsModule,
    IonicModule,
  ],
  standalone: true,
})
export class HeroeEditComponent implements OnInit {
  @Input() heroe: Heroe = {
    _id: '',
    nombre: '',
    bio: '',
    img: '',
    aparicion: '',
    casa: '',
  };

  @Input() accion!: string;

  unResultado: any;

  constructor(
    private router: Router,
    private bd: HeroesBDService,
    private toastController: ToastController,
    private alertController: AlertController
  ) {}

  ngOnInit() {}

  guardar() {
    if (this.accion === 'editar') {
      this.guardarHeroe(this.heroe);
    } else if (this.accion === 'crear') {
      this.insertarHeroe(this.heroe);
    }
  }

  async guardarHeroe(unHeroe: any) {
    console.log(unHeroe);
    await this.bd.crud_Heroes(unHeroe, 'modificar').subscribe(
      (res: any) => {
        this.unResultado = res;

        if (this.unResultado.Ok === true) {
          this.presentToast('top', 'Registro Modificado...');
          this.router.navigate(['/tabs/tab4'], { queryParams: { recargar: true } });
        } else {
          console.log(this.unResultado);
          this.presentAlert('Error!', 'Modificando Héroe', this.unResultado.msg);
        }
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  async insertarHeroe(unHeroe: any) {
    console.log(unHeroe);
    await this.bd.crud_Heroes(unHeroe, 'insertar').subscribe(
      (res: any) => {
        this.unResultado = res;

        if (this.unResultado.Ok === true) {
          this.presentToast('top', 'Registro Insertado...');
          this.router.navigate(['/tabs/tab4'], { queryParams: { recargar: true } });
        } else {
          console.log(this.unResultado);
          this.presentAlert('Error!', 'Insertando Héroe', this.unResultado.msg);
        }
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

  async presentAlert(titulo: string, subtitulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      subHeader: subtitulo,
      message: mensaje,
      buttons: ['Ok'],
    });

    await alert.present();
  }
}
