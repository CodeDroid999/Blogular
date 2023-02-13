import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { BlogViewComponent } from "./blog-view/blog-view.component";
import { BlogHttpService } from "./blog-http.service";
import { AboutComponent } from './about/about.component';
import { PostBlogComponent } from './post-blog/post-blog.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      { path: "home", component: HomeComponent },
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "about", component: AboutComponent },
      { path: "blog/:blogId", component: BlogViewComponent },
      { path: "create", component: PostBlogComponent },
      { path: "edit/:blogId", component: BlogEditComponent },
      { path: "**", component: NotFoundComponent }
    ])
  ],
  declarations: [AppComponent, HomeComponent, BlogViewComponent, AboutComponent, PostBlogComponent, BlogEditComponent, NotFoundComponent],
  bootstrap: [AppComponent],
  providers: [BlogHttpService]
})
export class AppModule {}
