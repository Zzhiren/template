// import { observable, action, autorun } from 'mobx'
import App from './modules/app'

class Store implements Store.Store {
  public App: App.App;
  constructor() {
    this.App = new App();
  }
}

export const store = new Store()
