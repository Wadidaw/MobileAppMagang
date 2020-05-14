import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.page.html',
  styleUrls: ['./profile-edit.page.scss'],
})
export class ProfileEditPage implements OnInit {

  profile: any = {};
  profileUsername = '';

  constructor(private activatedRoute: ActivatedRoute,
    private profileService: ProfileService,
    private router: Router,
    private utils: UtilsService) { 
      this.getData(); 
    }

  ngOnInit() {
  }

  getData() {
    this.profileUsername = this.activatedRoute.snapshot.paramMap.get('username');
    this.profileService.getProfileBy(this.profileUsername).subscribe((response) => {
      this.profile = response;
    });
    console.log(this.profileUsername);
  }
  update() {
    this.profileService.updateProfile(
      this.profileUsername, this.profile).subscribe((response) => {
        console.log(response);
        this.utils.showToast('Berhasil dirubah');
        this.router.navigate(['/profile/' + this.profileUsername]);
      }, (err) => {
        console.log(JSON.stringify(err));
        this.utils.showToast('Terjadi kesalahan');
      });
  }
}
