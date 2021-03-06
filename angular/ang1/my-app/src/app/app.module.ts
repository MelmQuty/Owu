import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { HttpClientModule } from "@angular/common/http";
import { UserComponent } from './components/user/user.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { CommentsComponent } from './components/comments/comments.component';
import { ResolveService } from './services/resolve.service';


let routes: Routes = [
  { path: 'home', component: HomeComponent },
  {path: 'users', component: UsersComponent,
    children: [
      { path: ':id', component: UserDetailsComponent }]
  },
  {path: 'posts', component: PostsComponent},
  {path: 'posts/:id', component: PostDetailsComponent},

  {path: 'comments', component: CommentsComponent, resolve : {data: ResolveService}},
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    HomeComponent,
    UserDetailsComponent,
    PostDetailsComponent,
    CommentsComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
