import { Component, OnInit } from '@angular/core';
import { HeroesBDService } from '../../services/heroes-bd.service';
import { MultimediaHeroeService } from '../../services/multimediasheroe.service';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonList, IonItem, IonImg } from '@ionic/angular/standalone';

@Component({
  selector: 'app-multimediasheroe',
  templateUrl: 'multimediasheroe.page.html',
  styleUrls: [],
  imports: [CommonModule, IonContent, IonHeader, IonToolbar, IonTitle, IonList, IonItem, IonImg],
})
export class MultimediaHeroePage implements OnInit {
  heroes: any[] = [];

  constructor(
    private heroesService: HeroesBDService,
    private mhService: MultimediaHeroeService
  ) {}

  ngOnInit() {
    this.heroesService.getHeroes().subscribe((heroes: any[]) => {
      const requests = heroes.map(hero =>
        this.mhService.getImagenesPorHeroe(hero._id).toPromise().then(medias => ({
          ...hero,
          multimedia: medias
        }))
      );
      Promise.all(requests).then(results => {
        this.heroes = results;
        console.log('Heroes with multimedia:', this.heroes);
      });
    });
  }
}
