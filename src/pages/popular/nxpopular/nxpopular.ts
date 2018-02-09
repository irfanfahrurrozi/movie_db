import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ServiceProvider } from '../../../providers/service/service';



@IonicPage()
@Component({
  selector: 'page-nxpopular',
  templateUrl: 'nxpopular.html',
})
export class NxpopularPage {

  public id: any;
  public movie: any;

  constructor(
    public navCtrl: NavController, 
    public service: ServiceProvider,
    public navParams: NavParams) {

      this.id = navParams.data; 
      console.log('detail page, : ', navParams.data);
      
  }

 
  ionViewDidLoad(){
    this.service.getMoDetails(this.id.id).subscribe(
      nxpopular => {
        this.movie = nxpopular;
        console.log(this.movie)
      },(e)=>{
        console.log(e)
      }
    )
  }


}
