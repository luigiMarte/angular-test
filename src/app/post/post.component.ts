import { Component, inject, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface PostStructure {
  name: string;
  number: number;
}

interface Person {
  name: string;
  age: number;
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})


export class PostComponent {
  @Output() messageEvent = new EventEmitter<string>();

  person:Person = {
    name: 'John',
    age:20
  };

  sendMessage() {
    this.messageEvent.emit('Post List title changed!');
  }
  
  childMessage: string = 'From child';
  http = inject(HttpClient);
  
  postsArray: Array<PostStructure>=[
    { name: 'First post', number: 1 },
    { name: 'Second post', number: 2 }
  ]

  postsList!: Array<PostStructure>;
  posts: any[] = [];
  buttonState: boolean = true;


  ngOnInit(){
    this.http.get('https://jsonplaceholder.typicode.com/posts')
    .subscribe((data: any) => { 
      this.posts = this.extractFirstFivePosts(data);
    });
    }

    private extractFirstFivePosts(data: any): any[] {
      if (Array.isArray(data)) {
        return data.slice(0, 5);
      } else {
        console.log('Los datos no son un array.');
        return [];
      }
    }
}
