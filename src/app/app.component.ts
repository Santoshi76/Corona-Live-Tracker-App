import { Component, VERSION, OnInit } from "@angular/core";
import { TrackerServiceService } from "./tracker-service.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
 // name = "Angular " + VERSION.major;
 result: any = "Countries";
 total:number;
 total_infect:any;
 total_recover:any;
 total_active_cases:any;
 total_deaths_worldwide;
 total_death_per:any;
 countryArray:any;
 countryData:any;
 countryTrendData:any;
 countryTimelineArray:any;
 timeline:any;
 selectedIndex :number=0;
 perDeath:number;
 WorldVal :any;
  constructor(private myservice: TrackerServiceService) {}
  ngOnInit() {
      this.myservice.getCountryList().subscribe(res => {
      console.log(res);
      this.result = res;
      this.countryArray = this.result.countryitems;
      console.log(this.countryArray[0]);
      this.total_infect = 0;
    this.total_recover= 0;
    this.total_active_cases = 0;
    this.total_deaths_worldwide=0;
    this.total_death_per=0;
    for (var i = 1; i < Object.keys(this.countryArray[0]).length; i++) {
        this.total_infect+= this.countryArray[0][i].total_cases;
        this.total_recover+= this.countryArray[0][i].total_recovered;
        this.total_active_cases+= this.countryArray[0][i].total_active_cases;
        this.total_deaths_worldwide+= this.countryArray[0][i].total_deaths;
    }
    this.total_death_per = (this.total_deaths_worldwide/this.total_infect)*100;
     });
     
    
  }

/*sort_by_key(array, key)
{
  return [].slice.call(array).sort(function(a, b)
 {
  var x = new Date(a[key]); var y = new Date(b[key]);
  console.log(x);
  return ((x < y) ? -1 : ((x > y) ? 1 : 0));
 });
}*/

  getDataByCountry(country,i){
        this.selectedIndex =i;
        this.myservice.getDataByCountry(country).subscribe(res => {
          console.log(res);
        this.countryData = res;
      
        this.myservice.getCountryTrend(country).subscribe(res =>{
          console.log(res);
          this.countryTrendData=res;
          this.countryTimelineArray = this.countryTrendData.timelineitems[0];
          console.log(this.countryTimelineArray);

          
          
          var totalcase=+this.countryData.countrydata[0].total_cases;
          var totaldeath=+this.countryData.countrydata[0].total_deaths;
          this.perDeath=(totaldeath/totalcase)*100;
        // this.countryTimelineArray=this.sort_by_key(this.countryTimelineArray,Object.keys(this.countryTimelineArray));
         /* this.countryTimelineArray.sort(function(a,b){ 
                var x = a.key(); var y = b.key();
                return (x<y?-1:1);
            });*/

        })
    });
  }
}
