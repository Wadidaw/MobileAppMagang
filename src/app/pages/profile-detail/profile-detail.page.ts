import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { mainUrl } from 'src/app/services/config';
@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.page.html',
  styleUrls: ['./profile-detail.page.scss'],
})
export class ProfileDetailPage implements OnInit {

  profile: any = {};
  profileUsername = '';

  constructor(private activatedRoute: ActivatedRoute,
    private profileService: ProfileService,
    private router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getData();
  }

  getData() {
    this.profileUsername = this.activatedRoute.snapshot.paramMap.get('username');
    this.profileService.getProfileBy(this.profileUsername).subscribe((response) => {
      this.profile = response;
      console.log(this.profile)
    })
  }
  goEdit() {
    this.router.navigate(['/profile-edit/' + this.profileUsername])
  }
}
