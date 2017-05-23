import { Component } from '@angular/core';

import { TodosPage } from '../todos/todos';
import { PostsPage } from '../posts/posts';
import { UsersPage } from '../users/users';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = UsersPage;
  tab2Root = PostsPage;
  tab3Root = TodosPage;
  
  constructor() {

  }
}
