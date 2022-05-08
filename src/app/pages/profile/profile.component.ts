import {Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { user } from '@angular/fire/auth';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input() loggedInUser?: firebase.default.User | null;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
