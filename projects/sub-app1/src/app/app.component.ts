import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sub-app1';
}

// import { Component } from '@angular/core';
// import { Store } from 'redux';
// import { Provider } from 'react-redux';
// import { store } from "subapp1/store";

// @Component({
//   selector: 'app-root',
//   template: `
//     <provider [store]="store">
//       <h1>Root Application</h1>
//       <router-outlet></router-outlet>
//     </provider>
//   `,
// })
// export class AppComponent {
//   public store: any;
//   constructor() {
//     this.store = store;
//   }
// }


