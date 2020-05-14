import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { mainUrl } from 'src/app/services/config';
import { LowonganService } from 'src/app/services/lowongan.service'
@Component({
  selector: 'app-loker-detail',
  templateUrl: './loker-detail.page.html',
  styleUrls: ['./loker-detail.page.scss'],
})
export class LokerDetailPage implements OnInit {
  loker: any = {};
  lokerId = '';
  mhs: any = {};
  mhsId = '';

  constructor(   
    private lowonganService: LowonganService, 
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.getData();
  }

  getData() {
    this.lokerId = this.activatedRoute.snapshot.paramMap.get('prodi');
    this.lowonganService.getLowongan(this.lokerId).subscribe((response) => {
      this.loker = response;
      console.log(this.loker)
    })
  }

  goDaftar(loker) {
    console.log('Teknik Multimedia & Jaringan: ' + loker.id);
    this.router.navigate(['/daftarmagang/' + this.lokerId])
  }
}
