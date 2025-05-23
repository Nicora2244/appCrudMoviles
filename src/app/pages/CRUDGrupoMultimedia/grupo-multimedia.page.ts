import { Component, OnInit } from '@angular/core';
import { GrupoMultimediaService } from '../../services/grupo-multimedia.service';

@Component({
  selector: 'app-grupo-multimedia',
  templateUrl: 'grupo-multimedia.page.html'
})
export class GrupoMultimediaPage implements OnInit {
  grupos: any[] = [];

  constructor(private grupoService: GrupoMultimediaService) {}

  ngOnInit() {
    this.grupoService.getGrupos().subscribe((data: any[]) => {
      this.grupos = data;
    });
  }
}