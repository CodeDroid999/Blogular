import { Component, OnInit } from "@angular/core";
import { BlogHttpService } from "../blog-http.service";
import { ToastrService } from 'ngx-toastr';
import { Router } from "@angular/router";

@Component({
  selector: "app-post-blog",
  templateUrl: "./post-blog.component.html",
  styleUrls: ["./post-blog.component.css"]
})
export class PostBlogComponent implements OnInit {
  public possibleCategories = ["Comedy", "Drama", "Action", "Technology"];
  public blogTitle: string;
  public blogBodyHtml: string;
  public blogDescription: string;
  public blogCategory: string;

  constructor(private blogHttpService: BlogHttpService, private toastr: ToastrService, private router: Router) {}

  ngOnInit() {}

  createBlog(): any {
    let blogData = {
      title: this.blogTitle,
      description: this.blogDescription,
      blogBody: this.blogBodyHtml,
      category: this.blogCategory
    }; // end blog data

    console.log(blogData);

    this.blogHttpService.createBlog(blogData).subscribe(
      data => {
        console.log("Blog Created");
        console.log(data);
        this.toastr.success("Blog Posted successfully", "Success!");
        setTimeout(() => {
          this.router.navigate(["/blog", data.data.blogId]);
        }, 1000);
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
        this.toastr.error("Some error occured", "Error");
      }
    );
  }
}
