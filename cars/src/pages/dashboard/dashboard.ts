import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http, Headers, RequestOptions}  from '@angular/http';
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { StartDrivePage } from '../start-drive/start-drive';
/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
	username:string;
	items:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: Http,public loading: LoadingController)
  {
	
  }
    ngOnInit(){  
	this.username=this.navParams.get('userval');
	 //console.log('ionViewDidLoad DashboardPage --->'+this.username);
	var headers = new Headers();
	headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('content-type','application/json');
let options = new RequestOptions({ headers: headers });
let data = {
	username: this.username
};
let loader = this.loading.create({
content: 'Processing please wait…',
});
loader.present().then(() => {
this.http.post('http://www.unziptechnologies.com/scripts/fetchbooking.php',data,options)
 .map(res => res.json())
    .subscribe(res => {
     loader.dismiss()
    this.items=res.server_response;
    });
});
  }
 validateDrive()
 {
	 this.navCtrl.push(StartDrivePage);

}
}