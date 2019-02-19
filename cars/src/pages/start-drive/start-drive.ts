import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,ModalController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { SignaturePage } from '../signature/signature';
/**
 * Generated class for the StartDrivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-start-drive',
  templateUrl: 'start-drive.html',
})
export class StartDrivePage {
	public signatureImage : any;
@ViewChild("otp") otp;
  constructor(public navCtrl: NavController, public navParams: NavParams,public loading: LoadingController,public alertCtrl: AlertController,  public modalController:ModalController) {
	  this.signatureImage = navParams.get('signatureImage');
  }
validate()
{
	if(this.otp.value =="1234")
	{
		let alert = this.alertCtrl.create({

title:"ATTENTION",

subTitle:"Success",

buttons: ['OK']

});
this.openSignatureModel();
alert.present();
	}
	else
	{
		let alert = this.alertCtrl.create({

title:"ATTENTION",

subTitle:"OTP Wrong",

buttons: ['OK']

});

alert.present();
	}	
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad StartDrivePage');
  }
  
  openSignatureModel(){
    setTimeout(() => {
       let modal = this.modalController.create(SignaturePage);
    modal.present();
    }, 300);

  }

}
