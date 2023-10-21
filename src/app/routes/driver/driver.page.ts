import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TabnavComponent } from '../../components/tabnav/tabnav.component';
import { UserModel } from '../login/model/user.model';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.page.html',
  styleUrls: ['./driver.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, TabnavComponent],
})
export class DriverPage implements OnInit {
  public userInfo: UserModel = {} as UserModel;

  constructor(private readonly router: Router) {}

  ngOnInit() {
  }
}