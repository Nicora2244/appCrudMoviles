import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MultimediaHeroeService } from '../../services/multimediasheroe.service';

@Component({
  selector: 'app-multimediasheroe',
  templateUrl: 'multimediasheroe.page.html'
})
export class MultimediaHeroePage implements OnInit {
  imagenes: any[] = [];
  heroeId: string = '';

  constructor(
    private route: ActivatedRoute,
    private mhService: MultimediaHeroeService
  ) {}

  ngOnInit() {
    this.heroeId = this.route.snapshot.paramMap.get('id') || '';
    this.mhService.getImagenesPorHeroe(this.heroeId).subscribe((data: any[]) => {
      this.imagenes = data;
    });
  }
}