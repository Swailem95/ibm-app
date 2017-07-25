import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-map',
    templateUrl: 'map.html'
})
export class MapPage {

    title: string = 'Map Page';

    points = [{lat: 51.678418, lng : 7.809007},{lat: 52.5200, lng: 13.4050}];


    constructor(public navCtrl: NavController) {

    }

}
