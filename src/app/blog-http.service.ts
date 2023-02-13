import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class BlogHttpService {
  private baseUrl = "https://blogapp.edwisor.com/api/v1/blogs";

  constructor(private http: HttpClient) {}

  apiKey =
    "ZjM3ZTU2ZDExOWNjOGQzZDU4OTRlY2ViOTMzZTA0NDA3YzNjMzJjODFjNTljZTNjODNiNjFmMGY4MjY5NzU0ZjU1MzA1Y2YxMjhlMDljMDc3NGQ5YjllODlkZDJkNzU2N2FhMmRlMDUwMTU3YzAzOTJmNTcyYzMwZjNhNjk4ZDgzYQ==";

  getAllBlogs() {
    return this.http.get(this.baseUrl + "/all?authToken=" + this.apiKey);
  }

  getSingleBlog(blogId): any {
    let myResponse = this.http.get(
      this.baseUrl + "/view" + "/" + blogId + "?authToken=" + this.apiKey
    );
    return myResponse;
  }

  deleteBlog(blogId): any {
    let data = {};
    let myResponse = this.http.post(
      this.baseUrl + "/" + blogId + "/delete" + "?authToken=" + this.apiKey,
      data
    );
    return myResponse;
  }

    editBlog(blogId,blogData): any {
    let myResponse = this.http.put(this.baseUrl + '/' + blogId + '/edit' + '?authToken=' + this.apiKey, blogData)
    return myResponse;
  }

    createBlog(blogData): any {
    let myResponse = this.http.post(this.baseUrl + '/create' + '?authToken=' + this.apiKey, blogData)
    return myResponse;
  } 
}
