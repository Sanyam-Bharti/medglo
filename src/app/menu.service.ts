import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {

  constructor() { }

  getMenus(){
    //This could be a service call for dynamic menus
    return [
      { id: 0, text: 'Home', name: 'home'}, 
      { id: 1, text: 'Databases', name: 'Database'}, 
      { id: 2, text: 'Group', name: 'group'}, 
      { id: 3, text: 'Hosts',  name: 'host'}, 
      { id: 4, text: 'Forests',  name: 'forest'}, 
      { id: 5, text: 'Clusters',  name: 'clusters'}, 
      { id: 6, text: 'Security',  name: 'security'}, 
    ];
  }

}