import {Component} from '@angular/core';
import { MyModel } from '../models/mymodel.model';
import { HttpClient } from '../services/http-client.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
 export class HomeComponent {
 
private url = "https://apimobile.vueling.com/Vueling.Mobile.BookingServices.WebAPI/api/v3/Price/DoAirPriceSB";

 constructor(private client : HttpClient){

 }

  mySelectList = ['val1','val2','val3'];
  model = new MyModel('','',true,'val1','');

  private getRq(){
    return {"CurrencyCode":"EUR","DiscountType":0,"DeviceType":"WEB","Language":"es-ES","AppVersion":"100","AirportDateTimeList":[{"DepartureStation":"BCN","ArrivalStation":"MAD","MarketDateDeparture":"2017-01-06T22:08:51.000Z"}],"Paxs":[{"Quantity":1,"PaxType":"ADT"},{"Quantity":0,"PaxType":"CHD"},{"Quantity":0,"PaxType":"INF"}]};
  }

  submitForm(from : NgForm){
    this.client.post(this.url ,this.getRq())
      .subscribe(
        data => {console.log('success: ', data ); },
        error => console.log('error: ', error)
      );  
  }
}
