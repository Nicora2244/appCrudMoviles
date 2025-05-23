import { Component, OnInit } from '@angular/core';
import { MultimediaService } from '../../services/multimedia.service';

@Component({
  selector: 'app-multimedia',
  templateUrl: 'multimedia.page.html'
})
export class MultimediaPage implements OnInit {
  medios: any[] = [];

  constructor(private mediaService: MultimediaService) {}

  ngOnInit() {
    this.mediaService.getMultimedias().subscribe((data: any[]) => {
      this.medios = data;
    });
  }
}