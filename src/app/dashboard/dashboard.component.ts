import { Component, OnInit } from '@angular/core';
import { MenuService } from "app/menu.service";
import { LayoutService } from "app/layout.service";
import { DetailService } from "app/detail.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    menuList =  [];
  tiles= [];
  isExpendedMenu = false;
  rows:Array<Object>;
  user:object={};

    constructor(private patientService: DetailService,private menuService: MenuService, private layoutService: LayoutService){

  }
    ngOnInit(){
    this.menuList = this.menuService.getMenus();
    this.tiles = this.layoutService.getMainLayout();
  this.user=JSON.parse(localStorage.getItem('currentUser'));
    console.log('user',this.user);

    if(this.user['role']=='Patient'){
     this.patientService.getPatientDetails().subscribe(result=>{
       this.rows=result;
     });
    }
  else if(this.user['role']=='Doctor'){
     this.patientService.getDoctorDetails().subscribe(result=>{
       this.rows=result;
     });
  }
    console.log('Rows',this.rows);

  }

    onMenuToggle(isExpended){    
    this.isExpendedMenu = isExpended;
  }

  getClassName(){
    return this.isExpendedMenu? 'squeeze': 'normal';
  }

}
