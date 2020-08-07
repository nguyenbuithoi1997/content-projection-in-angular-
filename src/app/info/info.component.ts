import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  @Input() name : string = 'Rỗng';
  @Input() address : string = 'Chưa có chỗ ở';
  // @Input() personNumber: number = 0
  @Input() isAge: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}