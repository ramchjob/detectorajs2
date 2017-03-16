import { Component ,trigger, state, animate, transition, style, OnChanges,OnInit ,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy,Renderer, ViewChild, ElementRef,NgZone} from '@angular/core';
import { LoggerService } from '../../logger.service';
import { DataService } from '../../data.service';
import { RouterModule, Routes ,Router,RouterStateSnapshot,ActivatedRoute} from '@angular/router';
import {SCCP_DATATYPES} from'../../data.service';
import {SCCP_ATTRIBUTES} from'../../data.service';


declare var readAttr;

@Component({
  selector: 'cdetectore-root',
  templateUrl: './cdetectore.component.html',
  styleUrls: ['./cdetectore.component.css'],
  animations: [
      trigger('slideIn1', [
        state('*', style({
            display: 'none',
        })),
        state('in', style({
            width:'300px',
            display: 'block',
        })),
        state('out',   style({
            display: 'none',
        })),
        transition('* => in', animate('300ms ease-in')),
        transition('in => out', animate('300ms ease-in')),
        ]),
        trigger('slideIn2', [
        state('*', style({
            display: 'none',
        })),
        state('in', style({
            display: 'block',
        })),
        state('out',   style({
            display: 'none',
        })),
        transition('* => in', animate('300ms ease-in')),
        transition('in => out', animate('300ms ease-in')),
        ])
    ]
})
export class CDetectorEComponent implements OnChanges,OnInit ,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
    activeDevice:any;
    ad:any;
    onLabel = 'on';
    offLabel = 'off';
    brthresholderror = false;
    brsetpointerror = false;
    sdelayerror = false;
    aslider = 'none';
    currentBrightness = '450 lx';
    showSlider = false;
    brSubScribed = false;
    readAttrObj:any;
    constructor(private logger: LoggerService,private data: DataService, 
                  private router:Router,private route:ActivatedRoute,
                private renderer:Renderer,private elRef:ElementRef,
                private zone:NgZone) {
      this.activeDevice = this.data.getSelectedDevice(false);
      this.ad = this.data.getDevicedata(false);
      this.data.setFooter(true);
      this.aslider = 'none';
      this.showSlider = false;
      this.data.setActiveComponent(this);
      this.data.setEDevParamsState(0);
    }

  ngOnChanges() { 
  }
  ngDoCheck() { 
  }
  toggleclr() {
    this.ad.sensor_settings.constant_light_regulation = !this.ad.sensor_settings.constant_light_regulation;
    this.data.addToSendData(SCCP_ATTRIBUTES.CONSTANT_LIGHT_CONTROL_ENABLE,[SCCP_DATATYPES.SCCP_TYPE_BOOL,this.ad.sensor_settings.constant_light_regulation?1:0])
    this.data.setEDevParamsState(1);
  }
  togglecsb() {
    this.ad.sensor_settings.consider_slave_brightness = !this.ad.sensor_settings.consider_slave_brightness;
    this.data.addToSendData(SCCP_ATTRIBUTES.CONSIDER_SLAVE_BRIGHTNESS_ENABLE,[SCCP_DATATYPES.SCCP_TYPE_BOOL,this.ad.sensor_settings.consider_slave_brightness?1:0])
    this.data.setEDevParamsState(1);
  }
  togglerrb() {
    this.ad.sensor_settings.reference_brightness = !this.ad.sensor_settings.reference_brightness;
    this.data.addToSendData(SCCP_ATTRIBUTES.CONSTANT_LIGHT_CONTROL_CONSIDER_SLAVE_BRIGHTNESS_ENABLE,[SCCP_DATATYPES.SCCP_TYPE_BOOL,this.ad.sensor_settings.consider_slave_brightness?1:0])
    this.data.setEDevParamsState(1);
  }
  togglemsd() {
    this.ad.commissioning.use_master_in_slave_mode = !this.ad.commissioning.use_master_in_slave_mode;
    this.data.addToSendData(SCCP_ATTRIBUTES.SLAVE_MODE_ENABLE,[SCCP_DATATYPES.SCCP_TYPE_BOOL,this.ad.sensor_settings.consider_slave_brightness?1:0])
    this.data.setEDevParamsState(1);
  }
  togglestp(){
    this.ad.sensor_settings.short_time_pulse= !this.ad.sensor_settings.short_time_pulse;
    this.data.addToSendData(SCCP_ATTRIBUTES.SLAVE_MODE_ENABLE,[SCCP_DATATYPES.SCCP_TYPE_BOOL,this.ad.sensor_settings.short_time_pulse?1:0])
    this.data.setEDevParamsState(1);
  }
  ngOnInit() {
    this.data.setMainTitle('Config detector');
    this.currentBrightness = this.data.getCurrentBrightness();
    this.data.setOtherParam('','');
    this.data.setEDevParamsState(0);
  }
  ngAfterContentInit() { 
  }
  ngAfterContentChecked() { 
  }
  ngAfterViewInit() { 
  }
  ngAfterViewChecked() { 
  }

  showResetDialog() {
    this.data.setDialogTitle("Reset "+ this.activeDevice.btDeviceName);
    this.data.setDialogText("Are you sure to set the " +'"'+this.activeDevice.btDeviceName+'"' +" to factory adjustment?" );
    this.data.setShowModal(true);
  }

  gotoaddParams(){
    this.router.navigate(['addparams'],{relativeTo: this.route});
  }

  potentioMeterChanged() {
    this.data.addToSendData(SCCP_ATTRIBUTES.POTENTIOMETER_MODE,[SCCP_DATATYPES.SCCP_TYPE_ENUM8,this.ad.sensor_settings.potentio_meter_mode])
    this.data.setEDevParamsState(1);
  }
  operationChanged() {
    this.data.addToSendData(SCCP_ATTRIBUTES.OPERATION_MODE,[SCCP_DATATYPES.SCCP_TYPE_ENUM8,this.ad.sensor_settings.potentio_meter_mode])
    this.data.setEDevParamsState(1);
  }
  reduceBrightness(item) {
    this.data.setEDevParamsState(1);
    if(item == 'threshold') {
      this.ad.sensor_settings.brightness_threshold = this.ad.sensor_settings.brightness_threshold - 1;
      this.data.addToSendData(SCCP_ATTRIBUTES.BRIGHTNESS_THRESHOLD,[SCCP_DATATYPES.SCCP_TYPE_UINT16,this.ad.sensor_settings.brightness_threshold])
    }
    else if(item == 'setpoint'){
      this.ad.sensor_settings.brightness_setpoint = this.ad.sensor_settings.brightness_setpoint - 1;
      this.data.addToSendData(SCCP_ATTRIBUTES.CONSTANT_LIGHT_BRIGHTNESS_SET_POINT,[SCCP_DATATYPES.SCCP_TYPE_UINT16,this.ad.sensor_settings.brightness_setpoint])
    }
    else if(item == 'sdelay') {
      this.ad.sensor_settings.switch_off_delay = this.ad.sensor_settings.switch_off_delay - 1;
      this.data.addToSendData(SCCP_ATTRIBUTES.SWITCH_OFF_DELAY,[SCCP_DATATYPES.SCCP_TYPE_UINT16,this.ad.sensor_settings.switch_off_delay])
    }
    this.validatebrparams(item)
  }

  increaseBrightness(item) {
    this.data.setEDevParamsState(1);
    if(item == 'threshold') {
      this.ad.sensor_settings.brightness_threshold = this.ad.sensor_settings.brightness_threshold + 1;
      this.data.addToSendData(SCCP_ATTRIBUTES.BRIGHTNESS_THRESHOLD,[SCCP_DATATYPES.SCCP_TYPE_UINT16,this.ad.sensor_settings.brightness_threshold])
    }
    else if(item == 'setpoint') {
          this.ad.sensor_settings.brightness_setpoint = this.ad.sensor_settings.brightness_setpoint + 1;
          this.data.addToSendData(SCCP_ATTRIBUTES.CONSTANT_LIGHT_BRIGHTNESS_SET_POINT,[SCCP_DATATYPES.SCCP_TYPE_UINT16,this.ad.sensor_settings.brightness_setpoint])
    }
    else if(item == 'sdelay'){
          this.ad.sensor_settings.switch_off_delay = this.ad.sensor_settings.switch_off_delay + 1;
          this.data.addToSendData(SCCP_ATTRIBUTES.SWITCH_OFF_DELAY,[SCCP_DATATYPES.SCCP_TYPE_UINT16,this.ad.sensor_settings.switch_off_delay])
    }
    this.validatebrparams(item) 
    }

  subScribeThreshold() {
    this.brSubScribed = !this.brSubScribed;
    this.readAttrObj = new readAttr([SCCP_ATTRIBUTES.CONSIDER_SLAVE_BRIGHTNESS_ENABLE,
                                      SCCP_ATTRIBUTES.PIR_SENSITIVITY0,
                                      SCCP_ATTRIBUTES.POTENTIOMETER_MODE,
                                      // SCCP_ATTRIBUTES.BRIGHTNESS_THRESHOLD,
                                      // SCCP_ATTRIBUTES.BASIC_BRIGHTNESS_START_TIME,
                                      // SCCP_ATTRIBUTES.FIRMWARE_VERSION,
                                      // SCCP_ATTRIBUTES.BT_DEVICE_NAME
                                      ]);
    //this.configureReportingObj =  new configureReporting([ SCCP_ATTRIBUTES.BRIGHTNESS_THRESHOLD,0x03,0x0A,SCCP_ATTRIBUTES.BRIGHTNESS_THRESHOLD_MIN,0x03,0x0A]);
  }

getMystyle(item) {
    let styleValue;
    if(item == false){
      styleValue = "float: right; \
      font-size: 12px;\
    margin-right: 5px;\
    margin-top: 10px;\
    color: #212e40;\
    padding: 3px;\
    border-radius: 2px;\
    border: 1px solid #212e40;"
    }else {
      styleValue = "float: right; \
      font-size: 12px;\
      margin-right: 5px;\
      margin-top: 10px;\
      color: #ffffff;\
      padding: 3px;\
      border-radius: 2px;\
      background-color: #212e40;\
      border: 1px solid #212e40;"
    }
    let mystyles =  {
      styleValue
    }
    return mystyles;
    
  }
  
  validatebrparams(item) {
    if(item == 'threshold') {
      if(this.ad.sensor_settings.brightness_threshold < 10 || 
      this.ad.sensor_settings.brightness_threshold >2000) {
        this.brthresholderror =  true;
      }else {
        this.brthresholderror =  false;
      }
    }else if(item == 'setpoint') {
      if(this.ad.sensor_settings.brightness_setpoint < 10 || 
      this.ad.sensor_settings.brightness_setpoint >2000) {
        this.brsetpointerror =  true;
      }else {
        this.brsetpointerror =  false;
      }
    }else  if(item == 'sdelay') {
      if(this.ad.sensor_settings.switch_off_delay < 10 && this.ad.sensor_settings.switch_off_delay > 1800) {
        this.sdelayerror = true;
      }else {
        this.sdelayerror = false;
      }
    }
  }
  slideBrightnessIn() {
    this.aslider = 'in';
  }
  slideBrightnessOut() {
    this.aslider = 'out';
  }
  setActuatorBrightness() {
  }
slideBackground (value) {
  this.data.addToSendData(SCCP_ATTRIBUTES.CH1_CURRENT_LEVEL,[SCCP_DATATYPES.SCCP_TYPE_UINT8,this.ad.sensor_settings.brightness_threshold])
  let stringval = value.toString();
  let stylestr = "linear-gradient(to right,#2c435c " + stringval + "%, transparent 0%";
  let mystyles =  {
     'background': stylestr
  }
  return mystyles;
  }
  animationStarted($event) {
     if($event.toState == "in") {
        this.showSlider = true;
    } else if($event.toState == "in") {
      
    }
  }
  animationDone($event) {
    if($event.toState == "out") {
        this.showSlider = false;
    }
  }

  ngOnDestroy() {
  }
  paramsChanged() {
    this.data.setEDevParamsState(1);
  }
  gotoActuator1(){
    this.router.navigate(['eactuator1'],{relativeTo: this.route});
  }
  gotoActuator2(){
    this.router.navigate(['eactuator2'],{relativeTo: this.route});
  }
  gotoOtherParams(otherparam,otherParamTitle){
    this.data.setOtherParam(otherparam,otherParamTitle);
    this.router.navigate(['otherparams'],{relativeTo: this.route});
  }

  onBLEdata(dataType, dataValue) {
    this.zone.run( () => { // Change the property within the zone, CD will run after
        this.ad.sensor_settings.brightness_threshold = this.ad.sensor_settings.brightness_threshold ;
      });
  }
}
