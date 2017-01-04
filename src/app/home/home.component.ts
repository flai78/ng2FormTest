import { Component, OnInit } from '@angular/core';
import { MyModel } from '../models/mymodel.model';
import { Culture } from '../models/culture.model';
import { HttpClient } from '../services/http-client.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
 export class HomeComponent implements OnInit {
 
  private url = "https://apimobile.vueling.com/Vueling.Mobile.BookingServices.WebAPI/api/v3/Price/DoAirPriceSB";
  private urlCulture = "http://localhost:52775/api/Culture";

 constructor(private client : HttpClient){

 }

   ngOnInit() { 

     this.client.get<Array<Culture>>(this.urlCulture)
                .subscribe(data =>  
                {
                 
                  this.cultureList = data;
                 
                },
                error => console.log('error: ', error));

        
   }

  public cultureList : Array<Culture>;
  
  model = new MyModel('','',true,'val1', new Culture(4,'es-ES'));

  private getRq(){
    return {"CurrencyCode":"EUR","DiscountType":0,"DeviceType":"WEB","Language":"es-ES","AppVersion":"100","AirportDateTimeList":[{"DepartureStation":"BCN","ArrivalStation":"MAD","MarketDateDeparture":"2017-01-06T22:08:51.000Z"}],"Paxs":[{"Quantity":1,"PaxType":"ADT"},{"Quantity":0,"PaxType":"CHD"},{"Quantity":0,"PaxType":"INF"}]};
  }

  submitForm(from : NgForm){

      console.log("model:", this.model.selectedCultureItem);
  }

  
}
