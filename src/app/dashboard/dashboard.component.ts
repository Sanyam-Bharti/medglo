import { Component, OnInit } from '@angular/core';
import { MenuService } from "app/menu.service";
import { LayoutService } from "app/layout.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    menuList =  [];
  tiles= [];
  isExpendedMenu = false;

    constructor(private menuService: MenuService, private layoutService: LayoutService){

  }
    ngOnInit(){
    this.menuList = this.menuService.getMenus();
    this.tiles = this.layoutService.getMainLayout();

  }

    onMenuToggle(isExpended){    
    this.isExpendedMenu = isExpended;
  }

  getClassName(){
    return this.isExpendedMenu? 'squeeze': 'normal';
  }

}
