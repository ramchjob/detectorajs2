import {Injectable,EventEmitter} from '@angular/core';
import {Http} from '@angular/http';
import {LoggerService} from './logger.service';


export class SubMenuItem {
  constructor(public name: string, public navigation: string) { }
}

 export class  SCCP_DATATYPES  { 
    static SCCP_TYPE_BOOL     = 0x01;
    static SCCP_TYPE_STRING   = 0x02;
    static SCCP_TYPE_ENUM8    = 0x03;
    static SCCP_TYPE_ENUM16   = 0x04;
    static SCCP_TYPE_TIME     = 0x05;
    static SCCP_TYPE_UINT8    = 0x08;
    static SCCP_TYPE_UINT16   = 0x09;
    static SCCP_TYPE_UINT32   = 0x0A;
    static SCCP_TYPE_UINT64   = 0x0B;
    static SCCP_TYPE_INT8     = 0x0C;
    static SCCP_TYPE_INT16    = 0x0D;
    static SCCP_TYPE_INT32    = 0x0E;
    static SCCP_TYPE_INT64    = 0x0F;
}

export class SCCP_ATTRIBUTES  {
    static FIRMWARE_VERSION                                        = 0x0000;
    static BT_DEVICE_NAME                                          = 0x0020;
    static ARTICLE_NUMBER                                          = 0x0021;
    static DEVICE_TYPE                                             = 0x0022;
    static POTENTIOMETER_MODE                                      = 0x0030;
    static BRIGHTNESS_THRESHOLD                                    = 0x0031;
    static BRIGHTNESS_THRESHOLD_MIN                                = 0x0032;
    static BRIGHTNESS_THRESHOLD_MAX                                = 0x0033;
    static CONSIDER_SLAVE_BRIGHTNESS_ENABLE                        = 0x0034;
    static CONSTANT_LIGHT_CONTROL_ENABLE                           = 0x0038;
    static CONSTANT_LIGHT_BRIGHTNESS_SET_POINT                     = 0x0039;
    static CONSTANT_LIGHT_BRIGHTNESS_SET_POINT_MIN                 = 0x003A;
    static CONSTANT_LIGHT_BRIGHTNESS_SET_POINT_MAX                 = 0x003B;
    static CONSTANT_LIGHT_CONTROL_CONSIDER_SLAVE_BRIGHTNESS_ENABLE = 0x003C;
    static SHORT_TIME_PULSE_ENABLE                                 = 0x0040;
    static SWITCH_OFF_DELAY                                        = 0x0041;
    static SWITCH_OFF_DELAY_MIN                                    = 0x0042;
    static SWITCH_OFF_DELAY_MAX                                    = 0x0043;
    static OPERATION_MODE                                          = 0x0044;
    static SLAVE_MODE_ENABLE                                       = 0x0045;
    static OUTDOOR_APPLICATION_ENABLE                              = 0x0050;
    static PIR_SENSITIVITY0                                        = 0x0051;
    static PIR_SENSITIVITY1                                        = 0x0052;
    static PIR_SENSITIVITY2                                        = 0x0053;
    static PIR_SENSITIVITY3                                        = 0x0054;
    static BRIGHTNESS_CORRECTION_ENABLE                            = 0x0058;
    static BRIGHTNESS_CORRECTION_VALUE                             = 0x0059;
    static DYNAMIC_SWITCH_OFF_DELAY_ENABLE                         = 0x005A;
    static CH1_CIRCUIT_LOGIC                                       = 0x0060;
    static CH1_PERMANENT_ON_DURATION                               = 0x0061;
    static CH1_PERMANENT_ON_DURATION_MIN                           = 0x0062;
    static CH1_PERMANENT_ON_DURATION_MAX                           = 0x0063;
    static CH1_PERMANENT_OFF_DURATION                              = 0x0064;
    static CH1_PERMANENT_OFF_DURATION_MIN                          = 0x0065;
    static CH1_PERMANENT_OFF_DURATION_MAX                          = 0x0066;
    static SOFT_ON_ENABLE                                          = 0x0067;
    static SOFT_ON_DURATION                                        = 0x0068;
    static SOFT_ON_DURATION_MIN                                    = 0x0069;
    static SOFT_ON_DURATION_MAX                                    = 0x006A;
    static SOFT_OFF_ENABLE                                         = 0x006B;
    static SOFT_OFF_DURATION                                       = 0x006C;
    static SOFT_OFF_DURATION_MIN                                   = 0x006D;
    static SOFT_OFF_DURATION_MAX                                   = 0x006E;
    static PHASE_CUT_MODE                                          = 0x006F;
    static CH1_MEMORY_FUNCTION_ENABLE                              = 0x0070;
    static DELIMIT_LIGHTING_LEVEL_ENABLE                           = 0x0071;
    static CH1_MIN_LEVEL_ENABLE                                    = 0x0072;
    static CH1_MIN_LEVEL                                           = 0x0073;
    static CH1_MAX_LEVEL_ENABLE                                    = 0x0074;
    static CH1_MAX_LEVEL                                           = 0x0075;
    static LEVEL_MIN                                               = 0x0076;
    static LEVEL_MAX                                               = 0x0077;
    static DALI_POWER_ON_LEVEL                                     = 0x0078;
    static COLOR_TEMPERATURE                                       = 0x007C;
    static COLOR_TEMPERATURE_MIN                                   = 0x007D;
    static COLOR_TEMPERATURE_MAX                                   = 0x007E;
    static BURN_IN_ENABLE                                          = 0x0080;
    static BURN_IN_MODE                                            = 0x0081;
    static BURN_IN_DURATION                                        = 0x0082;
    static BURN_IN_DURATION_MIN                                    = 0x0083;
    static BURN_IN_DURATION_MAX                                    = 0x0084;
    static BASIC_BRIGHTNESS_MODE                                   = 0x0088;
    static BASIC_BRIGHTNESS_LEVEL                                  = 0x0089;
    static BASIC_BRIGHTNESS_AMBIENT_BRIGHTNESS_THRESHOLD           = 0x008A;
    static BASIC_BRIGHTNESS_AMBIENT_BRIGHTNESS_THRESHOLD_MIN       = 0x008B;
    static BASIC_BRIGHTNESS_AMBIENT_BRIGHTNESS_THRESHOLD_MAX       = 0x008C;
    static BASIC_BRIGHTNESS_START_TIME                             = 0x008D;
    static BASIC_BRIGHTNESS_END_TIME                               = 0x008E;
    static BASIC_BRIGHTNESS_ASTRO_FUNCTION_ENABLE                  = 0x008F;
    static NIGHT_LIGHT_FUNCTION_ENABLE                             = 0x0094;
    static NIGHT_LIGHT_START_TIME                                  = 0x0095;
    static NIGHT_LIGHT_END_TIME                                    = 0x0096;
    static NIGHT_LIGHT_LEVEL                                       = 0x0097;
    static STEPWISE_SWITCH_OFF_DELAY_ENABLE                        = 0x0098;
    static STEPWISE_SWITCH_OFF_DELAY                               = 0x0099;
    static STEPWISE_SWITCH_OFF_DELAY_MIN                           = 0x009A;
    static STEPWISE_SWITCH_OFF_DELAY_MAX                           = 0x009B;
    static STEPWISE_SWITCH_OFF_LEVEL                               = 0x009C;
    static PRESENCE_SIMULATION_ENABLE                              = 0x009D;
    static PRESENCE_SIMULATION_START_TIME                          = 0x009E;
    static PRESENCE_SIMULATION_END_TIME                            = 0x009F;
    static PRESENCE_SIMULATION_ASTRO_FUNCTION_ENABLE               = 0x00A0;
    static CH2_CIRCUIT_LOGIC                                       = 0x0100;
    static CH2_MODE                                                = 0x0101;
    static HVAC_DYNAMICAL_CONTROL_ENABLE                           = 0x0102;
    static HVAC_SWITCH_ON_DELAY                                    = 0x0103;
    static HVAC_SWITCH_ON_DELAY_MIN                                = 0x0104;
    static HVAC_SWITCH_ON_DELAY_MAX                                = 0x0105;
    static HVAC_SWITCH_OFF_DELAY                                   = 0x0106;
    static HVAC_SWITCH_OFF_DELAY_MIN                               = 0x0107;
    static HVAC_SWITCH_OFF_DELAY_MAX                               = 0x0108;
    static TEST_MODE_DEACTIVATE_OUTPUTS_ENABLE                     = 0x00B0;
    static ENERGY_MONITOR_CONNECTED_LOAD                           = 0x00C0;
    static ENERGY_MONITOR_CONNECTED_LOAD_MIN                       = 0x00C1;
    static ENERGY_MONITOR_CONNECTED_LOAD_MAX                       = 0x00C2;
    static ENERGY_MONITOR_LIGHTING_DURATION                        = 0x00C3;
    static ENERGY_MONITOR_LIGHTING_DURATION_MIN                    = 0x00C4;
    static ENERGY_MONITOR_LIGHTING_DURATION_MAX                    = 0x00C5;
    static CONTACT                                                 = 0x00D0;
    static BUILDING                                                = 0x00D1;
    static ENABLE_USER_SET_BRIGHTNESS_THRESHOLD                    = 0x00E0;
    static ENABLE_USER_SET_SWITCH_OFF_DELAY                        = 0x00E1;
    static ENABLE_USER_ENERGY_MONITOR                              = 0x00E2;
    static ENABLE_USER_BASIC_BRIGHTNESS                            = 0x00E3;
    static ENABLE_USER_NIGHT_LIGHT_FUNCTION                        = 0x00E4;
    static ENABLE_USER_COLOR_TEMPERATURE_CONTROL_ENABLE            = 0x00E5;
    static CURRENT_BRIGHTNESS                                      = 0x1020;
    static IDENTIFYING_DEVICE                                      = 0x1021;
    static MOVEMENT                                                = 0x1040;
    static CH1_IDENTIFYING_LOAD                                    = 0x1060;
    static CH1_ON_OFF_STATE                                        = 0x1061;
    static CH1_CURRENT_LEVEL                                       = 0x1062;
    static CH2_IDENTIFYING_LOAD                                    = 0x10A0;
    static CH2_ON_OFF_STATE                                        = 0x10A1;
    static CH2_CURRENT_LEVEL                                       = 0x10A2;
    static TEST_MODE_ACTIVE                                        = 0x10B0;
    static ACCESS_LEVEL                                            = 0x10E0;
    static TEST_BOOL                                               = 0x8001;
    static TEST_STRING                                             = 0x8002;
    static TEST_ENUM8                                              = 0x8003;
    static TEST_ENUM16                                             = 0x8004;
    static TEST_TIME                                               = 0x8005;
    static TEST_UINT8                                              = 0x8008;
    static TEST_UINT16                                             = 0x8009;
    static TEST_UINT32                                             = 0x800A;;
    static TEST_INT8                                               = 0x800C;
    static TEST_INT16                                              = 0x800D;
    static TEST_INT32                                              = 0x800E;
};


export class UIParams {

      constructor() {}
      public showHeader = false;
      public showFooter = false;
      public arrowState = -1;
      public devices:Array<any>;
      public profileSwitch = true;
      public subMenuVal= 'none';
      public profile = 'none';
      public mainTitle = 'BJ DETECTOR';
      public otherparamTitle = '';
      arrowStateChange: EventEmitter<any> = new EventEmitter();
      public otherparam = '';
      public iparam = '';
      showOnlyCancel =  false;
      dialogTitle = '';
      dialogText = '';
      showModal = false;
      showCDI = -1;

}

export class DeviceParams {
        constructor(){}
        public deviceName = '';
        public deviceType= '';
        public deviceAddress = '';
        public articleNumber= '';
        public contactName= '';
        public buildingName= '';
        public date= '';
        public fwupdate = false;
        public modelType= '';
        public firmwareVersion= '';
        jsonLoadEmitter: EventEmitter<any> = new EventEmitter();
        iJsonLoadEmitter: EventEmitter<any> = new EventEmitter();

}

declare var setDataServiceCallBack;
    
@Injectable()
export class DataService {

    scanneddata:any;
    uiParams:UIParams   =  new UIParams();
    deviceParams:DeviceParams   =  new DeviceParams();
    deviceData:any;
    private selectedDevice:any;
    private iSelectedDevice:any;
    setDataServiceCallBackObj:any;
    iDeviceData:any;
    currentBrightness = '498';
    activeComponent:any;
    constructor(private http:Http,private logger: LoggerService) {
        //this.setDataServiceCallBackObj = new setDataServiceCallBack(this);
    }

    setScannedData(scanned){
        this.scanneddata = scanned;
    }

    getScannedData() {
        return this.scanneddata;
    }
    setMainTitle(title) {
        this.uiParams.mainTitle = title;
    }
    getMainTitle() {
        return this.uiParams.mainTitle;
    }
    public initDevices() {
        this.loadDevices().then((devs) => {
             this.uiParams.devices = devs;
        });
    }

    getCurrentBrightness() {
        return this.currentBrightness+ 'lx';
    }
   
    setCurrentBrightness(brightness) {
        this.currentBrightness = brightness;
    }

    loadDevices() {
        return new Promise<Array<any>>(resolve => {
        this.http.get('assets/detectorslist.json').subscribe(response => {
                resolve(response.json().detectors);
            });
        });
    }
    getDevice(i) {
        return this.uiParams.devices[i];
    }
    setDevice(device) {
        this.uiParams.devices.concat(device);
    }
    setDevices(devices) {
        this.clearDevices();
        this.uiParams.devices = devices;
    }
    clearDevices() {
        this.uiParams.devices.splice(0,this.uiParams.devices.length);
    }
    getDevices(){
        if(this.uiParams.devices && (this.uiParams.devices.length > 0)) {
            return this.uiParams.devices;
        }
    }
    setMenuArrow(menuState) {
      this.uiParams.arrowState =  menuState;
    }
    closeMenu() {
        this.arrowStateEmit();
    }
    getMenuArrow() {
      return this.uiParams.arrowState;
    }
    setFooter(footerState) {
      this.uiParams.showFooter =  footerState;
    }
    getFooter() {
      return this.uiParams.showFooter;
    }

    setHeader(headerState) {
      this.uiParams.showHeader =  headerState;
    }
    getHeader() {
      return this.uiParams.showHeader;
    }
    setProfile(in_profile) {
      this.uiParams.profile = in_profile;
    }
    getProfile(){
      return this.uiParams.profile;
    }

    getProfileSwitch() {
        return this.uiParams.profileSwitch;
    }
    setProfileSwitch(switchprofile) {
        this.uiParams.profileSwitch = switchprofile;
    }
    arrowStateEmit() {
        this.uiParams.arrowStateChange.emit(0);
    }
    subscribeArrowState(component, callback) {
        return this.uiParams.arrowStateChange.subscribe(data => callback(component, data));
    }
    setShowCDI(item) {
        this.uiParams.showCDI = item;
    }
    getShowCDI() {
        return this.uiParams.showCDI;
    }

    setSubMenuVal(submenuval) {
        this.uiParams.subMenuVal =  submenuval;
    }
    getSubMenuVal() {
        return this.uiParams.subMenuVal;
    }
    setOtherParam(item,itemTitle) {
         this.uiParams.otherparam = item;
         this.uiParams.otherparamTitle = itemTitle;
    }
    setShowOnlyCancel(cancel) {
        this.uiParams.showOnlyCancel = cancel;
    }
    showOnlyCancel() {
        return this.uiParams.showOnlyCancel;
    }
    getOtherParamTitle() {
        return this.uiParams.otherparamTitle;
    }
    getOtherParam(){
        return this.uiParams.otherparam;
    }
     setIParam(item,itemTitle) {
         this.uiParams.iparam = item;
         this.setMainTitle(itemTitle);
    }

    getIParam(){
        return this.uiParams.iparam;
    }
    setDialogTitle(item) {
        this.uiParams.dialogTitle = item;
    }   
    setDialogText(item) {
        this.uiParams.dialogText = item;
    }
    getDialogTitle() {
        return this.uiParams.dialogTitle;
    }
    getDialogText() {
        return this.uiParams.dialogText;
    }
    getShowModal() {
        return this.uiParams.showModal;
    }
    setShowModal(item) {
        this.uiParams.showModal = item;
    }

    getSubMenuItems() {
        if(this.uiParams.profile == 'user') {
            let menuItems: Array<SubMenuItem> = [ 
                new SubMenuItem('Help','help'),
                new SubMenuItem('About Busch-Jaeger','about'), 
                new SubMenuItem('Switch mode','switch_mode'), 
            ];
            return menuItems;
        }else {
            let menuItems: Array<SubMenuItem> = [ 
                new SubMenuItem('Installed devices','installed_devices'),
                new SubMenuItem('User profiles','user_profiles'), 
                new SubMenuItem('Switch mode','switch_mode'), 
                new SubMenuItem('Help','help'),
                new SubMenuItem('Sync with myBUSCH-JAEGER','sync'),
                new SubMenuItem('About Busch-Jaeger','about'),
            ];
            return menuItems;
        }
    }
/****************  DEVICE INFO APIs specific to each device ******************/

    public setSelectedDevice(device,installed) {
        if(installed) {
            this.iSelectedDevice = device;
        } else {
            this.selectedDevice =  device;
        }
    }
    public getSelectedDevice(installed) {
        if(installed) {
            return this.iSelectedDevice;
        }else {
            return this.selectedDevice;
        }
    }
    subscribeJsonLoad(component, callback) {
        return this.deviceParams.jsonLoadEmitter.subscribe(data => callback(component, data));
    }
    public initDeviceData(item,installed){
    this.loadDeviceData(item,installed).then((data) => {
            if(installed) {
                this.iDeviceData = data;
                this.iJsonLoadEmit();
            }else {
             this.deviceData = data;
             this.jsonLoadEmit();
            }
        });
    }


    setActiveComponent(component) {
        this.activeComponent = component;
    }

    notifyActiveComponentWithBLEdata(attrType, attrValue) {
        if(this.activeComponent != undefined) {
            this.activeComponent.onBLEdata(attrType,attrValue);
        }
    }

    setBLEDataToService(data) {
        let bleData:Array<any> = JSON.parse(JSON.stringify(data));
        for(let i =0 ; i < bleData.length; i++) {
            let attrType = bleData[0].AttrType;
            let attrValue = bleData[0].AttrValue;
            this.setBLEdataOnDeviceData(attrType,attrValue);
            this.notifyActiveComponentWithBLEdata(attrType, attrValue)
        }
    }

    subscribeIJsonLoad(component, callback) {
        return this.deviceParams.iJsonLoadEmitter.subscribe(data => callback(component, data));
    }
    public getDevicedata(installed) {
        if(installed) {
            return this.iDeviceData;
        }else {
            return this.deviceData;
        }
    }
    loadDeviceData(item,installed) {
        if(item.deviceType == 'relay1c') {
            return new Promise<Array<any>>(resolve => {
            this.http.get('assets/relay1c.json').subscribe(response => {
                    resolve(response.json());
                    
                });
            });
            
        }else if(item.deviceType == 'mosfet1c') {
            return new Promise<Array<any>>(resolve => {
            this.http.get('assets/mosfet1c.json').subscribe(response => {
                    resolve(response.json());
                });
            });
        }else if(item.deviceType == 'daliMaster1c') {
            return new Promise<Array<any>>(resolve => {
            this.http.get('assets/daliMaster1c.json').subscribe(response => {
                    resolve(response.json());
                });
            });
        }
    }

    jsonLoadEmit() {
        this.deviceParams.jsonLoadEmitter.emit(0);
    }
    iJsonLoadEmit() {
        this.deviceParams.iJsonLoadEmitter.emit(0);
    }


    setBLEdataOnDeviceData(attrType,attrValue){
        switch(attrType) {
            case SCCP_ATTRIBUTES.FIRMWARE_VERSION                                        :
            break;
            case SCCP_ATTRIBUTES.BT_DEVICE_NAME                                          :
            break;
            case SCCP_ATTRIBUTES.ARTICLE_NUMBER                                          : 
            break;
            case SCCP_ATTRIBUTES.DEVICE_TYPE                                             : 
            break;
            case SCCP_ATTRIBUTES.POTENTIOMETER_MODE                                      : 
            break;
            case SCCP_ATTRIBUTES.BRIGHTNESS_THRESHOLD                                    : 
                this.deviceData.sensor_settings.brightness_threshold = attrValue;
            break;
            case SCCP_ATTRIBUTES.BRIGHTNESS_THRESHOLD_MIN                                : 
            break;
            case SCCP_ATTRIBUTES.BRIGHTNESS_THRESHOLD_MAX                                : 
            break;
            case SCCP_ATTRIBUTES.CONSIDER_SLAVE_BRIGHTNESS_ENABLE                        :
            break; 
            case SCCP_ATTRIBUTES.CONSTANT_LIGHT_CONTROL_ENABLE                           : 
            break;
            case SCCP_ATTRIBUTES.CONSTANT_LIGHT_BRIGHTNESS_SET_POINT                     : 
            break;
            case SCCP_ATTRIBUTES.CONSTANT_LIGHT_BRIGHTNESS_SET_POINT_MIN                 : 
            break;
            case SCCP_ATTRIBUTES.CONSTANT_LIGHT_BRIGHTNESS_SET_POINT_MAX                 : 
            break;
            case SCCP_ATTRIBUTES.CONSTANT_LIGHT_CONTROL_CONSIDER_SLAVE_BRIGHTNESS_ENABLE : 
            break;
            case SCCP_ATTRIBUTES.SHORT_TIME_PULSE_ENABLE                                 : 
            break;
            case SCCP_ATTRIBUTES.SWITCH_OFF_DELAY                                        : 
            break;
            case SCCP_ATTRIBUTES.SWITCH_OFF_DELAY_MIN                                    : 
            break;
            case SCCP_ATTRIBUTES.SWITCH_OFF_DELAY_MAX                                    : 
            break;
            case SCCP_ATTRIBUTES.OPERATION_MODE                                          : 
            break;
            case SCCP_ATTRIBUTES.SLAVE_MODE_ENABLE                                       : 
            break;
            case SCCP_ATTRIBUTES.OUTDOOR_APPLICATION_ENABLE                              : 
            break;
            case SCCP_ATTRIBUTES.PIR_SENSITIVITY0                                        : 
            break;
            case SCCP_ATTRIBUTES.PIR_SENSITIVITY1                                        : 
            break;
            case SCCP_ATTRIBUTES.PIR_SENSITIVITY2                                        : 
            break;
            case SCCP_ATTRIBUTES.PIR_SENSITIVITY3                                        : 
            break;
            case SCCP_ATTRIBUTES.BRIGHTNESS_CORRECTION_ENABLE                            : 
            break;
            case SCCP_ATTRIBUTES.BRIGHTNESS_CORRECTION_VALUE                             : 
            break;
            case SCCP_ATTRIBUTES.DYNAMIC_SWITCH_OFF_DELAY_ENABLE                         : 
            break;
            case SCCP_ATTRIBUTES.CH1_CIRCUIT_LOGIC                                       : 
            break;
            case SCCP_ATTRIBUTES.CH1_PERMANENT_ON_DURATION                               : 
            break;
            case SCCP_ATTRIBUTES.CH1_PERMANENT_ON_DURATION_MIN                           : 
            break;
            case SCCP_ATTRIBUTES.CH1_PERMANENT_ON_DURATION_MAX                           : 
            break;
            case SCCP_ATTRIBUTES.CH1_PERMANENT_OFF_DURATION                              : 
            break;
            case SCCP_ATTRIBUTES.CH1_PERMANENT_OFF_DURATION_MIN                          : 
            break;
            case SCCP_ATTRIBUTES.CH1_PERMANENT_OFF_DURATION_MAX                          : 
            break;
            case SCCP_ATTRIBUTES.SOFT_ON_ENABLE                                          : 
            break;
            case SCCP_ATTRIBUTES.SOFT_ON_DURATION                                        : 
            break;
            case SCCP_ATTRIBUTES.SOFT_ON_DURATION_MIN                                    :
            break; 
            case SCCP_ATTRIBUTES.SOFT_ON_DURATION_MAX                                    : 
            break;
            case SCCP_ATTRIBUTES.SOFT_OFF_ENABLE                                         : 
            break;
            case SCCP_ATTRIBUTES.SOFT_OFF_DURATION                                       : 
            break;
            case SCCP_ATTRIBUTES.SOFT_OFF_DURATION_MIN                                   : 
            break;
            case SCCP_ATTRIBUTES.SOFT_OFF_DURATION_MAX                                   : 
            break;
            case SCCP_ATTRIBUTES.PHASE_CUT_MODE                                          : 
            break;
            case SCCP_ATTRIBUTES.CH1_MEMORY_FUNCTION_ENABLE                              : 
            break;
            case SCCP_ATTRIBUTES.DELIMIT_LIGHTING_LEVEL_ENABLE                           : 
            break;
            case SCCP_ATTRIBUTES.CH1_MIN_LEVEL_ENABLE                                    : 
            break;
            case SCCP_ATTRIBUTES.CH1_MIN_LEVEL                                           : 
            break;
            case SCCP_ATTRIBUTES.CH1_MAX_LEVEL_ENABLE                                    : 
            break;
            case SCCP_ATTRIBUTES.CH1_MAX_LEVEL                                           : 
            break;
            case SCCP_ATTRIBUTES.LEVEL_MIN                                               : 
            break;
            case SCCP_ATTRIBUTES.LEVEL_MAX                                               : 
            break;
            case SCCP_ATTRIBUTES.DALI_POWER_ON_LEVEL                                     : 
            break;
            case SCCP_ATTRIBUTES.COLOR_TEMPERATURE                                       : 
            break;
            case SCCP_ATTRIBUTES.COLOR_TEMPERATURE_MIN                                   : 
            break;
            case SCCP_ATTRIBUTES.COLOR_TEMPERATURE_MAX                                   : 
            break;
            case SCCP_ATTRIBUTES.BURN_IN_ENABLE                                          : 
            break;
            case SCCP_ATTRIBUTES.BURN_IN_MODE                                            : 
            break;
            case SCCP_ATTRIBUTES.BURN_IN_DURATION                                        : 
            break;
            case SCCP_ATTRIBUTES.BURN_IN_DURATION_MIN                                    : 
            break;
            case SCCP_ATTRIBUTES.BURN_IN_DURATION_MAX                                    : 
            break;
            case SCCP_ATTRIBUTES.BASIC_BRIGHTNESS_MODE                                   : 
            break;
            case SCCP_ATTRIBUTES.BASIC_BRIGHTNESS_LEVEL                                  : 
            break;
            case SCCP_ATTRIBUTES.BASIC_BRIGHTNESS_AMBIENT_BRIGHTNESS_THRESHOLD           : 
            break;
            case SCCP_ATTRIBUTES.BASIC_BRIGHTNESS_AMBIENT_BRIGHTNESS_THRESHOLD_MIN       : 
            break;
            case SCCP_ATTRIBUTES.BASIC_BRIGHTNESS_AMBIENT_BRIGHTNESS_THRESHOLD_MAX       : 
            break;
            case SCCP_ATTRIBUTES.BASIC_BRIGHTNESS_START_TIME                             : 
            break;
            case SCCP_ATTRIBUTES.BASIC_BRIGHTNESS_END_TIME                               : 
            break;
            case SCCP_ATTRIBUTES.BASIC_BRIGHTNESS_ASTRO_FUNCTION_ENABLE                  : 
            break;
            case SCCP_ATTRIBUTES.NIGHT_LIGHT_FUNCTION_ENABLE                             : 
            break;
            case SCCP_ATTRIBUTES.NIGHT_LIGHT_START_TIME                                  : 
            break;
            case SCCP_ATTRIBUTES.NIGHT_LIGHT_END_TIME                                    : 
            break;
            case SCCP_ATTRIBUTES.NIGHT_LIGHT_LEVEL                                       : 
            break;
            case SCCP_ATTRIBUTES.STEPWISE_SWITCH_OFF_DELAY_ENABLE                        : 
            break;
            case SCCP_ATTRIBUTES.STEPWISE_SWITCH_OFF_DELAY                               : 
            break;
            case SCCP_ATTRIBUTES.STEPWISE_SWITCH_OFF_DELAY_MIN                           : 
            break;
            case SCCP_ATTRIBUTES.STEPWISE_SWITCH_OFF_DELAY_MAX                           : 
            break;
            case SCCP_ATTRIBUTES.STEPWISE_SWITCH_OFF_LEVEL                               : 
            break;
            case SCCP_ATTRIBUTES.PRESENCE_SIMULATION_ENABLE                              : 
            break;
            case SCCP_ATTRIBUTES.PRESENCE_SIMULATION_START_TIME                          : 
            break;
            case SCCP_ATTRIBUTES.PRESENCE_SIMULATION_END_TIME                            : 
            break;
            case SCCP_ATTRIBUTES.PRESENCE_SIMULATION_ASTRO_FUNCTION_ENABLE               : 
            break;
            case SCCP_ATTRIBUTES.CH2_CIRCUIT_LOGIC                                       : 
            break;
            case SCCP_ATTRIBUTES.CH2_MODE                                                : 
            break;
            case SCCP_ATTRIBUTES.HVAC_DYNAMICAL_CONTROL_ENABLE                           : 
            break;
            case SCCP_ATTRIBUTES.HVAC_SWITCH_ON_DELAY                                    : 
            break;
            case SCCP_ATTRIBUTES.HVAC_SWITCH_ON_DELAY_MIN                                : 
            break;
            case SCCP_ATTRIBUTES.HVAC_SWITCH_ON_DELAY_MAX                                : 
            break;
            case SCCP_ATTRIBUTES.HVAC_SWITCH_OFF_DELAY                                   : 
            break;
            case SCCP_ATTRIBUTES.HVAC_SWITCH_OFF_DELAY_MIN                               : 
            break;
            case SCCP_ATTRIBUTES.HVAC_SWITCH_OFF_DELAY_MAX                               : 
            break;
            case SCCP_ATTRIBUTES.TEST_MODE_DEACTIVATE_OUTPUTS_ENABLE                     : 
            break;
            case SCCP_ATTRIBUTES.ENERGY_MONITOR_CONNECTED_LOAD                           : 
            break;
            case SCCP_ATTRIBUTES.ENERGY_MONITOR_CONNECTED_LOAD_MIN                       : 
            break;
            case SCCP_ATTRIBUTES.ENERGY_MONITOR_CONNECTED_LOAD_MAX                       : 
            break;
            case SCCP_ATTRIBUTES.ENERGY_MONITOR_LIGHTING_DURATION                        : 
            break;
            case SCCP_ATTRIBUTES.ENERGY_MONITOR_LIGHTING_DURATION_MIN                    : 
            break;
            case SCCP_ATTRIBUTES.ENERGY_MONITOR_LIGHTING_DURATION_MAX                    : 
            break;
            case SCCP_ATTRIBUTES.CONTACT                                                 : 
            break;
            case SCCP_ATTRIBUTES.BUILDING                                                : 
            break;
            case SCCP_ATTRIBUTES.ENABLE_USER_SET_BRIGHTNESS_THRESHOLD                    : 
            break;
            case SCCP_ATTRIBUTES.ENABLE_USER_SET_SWITCH_OFF_DELAY                        : 
            break;
            case SCCP_ATTRIBUTES.ENABLE_USER_ENERGY_MONITOR                              : 
            break;
            case SCCP_ATTRIBUTES.ENABLE_USER_BASIC_BRIGHTNESS                            : 
            break;
            case SCCP_ATTRIBUTES.ENABLE_USER_NIGHT_LIGHT_FUNCTION                        : 
            break;
            case SCCP_ATTRIBUTES.ENABLE_USER_COLOR_TEMPERATURE_CONTROL_ENABLE            : 
            break;
            case SCCP_ATTRIBUTES.CURRENT_BRIGHTNESS                                      : 
            break;
            case SCCP_ATTRIBUTES.IDENTIFYING_DEVICE                                      : 
            break;
            case SCCP_ATTRIBUTES.MOVEMENT                                                : 
            break;
            case SCCP_ATTRIBUTES.CH1_IDENTIFYING_LOAD                                    : 
            break;
            case SCCP_ATTRIBUTES.CH1_ON_OFF_STATE                                        : 
            break;
            case SCCP_ATTRIBUTES.CH1_CURRENT_LEVEL                                       : 
            break;
            case SCCP_ATTRIBUTES.CH2_IDENTIFYING_LOAD                                    : 
            break;
            case SCCP_ATTRIBUTES.CH2_ON_OFF_STATE                                        : 
            break;
            case SCCP_ATTRIBUTES.CH2_CURRENT_LEVEL                                       : 
            break;
            case SCCP_ATTRIBUTES.TEST_MODE_ACTIVE                                        : 
            break;
            case SCCP_ATTRIBUTES.ACCESS_LEVEL                                            : 
            break;
            default:
            break;
        }
    }
}