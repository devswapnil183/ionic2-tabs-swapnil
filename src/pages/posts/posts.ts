import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html'
})
export class PostsPage {

posts: any;

  constructor(public navCtrl: NavController, public http: Http) {

    this.http.get('https://jsonplaceholder.typicode.com/posts').map(res => res.json()).subscribe(data => {
        this.posts = data;
    });

  }

}
