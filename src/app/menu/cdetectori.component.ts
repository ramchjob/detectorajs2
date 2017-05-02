import { Component , Injectable, trigger, state, animate, transition, style,OnChanges,OnInit ,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy ,NgZone} from '@angular/core';
import {LoggerService} from '../logger.service';
import { DataService } from '../data.service';
import { RouterModule, Routes ,Router,RouterStateSnapshot} from '@angular/router';
import { SubMenuItem} from '../data.service';
@Component({
  selector: 'cdetectori-root',
  templateUrl: './cdetectori.component.html',
  styleUrls: ['./submenu.component.css'],
  animations: [
      trigger('subMenuSlideIn', [
        state('*', style({
            transform: 'translateX(+100%)',
        })),
        state('rightin', style({
            transform: 'translateX(0)',
        })),
        state('rightout',   style({
            transform: 'translateX(+100%)',
        })),
        transition('* => rightin', animate('700ms ease-in')),
        transition('rightin => rightout', animate('700ms ease-in'))
        ])
    ]
})

export class CDetectorIComponent implements OnChanges,OnInit ,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{

    subMenuState = 'none';
    activeDevice:any;
    ad:any;
    constructor(private logger: LoggerService,private data: DataService,private router:Router,private zone:NgZone) {
        this.subMenuState = 'none';
    }

    animationStarted($event) {
        this.data.setMainTitle(this.activeDevice.btDeviceName);
    }

    animationDone($event) {
    }

    ngOnChanges() { 
    }

    ngDoCheck() { 
    }
    ngAfterContentInit() { 
    }
    ngAfterContentChecked() { 
    }
    ngAfterViewInit() { 
    }
    ngAfterViewChecked() { 
    }
    ngOnInit() { 
        this.activeDevice = this.data.getSelectedDevice(true);
        this.ad = this.data.getDevicedata(true);
        if (this.subMenuState == 'none') {
            setTimeout(() => this.subMenuState = "rightin")
        }
        this.data.setMainTitle(this.activeDevice.btDeviceName);
        this.data.setActiveComponent(this);
    }
    ngOnDestroy() {
    }
    gotoInstalledParams(item,itemtitle) {
        this.data.setIParam(item,itemtitle);
        this.data.setShowCDI(this.data.getShowCDI() + 1);
    }

    onBLEdata() {
        
    this.zone.run( () => { // Change the property within the zone, CD will run after
        this.ad.energyMonitorConnectedLoad = this.ad.energyMonitorConnectedLoad;
        this.data.setEDevParamsState(0);
      });
    }

}
