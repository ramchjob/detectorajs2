import { Component , OnChanges,OnInit ,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy} from '@angular/core';
import { LoggerService } from '../../../logger.service';
import { DataService } from '../../../data.service';
import { RouterModule, Routes ,Router,RouterStateSnapshot,ActivatedRoute} from '@angular/router';
import {SCCP_DATATYPES} from'../../../data.service';
import {SCCP_ATTRIBUTES} from'../../../data.service';

@Component({
  selector: 'other-root',
  templateUrl: './otherparams.component.html',
  styleUrls: ['../cdetectore.component.css']
})
export class EOtherParamsComponent implements OnChanges,OnInit ,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{

  activeDevice:any;
  ad:any;
  onLabel = 'on';
  offLabel = 'off';
  showFitterPin = false;
  showUserPin = false;
  A1LoadIdentify = false;
  A2LoadIdentify = false;
  masterQuad = 'q1';
  
      readAttrs =[SCCP_ATTRIBUTES.ENERGY_MONITOR_CONNECTED_LOAD,
                SCCP_ATTRIBUTES.ENERGY_MONITOR_LIGHTING_DURATION,
                SCCP_ATTRIBUTES.TEST_MODE_DEACTIVATE_OUTPUTS_ENABLE,
                SCCP_ATTRIBUTES.CONTACT,
                SCCP_ATTRIBUTES.BUILDING,
                SCCP_ATTRIBUTES.ENABLE_USER_SET_BRIGHTNESS_THRESHOLD,
                SCCP_ATTRIBUTES.ENABLE_USER_SET_SWITCH_OFF_DELAY,
                SCCP_ATTRIBUTES.ENABLE_USER_ENERGY_MONITOR,
                SCCP_ATTRIBUTES.ENABLE_USER_BASIC_BRIGHTNESS,
                SCCP_ATTRIBUTES.ENABLE_USER_NIGHT_LIGHT_FUNCTION,
                SCCP_ATTRIBUTES.CH1_IDENTIFYING_LOAD,
                SCCP_ATTRIBUTES.CH2_IDENTIFYING_LOAD
                ]

  constructor(private logger: LoggerService,private data: DataService, private router:Router,private route: ActivatedRoute) {
      this.activeDevice = this.data.getSelectedDevice(false);
      this.ad = this.data.getDevicedata(false);
      this.data.setFooter(true);
      this.data.setActiveComponent(this);
      this.data.readData(this.readAttrs);
  }
  ngOnChanges() { 
  }
  ngDoCheck() { 
  }
  ngOnInit() {
      this.data.setMainTitle(this.data.getOtherParamTitle());
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
  getOtherParam() {
    return this.data.getOtherParam();
  }
  reduceCount(item) {
    if(item == 'cload') {
      this.ad.service.energy_monitor.connected_load = this.ad.service.energy_monitor.connected_load - 1;
      this.data.addToSendData([SCCP_ATTRIBUTES.ENERGY_MONITOR_CONNECTED_LOAD,SCCP_DATATYPES.SCCP_TYPE_UINT16,this.ad.service.energy_monitor.connected_load])
    }else if(item == 'lduration') {
      this.ad.service.energy_monitor.lighting_duration_per_week = this.ad.service.energy_monitor.lighting_duration_per_week - 1;
      this.data.addToSendData([SCCP_ATTRIBUTES.ENERGY_MONITOR_LIGHTING_DURATION,SCCP_DATATYPES.SCCP_TYPE_UINT16,this.ad.service.energy_monitor.lighting_duration_per_week])
    }else if(item == 'eprice') {
      this.ad.service.energy_monitor.electricity_price = this.ad.service.energy_monitor.electricity_price - 1;
    }

  }
  increaseCount(item) {
    if(item == 'cload') {
      this.ad.service.energy_monitor.connected_load = this.ad.service.energy_monitor.connected_load + 1;
      this.data.addToSendData([SCCP_ATTRIBUTES.ENERGY_MONITOR_CONNECTED_LOAD,SCCP_DATATYPES.SCCP_TYPE_UINT16,this.ad.service.energy_monitor.connected_load])
    }else if(item == 'lduration') {
      this.ad.service.energy_monitor.lighting_duration_per_week = this.ad.service.energy_monitor.lighting_duration_per_week + 1;
      this.data.addToSendData([SCCP_ATTRIBUTES.ENERGY_MONITOR_LIGHTING_DURATION,SCCP_DATATYPES.SCCP_TYPE_UINT16,this.ad.service.energy_monitor.lighting_duration_per_week])
    }else if(item == 'eprice') {
      this.ad.service.energy_monitor.electricity_price = this.ad.service.energy_monitor.electricity_price + 1;
    }
  }
  onBLEdata() {
    
  }
  toggleDP(){
    this.ad.service.testmode.deactivate_outputs_enable = !this.ad.service.testmode.deactivate_outputs_enable;
    this.data.addToSendData([SCCP_ATTRIBUTES.TEST_MODE_DEACTIVATE_OUTPUTS_ENABLE,SCCP_DATATYPES.SCCP_TYPE_BOOL,this.ad.service.testmode.deactivate_outputs_enable])
  }
  CNameChanged() {
    this.data.addToSendData([SCCP_ATTRIBUTES.CONTACT,SCCP_DATATYPES.SCCP_TYPE_STRING,this.activeDevice.contactName])
  }
  BuildingChanged() {
    this.data.addToSendData([SCCP_ATTRIBUTES.BUILDING,SCCP_DATATYPES.SCCP_TYPE_STRING,this.activeDevice.buildingName])
  }
  togglepbr(){
    this.ad.commissioning.user_settings.brightness_threshold = !this.ad.commissioning.user_settings.brightness_threshold
    this.data.addToSendData([SCCP_ATTRIBUTES.ENABLE_USER_SET_BRIGHTNESS_THRESHOLD,SCCP_DATATYPES.SCCP_TYPE_BOOL,this.ad.commissioning.user_settings.brightness_threshold])
  }
  togglessod(){
    this.ad.commissioning.user_settings.switch_off_delay = !this.ad.commissioning.user_settings.switch_off_delay
        this.data.addToSendData([SCCP_ATTRIBUTES.ENABLE_USER_SET_SWITCH_OFF_DELAY,SCCP_DATATYPES.SCCP_TYPE_BOOL,this.ad.commissioning.user_settings.switch_off_delay])
  }
  toggleem(){
    this.ad.commissioning.user_settings.energy_monitor = !this.ad.commissioning.user_settings.energy_monitor
    this.data.addToSendData([SCCP_ATTRIBUTES.ENABLE_USER_ENERGY_MONITOR,SCCP_DATATYPES.SCCP_TYPE_BOOL,this.ad.commissioning.user_settings.energy_monitor])
  }
  togglebi(){
    this.ad.commissioning.user_settings.basic_illumination = !this.ad.commissioning.user_settings.basic_illumination
    this.data.addToSendData([SCCP_ATTRIBUTES.ENABLE_USER_BASIC_BRIGHTNESS,SCCP_DATATYPES.SCCP_TYPE_BOOL,this.ad.commissioning.user_settings.basic_illumination])
  }
  togglenf(){
    this.ad.commissioning.user_settings.anti_glare_function = !this.ad.commissioning.user_settings.anti_glare_function
    this.data.addToSendData([SCCP_ATTRIBUTES.ENABLE_USER_NIGHT_LIGHT_FUNCTION,SCCP_DATATYPES.SCCP_TYPE_BOOL,this.ad.commissioning.user_settings.anti_glare_function])
  }
  togglech1ID(){
    this.ad.service.testmode.ch1_identify_load = this.ad.service.testmode.ch1_identify_load;
    this.data.addToSendData([SCCP_ATTRIBUTES.CH1_IDENTIFYING_LOAD,SCCP_DATATYPES.SCCP_TYPE_BOOL,this.ad.service.testmode.ch1_identify_load ])
  }
  togglech2ID(){
    this.ad.service.testmode.ch2_identify_load = this.ad.service.testmode.ch2_identify_load;
    this.data.addToSendData([SCCP_ATTRIBUTES.CH2_IDENTIFYING_LOAD,SCCP_DATATYPES.SCCP_TYPE_BOOL,this.ad.service.testmode.ch2_identify_load ])
  }
}
