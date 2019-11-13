import { Component, OnInit } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';



@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {



  constructor(private localNotifications: LocalNotifications) { }

  ngOnInit() {
    this.getDate();
  }

  myDate: String = new Date().toLocaleString();

  interval_;

  timeLeft: number = 10;
  interval;



  getDate(){
    this.interval_ = setInterval(() => {
      this.myDate = new Date().toLocaleString();
    }, 1000)
  }



  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        //alert('aaa');
        this.timeLeft = 10;
        this.single_notification();
      }
    }, 1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  single_notification() {
    // Schedule a single notification
    this.localNotifications.schedule({
      id: 1,
      text: 'Single ILocalNotification',
      sound: 'file://sound.mp3',
      data: { secret: 'key_data' }
    });
  
  }
}
