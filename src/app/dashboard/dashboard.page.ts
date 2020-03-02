import { Component, OnInit } from '@angular/core';
import { restaurants } from './restaurants_data'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

	restaurantsData:any = restaurants.restaurants;
	 searchTerm: string ;

	 customActionSheetOptions: any = {
    		header: 'Sort By',
    
  };


  constructor() { 
  	console.log("restaurantsData", this.restaurantsData)

  }

  ngOnInit() {
  }

   filterRestoItems($event){
  	 // Reset patientNames back to all of the patientNames
    this._resetRestoList();
    // set val to the value of the ev target
    var val = $event.target.value;
    // if the value is an empty string don't filter the patientNames
    if (val && val.trim() != '') {
       console.log("val", val)
        this.restaurantsData = this.restaurantsData.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } 
}

 _resetRestoList(){
 	this.restaurantsData = this.restaurantsData
 }

 _sortRestoItems($sortType) {
 	console.log("$sortType", $sortType.detail.value)
 	const stType = $sortType.detail.value;
 	this.restaurantsData =  this.restaurantsData.sort(function (a, b) {

              if (a.distance < b.distance && stType == 'dt') { console.log("a.name", a.distance) 
              	return -1; }
              if (a.name < b.name && stType == 'nm') { return -1; }
              return 0;
});
 	console.log("this.restaurantsDatathis.restaurantsData", this.restaurantsData)
 }
 


}
