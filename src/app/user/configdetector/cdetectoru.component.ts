import { Component , OnChanges,OnInit ,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy} from '@angular/core';
import { LoggerService } from '../../logger.service';
import { DataService } from '../../data.service';
import { RouterModule, Routes ,Router,RouterStateSnapshot,ActivatedRoute} from '@angular/router';


@Component({
  selector: 'cdetectoru-root',
  templateUrl: './cdetectoru.component.html',
  styleUrls: ['./cdetectoru.component.css']
})
export class CDetectorUComponent implements OnChanges,OnInit ,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{

    
    activeDevice:any;
    ad:any;
    onLabel = 'on';
    offLable = 'off';
    deviceType = -1;
    light1state = 0;
    constructor(private logger: LoggerService,private data: DataService, private router:Router,private route:ActivatedRoute) {
      this.activeDevice = this.data.getSelectedDevice();
      this.ad = this.data.getDevicedata();
      this.deviceType = data.getSelectedDeviceType();
      this.data.setFooter(true);
    }

  slideNext() {
    this.light1state = this.light1state + 1;
  }

  slidePrev() {
    this.light1state = this.light1state - 1;
  }
  gotoEnergySettings() {
    this.router.navigate(['energymonitor'],{relativeTo: this.route});
  }

  ngOnChanges() { 
  }
  ngDoCheck() { 
  }
  ngOnInit() {
    
  }
  ngAfterContentInit() { 
  }
  ngAfterContentChecked() { 
  }
  ngAfterViewInit() { 
  }
  ngAfterViewChecked() { 
  }
  ngOnDestroy() {
  }
  deviceNameChanged(nameChanged) {
    this.logger.log('name changed to ' + nameChanged);
  }
  
}