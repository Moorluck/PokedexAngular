import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() nextPageEvent = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

  sendNextPageEvent() {
    this.nextPageEvent.emit("+")
  }

  sendPreviousPageEvent() {
    this.nextPageEvent.emit("-")
  }

}
