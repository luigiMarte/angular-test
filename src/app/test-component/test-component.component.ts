import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss']
})
export class TestComponentComponent implements OnInit {

  title: string = "Test Component Title";
  messageFromChild: string = "This is the message from child";
  
  @Input () value: string;

  constructor(){
    this.value = 'sin nombre'; 
  }



  ngOnInit(): void {
    
  }
}
