import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-map',
    templateUrl: 'map.html'
})
export class MapPage {

    title: string = 'Map Page';
    // lat = 51.678418;
    // lng = 7.809007;

    points = [{lat: 51.678418, lng : 7.809007},{lat: 52.5200, lng: 13.4050}];

    tab1Root = ChatPage;


    constructor(public navCtrl: NavController) {

    }

}
