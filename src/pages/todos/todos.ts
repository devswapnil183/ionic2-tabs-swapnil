import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
@Component({
  selector: 'page-todos',
  templateUrl: 'todos.html'
})
export class TodosPage {

todos: any;

  constructor(public navCtrl: NavController, public http: Http) {

    this.http.get('https://jsonplaceholder.typicode.com/todos').map(res => res.json()).subscribe(data => {
        this.todos = data;
    });

  }

}
