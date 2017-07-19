import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {

  constructor() { }

  getMenus(){
    //This could be a service call for dynamic menus
    return [
      { id: 0, text: 'My Dashboard', name: 'My Dashboard',  url:'/dashboard'}, 
      { id: 1, text: 'My Upcoming Tests', name: 'My Upcoming Tests',  url:'/dashboard'}, 
      { id: 2, text: 'New Reports', name: 'New Reports',  url:'/dashboard'}, 
      { id: 3, text: 'Authorized Reports',  name: 'Authorized Reports',  url:'/dashboard'}, 
      { id: 4, text: 'Doctor Consultation',  name: 'Doctor Consultation',  url:'/dashboard'}, 
    ];
  }

}