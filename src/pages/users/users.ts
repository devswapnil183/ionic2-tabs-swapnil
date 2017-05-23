import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {

users: any;

  constructor(public navCtrl: NavController, public http: Http) {

    this.http.get('https://jsonplaceholder.typicode.com/users').map(res => res.json()).subscribe(data => {
        this.users = data;
    });

  }

}
