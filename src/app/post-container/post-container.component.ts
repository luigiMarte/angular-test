import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'posts-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.scss']
})
export class PostContainerComponent  {
  title: string="Post List"

  receiveMessage($event: string) {
    this.title = $event;
  }
  

  //@ViewChild(PostComponent) PostComponent;

  // ngAfterViewInit() {
  //   const childParagraph = this.PostComponent.childMessage;
  //   console.log(childParagraph); 
  // }

  
}
