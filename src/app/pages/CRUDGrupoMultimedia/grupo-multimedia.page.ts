import { Component } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonButton,
  IonModal, IonInput, IonToggle,IonButtons, IonGrid, IonRow, IonCol, IonCard
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { GrupoMultimediaService } from '../../services/grupo-multimedia.service';
import { ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grupo-multimedia',
  templateUrl: 'grupo-multimedia.page.html',
  styleUrls: [],
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonButton,
    IonModal, IonInput, IonToggle, IonButtons, FormsModule, CommonModule, IonGrid, IonRow, IonCol, IonCard
  ],
})
export class GrupoMultimediaPage {
  grupos: any[] = [];

  showForm = false;
  editingGroup: any = null;
  groupForm = {
    nombre: '',
    estado: true,
  };

  constructor(
    private grupoService: GrupoMultimediaService,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.loadGroups();
  }

  loadGroups() {
    this.grupoService.getGrupos().subscribe((data: any[]) => {
      this.grupos = data;
    });
  }

  openForm() {
    this.editingGroup = null;
    this.groupForm = { nombre: '', estado: true };
    this.showForm = true;
  }

  closeForm() {
    this.showForm = false;
  }

  editGroup(grupo: any) {
    this.editingGroup = grupo;
    this.groupForm = { nombre: grupo.nombre, estado: grupo.estado };
    this.showForm = true;
  }

  saveGroup() {
    if (!this.groupForm.nombre.trim()) {
      this.presentToast('Group name is required');
      return;
    }

    if (this.editingGroup) {
      const updatedGroup = { ...this.editingGroup, ...this.groupForm };
      this.grupoService.updateGrupo(updatedGroup).subscribe(() => {
        this.presentToast('Group updated');
        this.loadGroups();
        this.closeForm();
      });
    } else {
      this.grupoService.createGrupo(this.groupForm).subscribe(() => {
        this.presentToast('Group created');
        this.loadGroups();
        this.closeForm();
      });
    }
  }

  deleteGroup(grupo: any) {
    if (confirm(`Delete group "${grupo.nombre}"?`)) {
      this.grupoService.deleteGrupo(grupo._id).subscribe(() => {
        this.presentToast('Group deleted');
        this.loadGroups();
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
