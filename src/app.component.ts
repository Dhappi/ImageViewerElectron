import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name',
  styles: [`
    div {
      font-size: 20px;
    }
    .navbar {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .search {
      padding-bottom: 4px;
      border-bottom: 1px solid #EECF6D;
      display: flex;
      flex-direction: row;
    }

    .search .search--icon {
      padding-right: 8px;
    }

  `],
  template: `
      <div class="navbar">
        <div class="menu--icon">IMAGE VIEWER ELECTRON</div>
        <div class="search">
          <div class="search--icon">d</div>
          <div class="search--text">Search</div>
        </div>
      </div>
      `,
})
export class AppComponent implements OnInit {
  constructor() {  }

  ngOnInit() {
		console.log("THIS IS THE APP COMPONENT");
	}
}
