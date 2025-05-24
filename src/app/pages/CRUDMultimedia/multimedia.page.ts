import { Component } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonButton,
  IonModal, IonInput, IonToggle, IonButtons, IonImg 
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { MultimediaService } from '../../services/multimedia.service';
import { ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-multimedia',
  templateUrl: 'multimedia.page.html',
  styleUrls: [],
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonButton,
    IonModal, IonInput, IonToggle, IonButtons,
    FormsModule, CommonModule, IonImg 
  ],
})
export class MultimediaPage {
  medios: any[] = [];

  showForm = false;
  editingMedia: any = null;
  mediaForm = {
    url: '',
    tipo: '',
    estado: true,
    IdGrupoMultimedia: ''
  };

  constructor(
    private mediaService: MultimediaService,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.loadMedios();
  }

  loadMedios() {
    this.mediaService.getMultimedias().subscribe((data: any[]) => {
      this.medios = data;
    });
  }

  openForm() {
    this.editingMedia = null;
    this.mediaForm = { url: '', tipo: '', estado: true, IdGrupoMultimedia: '' };
    this.showForm = true;
  }

  closeForm() {
    this.showForm = false;
  }

  editMedia(media: any) {
    this.editingMedia = media;
    this.mediaForm = {
      url: media.url,
      tipo: media.tipo,
      estado: media.estado,
      IdGrupoMultimedia: media.IdGrupoMultimedia
    };
    this.showForm = true;
  }

  saveMedia() {
    if (!this.mediaForm.url.trim() || !this.mediaForm.tipo.trim()) {
      this.presentToast('URL and Type are required');
      return;
    }

    if (this.editingMedia) {
      const updated = { ...this.editingMedia, ...this.mediaForm };
      this.mediaService.updateMultimedia(updated).subscribe(() => {
        this.presentToast('Multimedia updated');
        this.loadMedios();
        this.closeForm();
      });
    } else {
      this.mediaService.createMultimedia(this.mediaForm).subscribe(() => {
        this.presentToast('Multimedia created');
        this.loadMedios();
        this.closeForm();
      });
    }
  }

  deleteMedia(media: any) {
    if (confirm(`Delete multimedia with URL "${media.url}"?`)) {
      this.mediaService.deleteMultimedia(media._id).subscribe(() => {
        this.presentToast('Multimedia deleted');
        this.loadMedios();
      });
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
    });
    toast.present();
  }
}
