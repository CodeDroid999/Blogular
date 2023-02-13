import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { BlogHttpService } from "../blog-http.service";
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css'],
  providers: [Location]
})
export class BlogEditComponent implements OnInit {

  public currentBlog;
  public possibleCategories = ["Comedy", "Drama", "Action", "Technology"];

  constructor(private router: Router, private route: ActivatedRoute, private blogHttpService: BlogHttpService, private location: Location,  private toastr: ToastrService) { }

  ngOnInit() {
    let myBlogId = this.route.snapshot.paramMap.get('blogId');

    this.blogHttpService.getSingleBlog(myBlogId).subscribe(

      data => {
        console.log(data);
        this.currentBlog = data["data"];
        console.log("current blog is");
        console.log(this.currentBlog);

      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage)
      }


    )
  }

  editThisBlog(): any {

    this.blogHttpService.editBlog(this.currentBlog.blogId,this.currentBlog).subscribe(

      data => {
        console.log(data);
        this.toastr.success('Blog edited successfully', 'Success!');
        setTimeout(() => {
          this.router.navigate(['/blog',this.currentBlog.blogId]);
        }, 1000)

      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
        this.toastr.error('Some error occured', 'Error');
      }


    )
  }

  goBackToPreviousPage(): any {

    this.location.back();

  }

}