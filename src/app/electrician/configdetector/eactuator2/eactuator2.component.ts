import { Component , OnChanges,OnInit ,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy} from '@angular/core';
import { LoggerService } from '../../../logger.service';
import { DataService } from '../../../data.service';
import { RouterModule, Routes ,Router,RouterStateSnapshot} from '@angular/router';
import {SCCP_DATATYPES} from'../../../data.service';
import {SCCP_ATTRIBUTES} from'../../../data.service';

@Component({
  selector: 'eactuator2-root',
  templateUrl: './eactuator2.component.html',
  styleUrls: ['../cdetectore.component.css']
})
export class EActuator2Component implements OnChanges,OnInit ,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{

  activeDevice:any;
  ad:any;
  onLabel = 'on';
  offLabel = 'off';
  loadingDataDone = false;
   readAttrs =[ SCCP_ATTRIBUTES.PRESENCE_SIMULATION_ENABLE,                               
                SCCP_ATTRIBUTES.PRESENCE_SIMULATION_START_TIME,                           
                SCCP_ATTRIBUTES.PRESENCE_SIMULATION_END_TIME,                             
                SCCP_ATTRIBUTES.PRESENCE_SIMULATION_ASTRO_FUNCTION_ENABLE,                
                SCCP_ATTRIBUTES.CH2_CIRCUIT_LOGIC,                                        
                SCCP_ATTRIBUTES.CH2_MODE,                                                 
                SCCP_ATTRIBUTES.HVAC_DYNAMICAL_CONTROL_ENABLE,                            
                SCCP_ATTRIBUTES.HVAC_SWITCH_ON_DELAY,                                     
                SCCP_ATTRIBUTES.HVAC_SWITCH_ON_DELAY_MIN,                                 
                SCCP_ATTRIBUTES.HVAC_SWITCH_ON_DELAY_MAX,                                 
                SCCP_ATTRIBUTES.HVAC_SWITCH_OFF_DELAY,                                    
                SCCP_ATTRIBUTES.HVAC_SWITCH_OFF_DELAY_MIN,                                
                SCCP_ATTRIBUTES.HVAC_SWITCH_OFF_DELAY_MAX,                                
                ]

  constructor(private logger: LoggerService,private data: DataService, private router:Router) {
      this.activeDevice = this.data.getSelectedDevice(false);
      this.ad = this.data.getDevicedata(false);
      this.data.setActiveComponent(this);
      this.data.readData(this.readAttrs);
  }
  ngOnChanges() { 
  }
  ngDoCheck() { 
  }
  ngOnInit() {
      this.data.setMainTitle('Settings of actuator2');
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
  reduceCount(item,isClick){
    if(item == 'sondelay') {
      this.ad.hvacSwitchOnDelay = this.ad.hvacSwitchOnDelay -1;
      if(isClick)
      this.data.addToSendData([SCCP_ATTRIBUTES.HVAC_SWITCH_ON_DELAY,SCCP_DATATYPES.SCCP_TYPE_UINT16,this.ad.hvacSwitchOnDelay])
    }else if(item == 'soffdelay') {
      this.ad.hvacSwitchOffDelay = this.ad.hvacSwitchOffDelay -1;
      if(isClick)
      this.data.addToSendData([SCCP_ATTRIBUTES.HVAC_SWITCH_OFF_DELAY,SCCP_DATATYPES.SCCP_TYPE_UINT16,this.ad.hvacSwitchOffDelay])
    }

  }

  increaseCount(item,isClick) {
 if(item == 'sondelay') {
      this.ad.hvacSwitchOnDelay = this.ad.hvacSwitchOnDelay + 1;
      if(isClick)
      this.data.addToSendData([SCCP_ATTRIBUTES.HVAC_SWITCH_ON_DELAY,SCCP_DATATYPES.SCCP_TYPE_UINT16,this.ad.hvacSwitchOnDelay])
    }else if(item == 'soffdelay') {
      this.ad.hvacSwitchOffDelay = this.ad.hvacSwitchOffDelay + 1;
      if(isClick)
      this.data.addToSendData([SCCP_ATTRIBUTES.HVAC_SWITCH_OFF_DELAY,SCCP_DATATYPES.SCCP_TYPE_UINT16,this.ad.hvacSwitchOffDelay])
    }
  }
  onBLEdata() {
    
  }
  circuitModeChange() {
    this.data.addToSendData([SCCP_ATTRIBUTES.CH2_CIRCUIT_LOGIC,SCCP_DATATYPES.SCCP_TYPE_ENUM8,this.ad.ch2CircuitLogic])
  }
  ch2ModeChange(){
    this.data.addToSendData([SCCP_ATTRIBUTES.CH2_MODE,SCCP_DATATYPES.SCCP_TYPE_ENUM8,this.ad.ch2Mode])
  }
  togglehvacDC(){
    this.ad.hvacDynamicalControlEnable = !this.ad.hvacDynamicalControlEnable
    this.data.addToSendData([SCCP_ATTRIBUTES.HVAC_DYNAMICAL_CONTROL_ENABLE,SCCP_DATATYPES.SCCP_TYPE_BOOL,this.ad.hvacDynamicalControlEnable?1:0])
  }

  setLoadingDataDone(value){
    this.loadingDataDone = value;
  }
}
