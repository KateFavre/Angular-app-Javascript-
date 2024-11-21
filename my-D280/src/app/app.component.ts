import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountryLookupService } from './country-lookup.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

//one method within the component that will trigger the service method when a country is selected and 
//set a local variable that will receive the information about the country for display in the appropriate 
//column of the HTML page

export class AppComponent {
  
  CountryCode = '' // id to use as parameter for my getCountryData method
  selectedCountryInfo: any;


  constructor(private countryService: CountryLookupService) {} //constructing an instance of our service 


  handleMouseOver(event:MouseEvent): void {
    const target = event.target as SVGElement; 
    this.CountryCode = target.id //setting CountryCode = the id of the path thats moused over
    this.getCountryDetails(this.CountryCode)
  }

  getCountryDetails(CountryId:String){
    this.countryService.getCountryData(CountryId).subscribe(data => {
       //sendig info to my html file w *ngFor
      this.selectedCountryInfo = data[1][0]
      console.log(this.selectedCountryInfo)
    });
  }
  ngOnInit() {  
  }
}
