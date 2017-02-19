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

    .menu--icon {
      background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgdmlld0JveD0iNzEuOTA4Mzk2OTQ2NTY0ODYgNDcuNDgwOTE2MDMwNTM0MzI0IDI1Ny4yNTE5MDgzOTY5NDY3NiAyNjAuODM5Njk0NjU2NDg4NSIgd2lkdGg9IjI1Ny4yNSIgaGVpZ2h0PSIyNjAuODQiPjxkZWZzPjxwYXRoIGQ9Ik03MS45MSA0Ny40OEwzMjkuMTYgNDcuNDhMMzI5LjE2IDgwLjU4TDcxLjkxIDgwLjU4TDcxLjkxIDQ3LjQ4WiIgaWQ9ImIxNTZLcnY2aWgiPjwvcGF0aD48cGF0aCBkPSJNNzEuOTEgMTU0LjczTDMyOS4xNiAxNTQuNzNMMzI5LjE2IDE4Ny44M0w3MS45MSAxODcuODNMNzEuOTEgMTU0LjczWiIgaWQ9ImIzVnpydTJyb3EiPjwvcGF0aD48cGF0aCBkPSJNNzEuOTEgMjc1LjIyTDMyOS4xNiAyNzUuMjJMMzI5LjE2IDMwOC4zMkw3MS45MSAzMDguMzJMNzEuOTEgMjc1LjIyWiIgaWQ9ImJtVXRwRkNMaSI+PC9wYXRoPjwvZGVmcz48ZyB2aXNpYmlsaXR5PSJpbmhlcml0Ij48ZyB2aXNpYmlsaXR5PSJpbmhlcml0Ij48ZyB2aXNpYmlsaXR5PSJpbmhlcml0Ij48dXNlIHhsaW5rOmhyZWY9IiNiMTU2S3J2NmloIiBvcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjAuNyI+PC91c2U+PC9nPjxnIHZpc2liaWxpdHk9ImluaGVyaXQiPjx1c2UgeGxpbms6aHJlZj0iI2IzVnpydTJyb3EiIG9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC43Ij48L3VzZT48L2c+PGcgdmlzaWJpbGl0eT0iaW5oZXJpdCI+PHVzZSB4bGluazpocmVmPSIjYm1VdHBGQ0xpIiBvcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjAuNyI+PC91c2U+PC9nPjwvZz48L2c+PC9zdmc+);
      background-size: 20px;
      background-repeat: no-repeat;
      height: 20px;
      width: 20px;
    }

    .menu--icon:hover {
      cursor: pointer;
    }

    .search {
      padding-bottom: 4px;
      border-bottom: 1px solid #EECF6D;
      display: flex;
      flex-direction: row;
    }

    .search .search--icon {
      background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgdmlld0JveD0iMCAwIDY0MCA2NDAiIHdpZHRoPSI2NDAiIGhlaWdodD0iNjQwIj48ZGVmcz48cGF0aCBkPSJNMzcwLjQzIDIxN0MzNzAuNDMgMjc5LjU2IDMxMy40NSAzMzAuMzQgMjQzLjI3IDMzMC4zNEMxNzMuMDkgMzMwLjM0IDExNi4xMSAyNzkuNTYgMTE2LjExIDIxN0MxMTYuMTEgMTU0LjQ1IDE3My4wOSAxMDMuNjYgMjQzLjI3IDEwMy42NkMzMTMuNDUgMTAzLjY2IDM3MC40MyAxNTQuNDUgMzcwLjQzIDIxN1oiIGlkPSJjaFB5U0VjUUUiPjwvcGF0aD48cGF0aCBkPSJNNDU1LjkyIDQyMEwzMzEuOTQgMjk4LjE2IiBpZD0iZ3VSdFU0cEFSIj48L3BhdGg+PC9kZWZzPjxnIHZpc2liaWxpdHk9ImluaGVyaXQiPjxnIHZpc2liaWxpdHk9ImluaGVyaXQiPjxnIHZpc2liaWxpdHk9ImluaGVyaXQiPjxnIHZpc2liaWxpdHk9ImluaGVyaXQiPjx1c2UgeGxpbms6aHJlZj0iI2NoUHlTRWNRRSIgb3BhY2l0eT0iMSIgZmlsbD0iI2FkMGYwZiIgZmlsbC1vcGFjaXR5PSIwIj48L3VzZT48Zz48dXNlIHhsaW5rOmhyZWY9IiNjaFB5U0VjUUUiIG9wYWNpdHk9IjEiIGZpbGwtb3BhY2l0eT0iMCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjEwIiBzdHJva2Utb3BhY2l0eT0iMSI+PC91c2U+PC9nPjwvZz48ZyB2aXNpYmlsaXR5PSJpbmhlcml0Ij48Zz48dXNlIHhsaW5rOmhyZWY9IiNndVJ0VTRwQVIiIG9wYWNpdHk9IjEiIGZpbGwtb3BhY2l0eT0iMCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjEwIiBzdHJva2Utb3BhY2l0eT0iMSI+PC91c2U+PC9nPjwvZz48L2c+PC9nPjwvZz48L3N2Zz4=);
      background-size: 30px;
      background-repeat: no-repeat;
      height: 30px;
      width: 30px;
    }

    .search .search--text {
      margin-right: 5px;
    }

  `],
  template: `
      <div class="navbar">
        <div class="menu--icon"></div>
        <div class="search">
          <div class="search--icon"></div>
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
