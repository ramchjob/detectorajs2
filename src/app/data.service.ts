import {Injectable,EventEmitter} from '@angular/core';
import {Http,Headers,RequestOptions,RequestOptionsArgs,Response,RequestMethod} from '@angular/http';
import {LoggerService} from './logger.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import { i18nService } from './i18n.service';
import * as https from 'https';
import * as request from 'request'

export class SubMenuItem {
  constructor(public name: string, public navigation: string) { }
}

export class WriteData{
    constructor(public attrType: number, public attrValue: number[]) { }
}

export class HTTPCODES {
    static SUCCESS_START        = 200;
    static SUCCESS_END          = 299;
    static NOT_FOUND            = 404;
    static NO_AUTH              = 401;
    static FORBIDDN             = 403;
    static BAD_REQUEST          = 400;
    static METHOD_NOT_ALLOWED   = 405;
    static PAYLAOD_HUGE         = 413;
    static TOO_MANY_REQUESTS    = 429;
    static SERVER_ERR_START     = 500;
}

export class CloudObj {
    constructor() {}
    DetectorsObj:{};
    IdetectorsObj:{};
    ProfilesObj:{};
    DevicesArray:Array<any>;
    IDevicesArray:Array<any>;
    ProfilesArray:Array<any>;
    SelectedDevice:any;
    ISelectedDevice:any;
    DeviceData:any;
    IDeviceData:any;
}

export class SCCP_COMMAND  {
   static STANDARD_RESPONSE               = 0x80;
   static RESET                           = 0x01;
   static RESET_FN                        = 0x02;
   static READ_ATTRIBUTE_REQUEST          = 0x03;
   static READ_ATTRIBUTE_RESPONSE         = 0x83;
   static WRITE_ATTRIBUTE_REQUEST         = 0x04;
   static WRITE_ATTRIBUTE_RESPONSE        = 0x84;
   static CONFIGURE_REPORTING_REQUEST     = 0x05;
   static CONFIGURE_REPORTING_RESPONSE    = 0x85;
   static REPORT_ATTRIBUTE                = 0x06;
   static IDENTIFY_DEVICE                 = 0x20;
   static IDENTIFY_LOAD                   = 0x30;
   static ON_OFF                          = 0x31;
   static SET_LEVEL                       = 0x32;
   static RESET_ENERGY_MONITOR            = 0x40;
   static RESET_DALI_CONTROL_GEAR         = 0x48;
   static AUTH_GEN_RANDOM_REQUEST         = 0x50;
   static AUTH_GEN_RANDOM_RESPONSE        = 0xD0;
   static AUTH_REQUST                     = 0x51;
   static AUTH_SET_PWD_REQUEST            = 0x52;
   static SET_ACCESS_LEVEL                = 0x53;
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
    static SCCP_TYPE_AUINT8   = 0x88;
}

export class SCCP_ATTRIBUTES  {
    static FIRMWARE_VERSION                                        = 0x0000;
    static UNIQUE_IDENTIFIER                                       = 0x0002;
    static UNIQUE_IDENTIFIER_LENGTH                                = 0x0003;
    static BT_DEVICE_NAME                                          = 0x0020;
    static ARTICLE_NUMBER                                          = 0x0021;
    static DEVICE_TYPE                                             = 0x0022;
    static IS_FACTORY_NEW                                          = 0x0023;
    static LATITTUDE                                               = 0x0028;
    static LONGITUDE                                               = 0x0029;
    static TIMEZONE                                                = 0x002A;
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
    static BASIC_BRIGHTNESS_START_TIME_ASTRO_FUNCTION_ENABLE       = 0x008F;
    static BASIC_BRIGHTNESS_END_TIME_ASTRO_FUNCTION_ENABLE         = 0x0090;
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
    static PRESENCE_SIMULATION_START_TIME_ASTRO_FUNCTION_ENABLE     = 0x00A0;
    static PRESENCE_SIMULATION_END_TIME_ASTRO_FUNCTION_ENABLE       = 0x00A1;
    static SWITCH_OFF_PRE_WARNING_ENABLE                           = 0x00A2;
    static PERMANENT_LIGHT_BY_PUSH_BUTTON_ENABLE                   = 0x00A5;
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
    static ENERGY_MONITOR_DB                                       = 0x00C6;
    static CONTACT                                                 = 0x00D0;
    static BUILDING                                                = 0x00D1;
    static ENABLE_USER_SET_BRIGHTNESS_THRESHOLD                    = 0x00E0;
    static ENABLE_USER_SET_SWITCH_OFF_DELAY                        = 0x00E1;
    static ENABLE_USER_ENERGY_MONITOR                              = 0x00E2;
    static ENABLE_USER_BASIC_BRIGHTNESS                            = 0x00E3;
    static ENABLE_USER_NIGHT_LIGHT_FUNCTION                        = 0x00E4;
    static ENABLE_USER_COLOR_TEMPERATURE_CONTROL_ENABLE            = 0x00E5;
    static IS_BT_CONNECTED                                         = 0x1000;
    static CURRENT_BRIGHTNESS                                      = 0x1020;
    static IDENTIFYING_DEVICE                                      = 0x1021;
    static CURRENT_OPERATING_MODE                                  = 0x1022;
    static MOVEMENT                                                = 0x1040;
    static CH1_IDENTIFYING_LOAD                                    = 0x1060;
    static CH1_ON_OFF_STATE                                        = 0x1061;
    static CH1_CURRENT_LEVEL                                       = 0x1062;
    static CH2_IDENTIFYING_LOAD                                    = 0x10A0;
    static CH2_ON_OFF_STATE                                        = 0x10A1;
    static TEST_MODE_ENABLE                                        = 0x10B0;
    static ACCESS_LEVEL                                            = 0x10E0;
    static END_USER_PASSWORD                                       = 0x10E1;
    static END_USER_PASSWORD_LENGTH                                = 0x10E2;
    static PASSWORD_REMINDER_ACTIVE                                = 0x10E3;
};


export class UIParams {
      constructor() {}
      public showHeader = false;
      public showFooter = false;
      public arrowState = -1;
      public devicesObj =  new CloudObj();
      public profileSwitch = true;
      public subMenuVal= 'none';
      public profile = 'none';
      public mainTitle = 'BJ DETECTOR';
      public smMainTitle = "";
      public otherparamTitle = '';
      arrowStateChange: EventEmitter<any> = new EventEmitter();
      public otherparam = '';
      public iparam = '';
      showOnlyCancel =  false;
      dialogTitle = '';
      dialogText = '';
      showModal = false;
      showEModal = false;
      profileName ='';
      showCDI = -1;
      eOptionText = '';// 'Save'; //commented to solve issue with localization
      eDevParamsChanged = 0;
      userLoggedIn =  false;
      lastSynced = '';
      subMenuComponent = undefined;
      autoSync = true;
      inputHint ='';
      installpwdChanged = false;
      userPwdChanged = false;
      toBeSetInstallerPwd = "";
      toBeSetUserPwd="";
}

export class DeviceParams {
        constructor(){}
        public deviceName = '';
        public deviceType= '';
        public deviceAddress = '';
        public modelNumber= '';
        public contactName= '';
        public buildingName= '';
        public date= '';
        public fwupdate = false;
        public modelType= '';
        public firmwareVersion= '';
        deviceConnected = false;
        public installer_pwd="";
        public user_pwd="";
        public auth_challenge =[];
        public accessLevelRequsetedAddress ="";
}

export class NetworkParams {
    constructor(){}
    public username = ''
    public password = ''
    public namespace = 'presence-detector-backup'
    public certDetectorHostName = 'api.my-staging.busch-jaeger.de';
    public detectorHostName = 'https://api.my-staging.busch-jaeger.de';
    public baseUrl = this.detectorHostName + '/api/user/key-value/'+ this.namespace;   
    public devicesPath = 'devices';
    public profilesPath = 'profiles';
    public devicesUrl = this.baseUrl+ '/'+ this.devicesPath;
    public profilesUrl = this.baseUrl+ '/'+ this.profilesPath;
    public deviceprefix = 'device-'
    public detectorsName = 'detectors'
    public deviceDataUrl =  this.baseUrl + '/'+ this.deviceprefix;
    public detectorPort = 443;
    public useCertAuth = false; 
    public certBasePath = '/api/user/key-value/'+ this.namespace;
    public certDevicesPath = this.certBasePath+'/'+this.devicesPath ;
    public certProfilesPath = this.certBasePath+'/'+this.devicesPath ;
    public certDeviceDataPath = this.certBasePath+'/'+this.deviceprefix;
    public certData:Buffer;
    public keyData:Buffer;
}

var bjCert ='-----BEGIN CERTIFICATE-----\r\n\
MIIEyDCCA7KgAwIBAgIISdUtEDQ+o2cwCwYJKoZIhvcNAQEFMIH7MQswCQYDVQQG\r\n\
EwJERTEcMBoGA1UECBMTTm9yZHJoZWluLVdlc3RmYWxlbjEdMBsGA1UEBxMUTXVl\r\n\
bGhlaW0gYW4gZGVyIFJ1aHIxJzAlBgNVBAoTHlE6bWFya2V0aW5nIEFrdGllbmdl\r\n\
c2VsbHNjaGFmdDEYMBYGA1UECxMPRGF0YWRldmVsb3BtZW50MUMwQQYDVQQDEzpB\r\n\
QkIvQnVzY2gtSmFlZ2VyIEVsZWt0cm8gSW50ZXJuZXQgU2VydmljZSBQbGF0Zm9y\r\n\
bSBSb290IENBMScwJQYJKoZIhvcNAQkBFhhhZG1pbkBkYXRhZGV2ZWxvcG1lbnQu\r\n\
ZGUwIhgPMjAxNzA2MTYwOTQ1MTBaGA8yMDE5MDYxNjA5NDUxMFowMTELMAkGA1UE\r\n\
BhMCREUxIjAgBgNVBAMMGUJ1c2NoLUphZWdlciBFbGVrdHJvIEdtYkgwggEgMAsG\r\n\
CSqGSIb3DQEBAQOCAQ8AMIIBCgKCAQEAwfhE7i817O6Wb/n3RI7jZ5pSANMAvSBK\r\n\
d7HkSOLCgW1EfpmNp9qfujIDTiwg1htA3mqBSf4BWvskKOCgCykkDw2Q69WaGlgZ\r\n\
0eItvcTx+JruMFM0e0UV6IV7DeMZIh3Pr97LxzuWxOdH+GOzliYcu1Wle3bCyS+g\r\n\
xuQS10ICsLVo08JUwbGEbUW6VOHA3KbfOnTGPVV2+rP25goBLv2DMYhKufTzDaIS\r\n\
9WmMp2ZTIxhPDIMF9Gj2m0TRyvlMa0rejfXZ18Au3F/ZJM+Dbi4Dp9nBQLpajfAw\r\n\
KlGIIJCU1idwavZGR+O3DEmFy3sXfr//U2Y/3143q8fhO2AH/60VqQIDAQABo4IB\r\n\
GTCCARUwCQYDVR0TBAIwADCB5gYDVR0RBIHeMIHbhlJodHRwczovL215LXN0YWdp\r\n\
bmcuYnVzY2gtamFlZ2VyLmRlL2FwaS9jbGllbnQvZjRmYWJiMDktZGMxYi00ZDFl\r\n\
LWExZDUtOTNjMzgwYmY1M2Q4oDEGBysSAAIEhg+gJhMkZjRmYWJiMDktZGMxYi00\r\n\
ZDFlLWExZDUtOTNjMzgwYmY1M2Q4oFIGCCsGAQUFBwgFoEYTRGY0ZmFiYjA5LWRj\r\n\
MWItNGQxZS1hMWQ1LTkzYzM4MGJmNTNkOEB4bXBwLm15LXN0YWdpbmcuYnVzY2gt\r\n\
amFlZ2VyLmRlMB8GA1UdIwQYMBaAFLmObDD6U5xzsml9CGOUbJneFYHFMAsGCSqG\r\n\
SIb3DQEBBQOCAQEADGJU+z43LoXUL5vKdcXe6rVRIdYcyuI14UxQdpLrME4PWsY9\r\n\
JzcD8fU4OYJM+q5aOv1eMdndGxbGMVMONJ5ubq1mBmi4kUEc92IFQjn7ygiScaFS\r\n\
/Vmzo1EftjZPuiqdbba6l0KXZeqJN6D8Bkqemm6gpOmY7PeFqihnLPBPgSpGIwvA\r\n\
Ser/W0fiODSfhcPXKu+wqqOQQRU6S+1z1s4oQI8iARtfjxtYH8j1y+VDewBqgu8t\r\n\
1FrICH/wu8xFRcONXgU59vG96f9WQiN+sncP/B+xVkOvomCPbCFfMHIhpuuWIkoC\r\n\
bsE0uHKMbeF3BP73mFpNvq+yRq5h+N28TrZ1uw==\r\n\
-----END CERTIFICATE-----\n';

var bjKey ='-----BEGIN PRIVATE KEY-----\n\
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDB+ETuLzXs7pZv\n\
+fdEjuNnmlIA0wC9IEp3seRI4sKBbUR+mY2n2p+6MgNOLCDWG0DeaoFJ/gFa+yQo\n\
4KALKSQPDZDr1ZoaWBnR4i29xPH4mu4wUzR7RRXohXsN4xkiHc+v3svHO5bE50f4\n\
Y7OWJhy7VaV7dsLJL6DG5BLXQgKwtWjTwlTBsYRtRbpU4cDcpt86dMY9VXb6s/bm\n\
CgEu/YMxiEq59PMNohL1aYynZlMjGE8MgwX0aPabRNHK+UxrSt6N9dnXwC7cX9kk\n\
z4NuLgOn2cFAulqN8DAqUYggkJTWJ3Bq9kZH47cMSYXLexd+v/9TZj/fXjerx+E7\n\
YAf/rRWpAgMBAAECggEARUHIGuNwdbCatlCiITCDsbJAJVsxoFWvQR2bTQrqOBwz\n\
oKBjG9PLxEenNno7HzeL6d5NW4X+JeYV+yJ5AoMmBNnrLMmPxGhAj9gaTO/NFd77\n\
vPV4f6sjL2q5jTPQ/YV3amw6hmCYbKXH5MB0lt/00k66T2MQGZWP6nP05jcDjuQX\n\
zW66EesW66Uvar2IjNme78svQqfdEsjAbuwPgO7T+oLMYqx1EtE55OdLlncKXihp\n\
NHDkHuWOzO4AS9bUJkbRSCuXvGQx2fH6uNp5MPPg6CeSCEOQQ69eexd97Eu7cVzf\n\
i/H+6VacdaOXy6edSh9xYgFwdjaBtC8vjZNoKUZzoQKBgQDoQ2eYSzq5CWZgojmV\n\
jaZ3xB3cukbKxDWNAvVTAukemf9mnZKhydXcX4A+vcrynOa1tjDKfKY+ipZhwRBi\n\
Dp92zy+CUnDGoYMmuIRJ0Fc1REpPCKAGUvHTwARV6+elUowzz2nLpbFsKE4DUPEA\n\
hsl1tmkBfhizX5LKuxD5fp1vwwKBgQDVywKFJGZrN83mbtx4kFs1vBIhdjOFrKvj\n\
uGihbU0j/Iw6nBGJuVuFjOI1sZCD6dmln+dc0NbJXf9s3iihk2zredeVqT0MALS8\n\
dP04ncibfq/OHk9y3wM9DkBRwm0pT1pJM6TdwkGiA+1b+j1SugidujDESp1jn24y\n\
zlhyOi8aIwKBgQCchyieyzxVDY+wWkPilSb2GfZiFiu1ZQwN70tz2UdQN0qXVmRG\n\
oqZ9MONV5USLws/88D7rh5vmFDIKyTkITICNak3DT1nvk1O22a1VrZHINTC7GL33\n\
5RhSs1p4qVZg5UPVetf6xbzPfk4tD/SLfUryCK+1sMxmvmdIN0/WRM1HTwKBgQDN\n\
F8FFJJQ0Cwa1JmjOJ/234MGr5A6tD+adwExvf8Fe4mlL2GhirLSFu49OXxb51R57\n\
6pgyzA0gg9IDCGQGDL2ScAJGimIL36mCmOBKreLCeJgCrcUdt58NtVwyksfRt1Qv\n\
oSFps27vE8FiWP73G4wkc3dQ9xthdJJsntLuUa7Z7QKBgEfglXGb7WER1IMc1odU\n\
4g1XMbtEtTdtdK5JaF2+09Ak/4JZILUb2HF1pqbVd6eU7ynnC7E2l4xbqOXe7t1h\n\
kGGBSpPwEfzUKhNKevh4KcrVMecG7q5n2hZvXlzkpgswaDMVnOyleYMMyLaajkzL\n\
DevHWeT81htrDXAJ5Ee8eYw0\n\
-----END PRIVATE KEY-----\n';



declare var setDataServiceCallBack;
declare var configureAttr;
declare var writeAttr;
declare var readAttr;
declare var connectDevice;
declare var disConnectDevice;
declare var setDeviceAccessLevel;
declare var setPwdToDevice;
declare var authenticateDevice;
declare var killMeFromJS;

@Injectable()
export class DataService {
    debugLogs = true;
    isABBFlavor = false;
    scanneddata:any;
    profilesKey = 'profiles';
    uiParams:UIParams   =  new UIParams();
    deviceParams:DeviceParams   =  new DeviceParams();
    networkParams:NetworkParams =  new NetworkParams();
    setDataServiceCallBackObj:any;
    connectDeviceObj:any;
    disConnectDeviceObj:any;
    authenticateDeviceObj:any;
    writeAttrObj:any;
    readAttrObj:any;
    configureAttrObj:any;
    killMeFromJSObj:any;
    setDeviceAccessLevelObj:any;
    setPwdToDeviceObj:any;
    public DeviceBuild = 1;
    activeComponent:any;
    iActiveComponent:any;
    headerComponent:any;
    readArray=[];
    readDoneArray=[];
    writeArray=[];
    writeDoneArray=[];
    readCount = 10;
    writeCount = 10;
    addData=[];
    sendData =  new Array<WriteData>();
    screenWidth;
    screenHeight;
    static dataService:DataService;
    constructor(private http:Http,public logger: LoggerService,private translater:i18nService) {
        if(this.DeviceBuild == 1)
            this.setDataServiceCallBackObj = new setDataServiceCallBack(this);
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
        DataService.dataService = this;
        this.checkDeviceMode();
        this.setCertData('');
        this.setKeyData('')
    }

    setIsAbbFlavor(flavor){
        this.isABBFlavor =  flavor;
    }

    getIsAbbFlavor(){
        return this.isABBFlavor;
    }

    checkDeviceMode(){
        let aindex =  navigator.platform.toLowerCase().indexOf('linux');
        let iindex = navigator.platform.toLowerCase().indexOf('iphone');
        //LAKSHMANA commented temporarily to simulate devices
        if( aindex >=  0 ||
        iindex >= 0){
            this.DeviceBuild = 1;
        }else {
            this.DeviceBuild = 0;
        }
    }
    saveToLocalStorage(key,value){
        localStorage.setItem(key,value);
    }

    readFromLocalStorage(key){
        return localStorage.getItem(key);
    }

    setCertData(data){
        if(this.DeviceBuild == 1){
            this.networkParams.certData = new Buffer(data);
        }
        else{
             this.networkParams.certData = new Buffer(bjCert);
        }
    }
    setKeyData(data){
        if(this.DeviceBuild ==1 ){
            this.networkParams.keyData = new Buffer(data);
        }
        else{
            this.networkParams.keyData = new Buffer(bjKey);
        }
    }

     str2ab(str) {
        var buf = new ArrayBuffer(str.length*2); 
        var bufView = new Uint16Array(buf);
        for (var i=0, strLen=str.length; i<strLen; i++) {
            bufView[i] = str.charCodeAt(i);
        }
        return buf;
    }

    getEOptionText(){
        if(this.uiParams.eOptionText == ''){
            this.uiParams.eOptionText = this.translater.translate('Save');
        }
        return this.uiParams.eOptionText;
    }

     setEOptionText(text){
        this.uiParams.eOptionText = text;
    }
    setScannedData(scanned){
        this.scanneddata = scanned;
        this.activeComponent.setScannedData();
    }
    getScannedData() {
        return this.scanneddata;
    }

    setSMMainTitle(title) {
        this.uiParams.smMainTitle = title;
    }
    getSMMainTitle() {
        return this.uiParams.smMainTitle;
    }

    setMainTitle(title) {
        this.uiParams.mainTitle = title;
    }
    getMainTitle() {
        return this.uiParams.mainTitle;
    }
    public initDevices() {
        this.loadDevices().then((devs) => {
            if(this.DeviceBuild == 1)
                this.uiParams.devicesObj.DevicesArray = [];
             else 
                this.uiParams.devicesObj.DevicesArray = devs;
        });
    }
   
    loadDevices() {
        return new Promise<Array<any>>(resolve => {
        this.http.get('assets/detectorslist.json').subscribe(response => {
                resolve(response.json().detectors);
            });
        });
    }

    getEDevParamsState() {
        return this.uiParams.eDevParamsChanged;
    }
    setEDevParamsState(paramsChanged) {
        this.uiParams.eDevParamsChanged = paramsChanged;
    }
    getDevice(i,installed) {
        if(installed){
            return this.uiParams.devicesObj.IDevicesArray[i];
        }else {
            return this.uiParams.devicesObj.DevicesArray[i];
        }
    }
    addDevice(device,installed) {
        let foundDevice = false;
        if(installed){
            for(let i = 0; i< this.uiParams.devicesObj.IDevicesArray.length; i++){
                if(device.btAddress == this.uiParams.devicesObj.IDevicesArray[i].btAddress){
                    this.uiParams.devicesObj.IDevicesArray[i] = device;
                    foundDevice = true;
                    break;
                }
            }
            if(foundDevice == false)
                this.uiParams.devicesObj.IDevicesArray.push(device)
        }else {
             for(let i = 0; i< this.uiParams.devicesObj.DevicesArray.length; i++){
                if(device.btAddress == this.uiParams.devicesObj.DevicesArray[i].btAddress){
                    this.uiParams.devicesObj.DevicesArray[i] = device;
                    foundDevice = true;
                    break;
                }
            }
            if(foundDevice == false)
                this.uiParams.devicesObj.DevicesArray.push(device);
        }
    }
    setDevices(devices,installed) {
        if(installed){
            this.clearDevices(installed);
            this.uiParams.devicesObj.IDevicesArray = devices;
            for(let i = 0; i < this.uiParams.devicesObj.IDevicesArray.length; i++){
                if(this.uiParams.devicesObj.ISelectedDevice != undefined &&  this.uiParams.devicesObj.ISelectedDevice.btAddress == this.uiParams.devicesObj.IDevicesArray[i].btAddress){
                    this.uiParams.devicesObj.IDeviceData = this.uiParams.devicesObj.IDevicesArray[i];
                    break;
                }
            }
        }else {
            this.clearDevices(installed);
            this.uiParams.devicesObj.DevicesArray = devices;
            for(let i = 0; i < this.uiParams.devicesObj.IDevicesArray.length; i++){
                if( this.uiParams.devicesObj.SelectedDevice != undefined && this.uiParams.devicesObj.SelectedDevice.btAddress == this.uiParams.devicesObj.DevicesArray[i].btAddress){
                    this.uiParams.devicesObj.DeviceData = this.uiParams.devicesObj.DevicesArray[i];
                    break;
                }
            }
        }
    }
    clearDevices(installed) {
        if(installed ){
            if(this.uiParams.devicesObj.IDevicesArray != undefined)
                this.uiParams.devicesObj.IDevicesArray.splice(0,this.uiParams.devicesObj.DevicesArray.length);
        }else {
            if(this.uiParams.devicesObj.DevicesArray != undefined){
                this.uiParams.devicesObj.DevicesArray.splice(0,this.uiParams.devicesObj.DevicesArray.length);
            }
        }
    }
    getDevices(installed){
        if(installed) {
            if(this.uiParams.devicesObj.IDevicesArray && (this.uiParams.devicesObj.IDevicesArray.length > 0)) {
                return this.uiParams.devicesObj.IDevicesArray;
            }
            else {
                return [];
            }
        }else {
            if(this.uiParams.devicesObj.DevicesArray && (this.uiParams.devicesObj.DevicesArray.length > 0)) {
                return this.uiParams.devicesObj.DevicesArray;
            }
            else {
                return [];
            }
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
         this.setSMMainTitle(itemTitle);
    }
    installerPasswordChanged(val){
        this.uiParams.installpwdChanged = val;
    }
    userPasswordChanged(val){
        this.uiParams.userPwdChanged = val;
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
    getShowEModal() {
        return this.uiParams.showEModal;
    }
    setShowEModal(item) {
        this.uiParams.showEModal = item;
    }

    getEDialogInputHint(){
        return this.uiParams.inputHint;
    }

    setEDialogInputHint(hint){
        this.uiParams.inputHint = hint;
    }
    setProfileName(profilename){
        this.uiParams.profileName = profilename;
    }

    getProfileName(){
        return this.uiParams.profileName;
    }

    getTranslatedString(in_string){
        return this.translater.translate(in_string);
    }
    getSubMenuItems() {
        if(this.uiParams.profile == 'user') {
            if(this.isABBFlavor ==  false){
                let menuItems: Array<SubMenuItem> = [ 
                    new SubMenuItem(this.translater.translate('Help'),'help'),
                    new SubMenuItem(this.translater.translate('About Busch-Jaeger'),'about'), 
                    new SubMenuItem(this.translater.translate('Switch mode'),'switch_mode'), 
                ];
                return menuItems;
            }else {
                let menuItems: Array<SubMenuItem> = [ 
                    new SubMenuItem(this.translater.translate('Help'),'help'),
                    new SubMenuItem(this.translater.translate('About ABB'),'about'), 
                    new SubMenuItem(this.translater.translate('Switch mode'),'switch_mode'), 
                ];
                return menuItems;
            }
        }else {
            if(this.isABBFlavor ==  false){
                let menuItems: Array<SubMenuItem> = [ 
                    new SubMenuItem(this.translater.translate('Installed devices'),'installed_devices'),
                    new SubMenuItem(this.translater.translate('User profiles'),'user_profiles'), 
                    new SubMenuItem(this.translater.translate('Switch mode'),'switch_mode'), 
                    new SubMenuItem(this.translater.translate('Help'),'help'),
                    new SubMenuItem(this.translater.translate('Sync with my BUSCH-JAEGER'),'sync'),
                    new SubMenuItem(this.translater.translate('About Busch-Jaeger'),'about'),
                ];
                return menuItems;
            }else {
                let menuItems: Array<SubMenuItem> = [ 
                    new SubMenuItem(this.translater.translate('Installed devices'),'installed_devices'),
                    new SubMenuItem(this.translater.translate('User profiles'),'user_profiles'), 
                    new SubMenuItem(this.translater.translate('Switch mode'),'switch_mode'), 
                    new SubMenuItem(this.translater.translate('Help'),'help'),
                    new SubMenuItem(this.translater.translate('Sync with my ABB'),'sync'),
                    new SubMenuItem(this.translater.translate('About ABB'),'about'),
                ];
                return menuItems;
            }
        }
    }
/****************  DEVICE INFO APIs specific to each device ******************/

    public setSelectedDevice(device,installed) {
        if(installed) {
            this.uiParams.devicesObj.ISelectedDevice = device;
        } else {
            this.uiParams.devicesObj.SelectedDevice =  device;
        }
    }
    public getSelectedDevice(installed) {
        if(installed) {
            return this.uiParams.devicesObj.ISelectedDevice;
        }else {
            return this.uiParams.devicesObj.SelectedDevice;
        }
    }
    public initDeviceData(installed){
        this.logger.log('initDeviceData called')
    this.loadDeviceData(installed).then((data) => {
            if(installed) {
                this.uiParams.devicesObj.IDevicesArray = data;
                this.iJsonLoadEmit();
            }else {
                this.logger.log('initDeviceData  callback called')
                this.uiParams.devicesObj.DeviceData = data;
                this.jsonLoadEmit();
            }
        });
    }


 setHeaderComponent(component) {
        this.headerComponent = component;
    }

    getHeaderComponent() {
        if(this.headerComponent != undefined) {
            return this.headerComponent;
        }
    }

    setActiveComponent(component) {
        this.activeComponent = component;
    }

    setIActiveComponent(component){
        this.iActiveComponent = component;
    }
    

    notifyActiveComponentWithBLEdata() {
        if(this.activeComponent != undefined) {
            this.activeComponent.onBLEdata();
             this.setEDevParamsState(0)
        }
    }

    setBLEDataToService(data,responseType) {
        let indata;
        if(data != undefined && data.datas != undefined)
            indata = data.datas;
        switch (responseType){
            case SCCP_COMMAND.READ_ATTRIBUTE_RESPONSE:
                let readDoneData = [];
                for(let i =0 ; i < indata.length; i++) {
                    let atrType = indata[i].attrType;
                    let atrValue = indata[i].attrValue;
                    readDoneData.push(atrType);
                    this.setBLEdataOnDeviceData(atrType,atrValue);
                }
                if(this.readArray.length > this.readCount){
                    this.readArray = this.readArray.slice(this.readCount,this.readArray.length);
                }
                else {
                    this.readArray = [];
                }  
                if(this.readArray.length > 0){
                    this.readData(this.readArray);
                }else {
                    this.putDevicesToCloud(false);
                    this.notifyActiveComponentWithBLEdata()
                }
            break;
            case SCCP_COMMAND.WRITE_ATTRIBUTE_RESPONSE:
                if(this.writeArray.length > this.writeCount){
                    this.writeArray = this.writeArray.slice(this.writeCount,this.writeArray.length);
                    this.sendData = this.sendData.slice(this.writeCount,this.sendData.length);
                    this.uiParams.devicesObj.DeviceData.last_updated=(new Date).getTime();
                }
                else {
                    this.writeArray = [];
                    this.sendData = [];
                }  
                
                if(this.writeArray.length > 0){
                    this.sendChangedParams();
                }else {
                    this.notifyActiveComponentWithBLEdata()
                    this.putDevicesToCloud(false);
                }
            break;
            case SCCP_COMMAND.STANDARD_RESPONSE:
            break;
            case SCCP_COMMAND.AUTH_GEN_RANDOM_RESPONSE:
            break;
            case SCCP_COMMAND.CONFIGURE_REPORTING_RESPONSE:
            break;
            default:
            break;
        }
    }

    onInstallerPwdSetSuccess(){
        this.activeComponent.onInstallerPwdSetSuccess();
    }
    onInstallerPwdSetFailed(){
        this.activeComponent.onInstallerPwdSetFailed();
    }
     onUserPwdSetSuccess(){
        this.activeComponent.onInstallerPwdSetSuccess();
    }
    onUserPwdSetFailed(){
        this.activeComponent.onInstallerPwdSetFailed();
    }
    onInstallerAccessSuccess(){
        this.activeComponent.onInstallerAccessSuccess();
    }
    onInstallerAccessDenied(){
        this.activeComponent.onInstallerAccessDenied();
    }
    onUserAccessSuccess(){
        this.activeComponent.onUserAccessSuccess();
    }
    onUserAccessDenied(){
        this.activeComponent.onUserAccessDenied();
    }
    setAuthGenData(indata){
        let authData = [];
        if(indata.length > 0){
            for(let i = 6; i < 22; i++){
                authData.push(indata[i]);
            }
        }
        this.setAuthChallenge(authData);
        if(this.debugLogs ==  true)
            this.logger.log('gendata is ' + new Buffer(authData).toString('hex').toUpperCase())
    }
    connectDevice(btaddress){
        this.connectDeviceObj = new connectDevice(btaddress);
        this.setAccessLevelRequsetedAddress(btaddress)
    }
    disConnectDevice(){
        if(this.deviceParams.deviceConnected ==  true){
            this.disConnectDeviceObj = new disConnectDevice()
            this.setAccessLevelRequsetedAddress('')
        }
    }

    setAccessLevelRequsetedAddress(address){
        if(this.debugLogs == true)
            this.logger.log("btAddress Selecetd is " + address)
        this.deviceParams.accessLevelRequsetedAddress = address;
    }
    getAccessLevelRequsetedAddress(){
        return this.deviceParams.accessLevelRequsetedAddress;
    }

    setAccessLevel(){
        this.logger.log("lakshmana  setAccessLevel called ")
        setTimeout(()=> 
            this.setAccessLevelNow(), 250
        )
    }

    setAccessLevelNow(){
        this.logger.log("lakshmana  setAccessLevelNow called ")
        if(this.getProfile()=='user'){
            this.setDeviceAccessLevelObj = new setDeviceAccessLevel(0x01)
        }else{
            this.setDeviceAccessLevelObj = new setDeviceAccessLevel(0x02)
        }
    }
    onAccessLevelUpdate(accessLevel){
        this.logger.log('onAccessLevelUpdate data service')
        if(this.deviceParams.deviceConnected == true){
            this.logger.log('onAccessLevelUpdate data service1')
            if(this.activeComponent != undefined) {
                this.logger.log('onAccessLevelUpdate data service2')
                this.activeComponent.onAccessLevelUpdate(accessLevel);
            }
        }
    }
    onDeviceConnected(deviceAddress) {
        this.deviceParams.deviceConnected = true;
        if(this.activeComponent != undefined) {
            this.activeComponent.onDeviceConnected(deviceAddress);
        }
        this.setAccessLevel();
    }

    onDeviceDisconnected(deviceAddress){
        this.deviceParams.deviceConnected = false;
    }

    getDeviceConnectionState(){
        return this.deviceParams.deviceConnected;
    }

    readData(data) {
        if(this.DeviceBuild == 1){
            if(this.readArray.length == 0) {
                this.readArray = data;
            }
            if(this.readArray.length <= this.readCount) {
                this.readAttrObj =  new readAttr(this.readArray);
            }else {
                let partArray =  this.readArray.slice(0, this.readCount-1);
                this.readAttrObj =  new readAttr(partArray);
            }
        }else {

        }
    }

    configureData(data, length){
        this.configureAttrObj =  new configureAttr(data);
    }


    public getDevicedata(installed) {
        if(installed) {
            return this.uiParams.devicesObj.IDeviceData;
        }else {
            return this.uiParams.devicesObj.DeviceData;
        }
    }
    loadDeviceData(installed) {
        if(installed){
            this.getDevicesFromCloud()
        }else {
            this.logger.log('loadDeviceData called')
            return new Promise<Array<any>>(resolve => {
                this.http.get('assets/params.json').subscribe(response => {
                        resolve(response.json());
                    });
                });
        }
    }

    jsonLoadEmit() {
        this.logger.log('jsonLoadEmit called')
        this.activeComponent.jsonOnLoad(this.activeComponent);
    }
    iJsonLoadEmit() {
        this.uiParams.subMenuComponent.jsonOnLoad(this.uiParams.subMenuComponent)
    }

    resetSendData() {
        this.sendData = [];
    }
    addToSendData(paramBytes) {
        this.setEDevParamsState(1)
        this.addData = [];
        for(let i =1; i < paramBytes.length; i++){
            this.addData.push(paramBytes[i]);
        }
        let mydata = new WriteData(paramBytes[0],this.addData);
        if(this.writeArray.length == 0) {
            this.writeArray.push(paramBytes[0])
            this.sendData.push(mydata);
        }else {
            let exisingindex = this.writeArray.indexOf(paramBytes[0]) 
            if(exisingindex > -1) {
                this.sendData[exisingindex] = mydata;
            } else {
                this.writeArray.push(paramBytes[0])
                this.sendData.push(mydata);
            }
        }
    }
    setTobeSetInstallerPwd(val){
        this.uiParams.toBeSetInstallerPwd =  val;
    }
     setTobeSetUserPwd(val){
        this.uiParams.toBeSetUserPwd =  val;
    }
    sendChangedParams() {
        if(this.uiParams.installpwdChanged || this.uiParams.userPwdChanged){
            this.resetWriteArray();
            this.resetSendData();
            if(this.uiParams.installpwdChanged){
                this.setDevicePwd(this.uiParams.toBeSetInstallerPwd,'electrician');
            }else {
                if(this.uiParams.userPwdChanged){
                    this.setDevicePwd(this.uiParams.toBeSetUserPwd,'user');
                }
            }
        }else {
            if(this.writeArray.length > 0 && this.DeviceBuild == 1) {
                if(this.activeComponent != undefined){
                    this.activeComponent.setLoadingDataDone(false);
                }
                let dataBytes = [];
                if(this.writeArray.length > this.writeCount) {
                    for(let i = 0; i < this.writeCount; i++) {
                        let idata = this.sendData[i];
                        dataBytes.push(idata.attrType);
                        for(let j =0; j<idata.attrValue.length; j++){
                            dataBytes.push(idata.attrValue[j]);
                        }
                    }
                }
                else {
                    for(let i = 0; i < this.writeArray.length; i++) {
                        let idata = this.sendData[i];
                        dataBytes.push(idata.attrType);
                        for(let j =0; j<idata.attrValue.length; j++){
                            dataBytes.push(idata.attrValue[j]);
                        }
                    }
                }
                this.writeAttrObj =  new writeAttr(dataBytes);
            }else {
                this.setEDevParamsState(0)
            }
        }
    }

    killMe(){
        this.killMeFromJSObj =  new killMeFromJS();
    }
    resetReadArray(){
        this.readArray = [];
    }

    resetWriteArray(){
        this.writeArray = [];
    }

    setAuthChallenge(val){
        this.deviceParams.auth_challenge = val;
    }

    getAuthChallenge(){
        return this.deviceParams.auth_challenge;
    }

    authenticateDevice(devicePwd){
        if(this.getProfile()=='electrician'){
            let saltbufStart;
            let saltBufByteStr = "";
            let addressSalt ="";

            if(this.uiParams.devicesObj == undefined ||
                this.uiParams.devicesObj.DeviceData == undefined ||
                this.uiParams.devicesObj.DeviceData.btAddress == undefined){
                saltbufStart = this.getAccessLevelRequsetedAddress();
                if(this.debugLogs == true)
                    this.logger.log('seleced address 1111 ' + saltbufStart);
            }else {
                saltbufStart = this.uiParams.devicesObj.DeviceData.btAddress;
                if(this.debugLogs == true)
                    this.logger.log('seleced address 2222 ' + saltbufStart);
            }
            let addRLenght =  saltbufStart.length;
            let PBKDF2Hash;
            for(let i =0; i < addRLenght; i++){
            if(saltbufStart.charAt(i) != ':')
                saltBufByteStr =  saltBufByteStr + saltbufStart.charAt(i);
            }
            let addBufByteStrLen = saltBufByteStr.length;
            for(let  j =0; j < 64; j++){
                addressSalt =  addressSalt + saltBufByteStr.charAt(j%saltBufByteStr.length);
            }
            var saltbuf = new Buffer(addressSalt,'hex');
            var bytearrayInstaller = new Buffer(devicePwd.length);
            for(var i=0; i < devicePwd.length; i++) {
                bytearrayInstaller[i] = devicePwd.charCodeAt(i);
            }
            // First, create a PBKDF2 "key" containing the password
            window.crypto.subtle.importKey(
                "raw",
                bytearrayInstaller,
                {"name": "PBKDF2"},
                false,
                ["deriveKey"]).
            then(function(baseKey){
                var saltbuf = new Buffer(addressSalt,'hex');
                return window.crypto.subtle.deriveKey(
                    {
                        "name": "PBKDF2",
                        "salt": saltbuf,
                        "iterations": 1000,
                        "hash": 'SHA-1'
                    },
                    baseKey,
                    {"name": "AES-CBC", "length": 256}, // Key we want.Can be any AES algorithm ("AES-CTR", "AES-CBC", "AES-CMAC", "AES-GCM", "AES-CFB", "AES-KW", "ECDH", "DH", or "HMAC")
                    true,                               // Extractable
                    ["encrypt", "decrypt"]              // For new key
                    );
            }).then(function(aesKey) {
                // Export it so we can display it
                return window.crypto.subtle.exportKey("raw", aesKey);
            }).then(function(keyBytes) {
                var byteArray3 = new Buffer(keyBytes);
                var byteString = byteArray3.toString('hex').toUpperCase();
                if(byteString.length == 64){
                    if(DataService.getDataService().getAuthChallenge().length > 0)
                    {
                        var genArray = new Buffer(DataService.getDataService().getAuthChallenge());
                        let preHashStr = genArray.toString('hex').toUpperCase() + addressSalt.toUpperCase() + byteArray3.toString('hex').toUpperCase();
                        if(DataService.getDataService().debugLogs == true){
                            DataService.getDataService().logger.log('install pre hash str ' + preHashStr);
                        } 
                        for (var hashBytes = [], c = 0; c < preHashStr.length; c += 2)
                            hashBytes.push(parseInt(preHashStr.substr(c, 2), 16));   
                        crypto.subtle.digest("SHA-256", new Buffer(hashBytes)).then(function (hash) {
                        var hexCodes = [];
                        var byteArray31 = new Buffer(hash);
                        let result = [];
                        for(let j =0; j < 32; j++){
                            result.push(byteArray31[j])
                        }
                        if(DataService.getDataService().DeviceBuild == 1)
                            DataService.getDataService().authenticateDeviceObj = new authenticateDevice(result,32,true)
                        });
                    }else {
                        DataService.getDataService().logger.log("SHA-256 could not deliver stuff")
                    }
                }
            });
        }if(this.getProfile()=='user'){
            let saltbufStart;
            let saltBufUserByteStr = "";
            let userAddressSalt ="";
            if(this.uiParams.devicesObj == undefined ||
                this.uiParams.devicesObj.DeviceData == undefined ||
                this.uiParams.devicesObj.DeviceData.btAddress == undefined){
                saltbufStart = this.getAccessLevelRequsetedAddress();
                if(this.debugLogs == true)
                    this.logger.log('seleced address 1111 ' + saltbufStart);
            }else {
                saltbufStart = this.uiParams.devicesObj.DeviceData.btAddress;
                if(this.debugLogs == true)
                    this.logger.log('seleced address 2222 ' + saltbufStart);
            }
            let addRLenght =  saltbufStart.length;

            for(let i =0; i < addRLenght; i++){
            if(saltbufStart.charAt(i) != ':')
                saltBufUserByteStr =  saltBufUserByteStr + saltbufStart.charAt(i);
            }
            let addBufByteStrLen = saltBufUserByteStr.length;
            for(let  j =0; j < 64; j++){
                userAddressSalt =  userAddressSalt + saltBufUserByteStr.charAt(j%saltBufUserByteStr.length);
            }
            var byteArrayuser = new Buffer(32);
            for(var i=0; i < devicePwd.length; i++) {
                byteArrayuser[i] = devicePwd.charCodeAt(i);
            }
            for(var ni = devicePwd.length; ni<32; ni++){
                byteArrayuser[i] = 0x00;
            }
            if(DataService.getDataService().debugLogs ==  true){
                 DataService.getDataService().logger.log('user pwd auth is ' + byteArrayuser.toString('hex'))
             }
             if(DataService.getDataService().getAuthChallenge().length > 0)
             {
                var genArray = new Buffer(DataService.getDataService().getAuthChallenge());
                let preHashStr = genArray.toString('hex').toUpperCase() + userAddressSalt.toUpperCase() + byteArrayuser.toString('hex').toUpperCase();
                for (var hashBytes = [], c = 0; c < preHashStr.length; c += 2)
                    hashBytes.push(parseInt(preHashStr.substr(c, 2), 16));
                    DataService.getDataService().logger.log('user prehash str is ' + preHashStr)
                    crypto.subtle.digest("SHA-256", new Buffer(hashBytes)).then(function (hash) {
                    var hexCodes = [];
                    var byteArray31 = new Buffer(hash);
                    let result = [];
                    for(let j =0; j < 32; j++){
                        result.push(byteArray31[j])
                    }
                    DataService.getDataService().logger.log('result str for user ' + byteArray31.toString('hex'))
                    if(DataService.getDataService().DeviceBuild == 1)
                        DataService.getDataService().authenticateDeviceObj = new authenticateDevice(result,32,false)
                });
             }
        }
    }

    setDevicePwd(setPWD,profile){
        if(profile=='electrician'){
            let saltbufStart;
            if(this.uiParams.devicesObj == undefined ||
                this.uiParams.devicesObj.DeviceData == undefined ||
                this.uiParams.devicesObj.DeviceData.btAddress == undefined){
                saltbufStart = this.getAccessLevelRequsetedAddress();
                if(this.debugLogs == true)
                    this.logger.log('seleced address abc ' + saltbufStart);
            }else {
                saltbufStart = this.uiParams.devicesObj.DeviceData.btAddress;
                if(this.debugLogs == true)
                    this.logger.log('seleced address def ' + saltbufStart);
            }
            let addRLenght =  saltbufStart.length;
            let saltBufByteStr = "";
            let setIAddressSalt ="";
            let PBKDF2Hash;
            for(let i =0; i < addRLenght; i++){
            if(saltbufStart.charAt(i) != ':')
                saltBufByteStr =  saltBufByteStr + saltbufStart.charAt(i);
            }
            let addBufByteStrLen = saltBufByteStr.length;
            for(let  j =0; j < 64; j++){
                setIAddressSalt =  setIAddressSalt + saltBufByteStr.charAt(j%saltBufByteStr.length);
            }
            var saltt = ""
            var saltbuf = new Buffer(setIAddressSalt,'hex');
            var byteArraySInstaller = new Buffer(setPWD.length);
            for(var i=0; i < setPWD.length; i++) {
                byteArraySInstaller[i] = setPWD.charCodeAt(i);
            }
            // First, create a PBKDF2 "key" containing the password
            window.crypto.subtle.importKey(
                "raw",
                byteArraySInstaller,
                {"name": "PBKDF2"},
                false,
                ["deriveKey"]).
            then(function(baseKey){
                // Derive a key from the password
                var saltbuf = new Buffer(setIAddressSalt,'hex');
                return window.crypto.subtle.deriveKey(
                    {
                        "name": "PBKDF2",
                        "salt": saltbuf,
                        "iterations": 1000,
                        "hash": 'SHA-1'
                    },
                    baseKey,
                    {"name": "AES-CBC", "length": 256}, // Key we want.Can be any AES algorithm ("AES-CTR", "AES-CBC", "AES-CMAC", "AES-GCM", "AES-CFB", "AES-KW", "ECDH", "DH", or "HMAC")
                    true,                               // Extractable
                    ["encrypt", "decrypt"]              // For new key
                    );
            }).then(function(aesKey) {
                // Export it so we can display it
                return window.crypto.subtle.exportKey("raw", aesKey);
            }).then(function(keyBytes) {
                var byteArray3 = new Buffer(keyBytes);
                var byteString = byteArray3.toString('hex').toUpperCase();
                if(byteString.length == 64){
                    let result = [];
                    for(let j =0; j < 32; j++){
                        result.push(byteArray3[j] ^ saltbuf[j])
                    }
                    if(DataService.getDataService().DeviceBuild == 1)
                        DataService.getDataService().setPwdToDeviceObj = new setPwdToDevice(result,32,true)
                }else {
                    DataService.getDataService().logger.log("PBKDF2 could not deliver stuff")
                }
            });
        }if(profile=='user'){
            let saltbufStart;
            if(this.uiParams.devicesObj == undefined ||
                this.uiParams.devicesObj.DeviceData == undefined ||
                this.uiParams.devicesObj.DeviceData.btAddress == undefined){
                saltbufStart = this.getAccessLevelRequsetedAddress();
                if(this.debugLogs == true)
                    this.logger.log('seleced address abc ' + saltbufStart);
            }else {
                saltbufStart = this.uiParams.devicesObj.DeviceData.btAddress;
                if(this.debugLogs == true)
                    this.logger.log('seleced address def ' + saltbufStart);
            }
            let addRLenght =  saltbufStart.length;
            let saltBufByteStr = "";
            let finalUserSalt ="";
            for(let i =0; i < addRLenght; i++){
            if(saltbufStart.charAt(i) != ':')
                saltBufByteStr =  saltBufByteStr + saltbufStart.charAt(i);
            }
            let addBufByteStrLen = saltBufByteStr.length;
            for(let  j =0; j < 64; j++){
                finalUserSalt =  finalUserSalt + saltBufByteStr.charAt(j%saltBufByteStr.length);
            }
            let pwdBytes = "";
            for(let k =0; k < setPWD.length; k++){
                let charChode = setPWD.charCodeAt(k);
                pwdBytes = pwdBytes + charChode.toString(16);
            }
             let mDataBuff = new Buffer(pwdBytes,'hex');
             let pDataBuff = new Buffer(finalUserSalt,'hex');
             if(DataService.getDataService().debugLogs ==  true){
                 DataService.getDataService().logger.log('user pwd set is ' + mDataBuff.toString('hex'))
             }
             let result  = [];
            for(let k =0; k < 32; k++){
                let a =  mDataBuff[k];
                let b =  pDataBuff[k];
                result.push(a ^ b)
            }
            if(DataService.getDataService().DeviceBuild == 1)
                DataService.getDataService().setPwdToDeviceObj = new setPwdToDevice(result,32,false)
        }
    }

    getPwdFromDevice(){
        if(this.getProfile()=='electrician'){

        }if(this.getProfile()=='user'){
            
        }
    }
    doAuthGenRequest(){
        if(this.getProfile()=='electrician'){

        }if(this.getProfile()=='user'){
            
        }
    }

    getUTCDateFormat(){
        var date = new Date();
        return date.toISOString().split('.')[0];
    }

    handleGetIResponseData(data){
        if(data != undefined){
            let strFormat =  JSON.stringify(data);
            let Detectors = data.detectors;
            this.uiParams.userLoggedIn = true;
            this.uiParams.lastSynced = data._updated_at.split('+')[0];
            let localDate = this.getUTCDateFormat();
            let syncdate1 = new Date(localDate)
            let syncdate2 = new Date(this.uiParams.lastSynced)
            if(syncdate1 > syncdate2){
            }else if (syncdate1 < syncdate2){
            }else {
            }
            this.setDevices(Detectors,true);
            if(this.uiParams.subMenuComponent != undefined){
                this.uiParams.subMenuComponent.onSucessfullSync(this.uiParams.lastSynced);
                this.iJsonLoadEmit();
            }
        }
    }


   getFormattedDate() {
        var date = new Date();
        var str = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
        return str;
    }

    handleGetResponseData(data){
        if(data != undefined){
            let strFormat =  JSON.stringify(data);
            let Detectors = data.detectors;
            if(Detectors != undefined ){
                this.uiParams.userLoggedIn = true;
                this.uiParams.lastSynced = data._updated_at.split('+')[0];
                let localDate = this.getUTCDateFormat();
                let syncdate1 = new Date(localDate)
                let syncdate2 = new Date(this.uiParams.lastSynced)
                if(syncdate1 > syncdate2){
                }else if (syncdate1 < syncdate2){
                }else {
                }
                this.setDevices(Detectors,true);
                if(this.uiParams.subMenuComponent != undefined)
                    this.uiParams.subMenuComponent.onSucessfullSync(this.uiParams.lastSynced);
            }
        }
    }
    handlePutResponseData(data){
        if(data != undefined){
        let strFormat =  JSON.stringify(data);
        let Detectors = data.detectors;
            if(Detectors != undefined ){
                this.uiParams.userLoggedIn = true;
                this.uiParams.lastSynced = data._updated_at.split('+')[0];
                let localDate = this.getUTCDateFormat();
                let syncdate1 = new Date(localDate)
                let syncdate2 = new Date(this.uiParams.lastSynced)
                if(syncdate1 > syncdate2){
                }else if (syncdate1 < syncdate2){
                }else {
                }
                this.setDevices(Detectors,true);
                if(this.uiParams.subMenuComponent != undefined)
                    this.uiParams.subMenuComponent.onSucessfullSync(this.uiParams.lastSynced);
            }else {
                this.uiParams.userLoggedIn = true;
                this.uiParams.lastSynced = data._updated_at.split('+')[0];
                let localDate = this.getUTCDateFormat();
                let syncdate1 = new Date(localDate)
                let syncdate2 = new Date(this.uiParams.lastSynced)
                if(syncdate1 > syncdate2){
                }else if (syncdate1 < syncdate2){
                }else {
                }
                if(this.uiParams.subMenuComponent != undefined)
                    this.uiParams.subMenuComponent.onSucessfullSync(this.uiParams.lastSynced);
            }
        }
    }

    loadInstalledDeviceInfo(item){
    }

    checkIfDeviceExistsinCloud(btAddress){
    }

    checkAndAddDeviceToInstalledDevices(){
        this.getDevicesFromCloudAndAdd()
    }
 

    loadProfilesData(){
        if(this.networkParams.useCertAuth){

        }else {
            if(this.uiParams.userLoggedIn){

            }
        }
    }

    pushProfilesData(){
        if(this.networkParams.useCertAuth){

        }else {
            if(this.uiParams.userLoggedIn){
                
            }
        }
    }

    syncProfiles(){
        this.getProfilesAndAddIfNeeded()
    }
    getProfilesAndAddIfNeeded(){
        if(this.networkParams.useCertAuth){
             let path =  this.networkParams.certProfilesPath;
            this.getDataAndAddProfileIfneededWithCert(path);
        }else {
            if(this.uiParams.userLoggedIn){
            let url = this.networkParams.profilesUrl;
            this.getDataAndAddProfileIfneeded(url);
            }
        }
    }
    getLastSyncedTime(){
        return this.uiParams.lastSynced;
    }
    isUserLoggedIn(){
        return this.uiParams.userLoggedIn;
    }
    handleResponseError(err){
        if(this.uiParams.subMenuComponent != undefined)
            this.uiParams.subMenuComponent.onErrorMessage(err.status)
    }
    handleIResponseError(err){
        if(this.uiParams.subMenuComponent != undefined)
            this.uiParams.subMenuComponent.onErrorMessage(err.status)  
    }

    setAutoSync(val){
        this.uiParams.autoSync = val;
    }
    getAutoSync(){
        return this.uiParams.autoSync;
    }

    setSubMenuComponent(component){
        this.uiParams.subMenuComponent = component;
    }
    syncDevicesFromCloud(uname, pwd,component){
        if(uname.length > 0)
            this.networkParams.username = uname;
        if(pwd.length > 0)
            this.networkParams.password = pwd;
        
        this.uiParams.subMenuComponent = component;
        this.getDevicesFromCloud();
    }
    syncDataNow(local){
        if(local){
            this.putDevicesToCloud(false);
        }
        else{
            this.getDevicesFromCloud();
        }
    }
     getDataAndAddProfileIfneededWithCert(httpPath){
        let httpOptions = this.makeCertHeaders();
        httpOptions.path = httpPath;
        httpOptions.method = 'GET';
        var req = https.request(httpOptions, function(res) {
            res.on('data', function(data) {
                this.handleGetDataAndAddDeviceWithCert(data);
            });
        });
        req.end();
        req.on('error', function(e) {
                this.handleResponseError(e)
        });
    }

    getDataAndAddProfileIfneeded(getUrl){
        let getData =  this.http.get(getUrl, this.makeHeaders()) 
            .map(res => {
                if(res.status < HTTPCODES.SUCCESS_START || res.status > HTTPCODES.SUCCESS_END) {
                    return res.status;
                } 
                else {
                    return res.json();
                }
            })
            .subscribe(
                (data) => {
                    this.handleGetDataAndAddProfile(data);
                }, 
                (err) => {
                    this.handleResponseError(err)
                }
            ); 
    }

    
    handleGetDataAndAddProfileWithCert(data){
        let strFormat =  JSON.stringify(data);
        let profiles = data.profiles;
        if(profiles != undefined ){
            this.uiParams.userLoggedIn = true;
            this.uiParams.lastSynced = data._updated_at.split('+')[0];
            let localDate = JSON.parse(this.readFromLocalStorage(this.profilesKey))._updated_at.split('+')[0];
            let syncdate1 = new Date(localDate)
            let syncdate2 = new Date(this.uiParams.lastSynced)
            if(syncdate1 > syncdate2){
                this.updateProfilesToCloud();
            }else if (syncdate1 < syncdate2){
                this.saveToLocalStorage(this.profilesKey,strFormat);
            }else {
            }
        }
    }

    handleGetDataAndAddProfile(data){
        let strFormat =  JSON.stringify(data);
        let profiles = data.profiles;
        if(profiles != undefined ){
            this.uiParams.userLoggedIn = true;
            this.uiParams.lastSynced = data._updated_at.split('+')[0];
            let localDate = JSON.parse(this.readFromLocalStorage(this.profilesKey))._updated_at.split('+')[0];
            let syncdate1 = new Date(localDate)
            let syncdate2 = new Date(this.uiParams.lastSynced)
            if(syncdate1 > syncdate2){
                this.updateProfilesToCloud();
            }else if (syncdate1 < syncdate2){
                 this.saveToLocalStorage(this.profilesKey,strFormat);
            }else {
            }
        }
    }

    addProfile(){
        let profilesData = JSON.parse(this.readFromLocalStorage(this.profilesKey));
        let localDate = this.getUTCDateFormat();
        this.uiParams.devicesObj.ProfilesArray = profilesData.profiles;
        this.uiParams.devicesObj.ProfilesArray.push(this.uiParams.devicesObj.DeviceData);
        profilesData._updated_at = localDate;
        profilesData.profiles = this.uiParams.devicesObj.ProfilesArray;
        this.saveToLocalStorage(this.profilesKey,profilesData);
    }

    updateProfile(){
        let profilesData = JSON.parse(this.readFromLocalStorage(this.profilesKey));
        let localDate = this.getUTCDateFormat();
        this.uiParams.devicesObj.ProfilesArray = profilesData.profiles;
        this.uiParams.devicesObj.ProfilesArray.push(this.uiParams.devicesObj.DeviceData);
        profilesData._updated_at = localDate; 
        for(let i =0; i < this.uiParams.devicesObj.ProfilesArray.length; i++){
            if(this.uiParams.devicesObj.ProfilesArray[i].profileName == this.uiParams.devicesObj.DeviceData.profileName){
                this.uiParams.devicesObj.ProfilesArray[i] = this.uiParams.devicesObj.DeviceData;
            }
        }
        profilesData.profiles = this.uiParams.devicesObj.ProfilesArray;
        this.saveToLocalStorage(this.profilesKey,profilesData);
    }
    updateProfilesToCloud(){
        if(this.networkParams.useCertAuth){
            this.uiParams.devicesObj.ProfilesObj = {
                'profiles':this.uiParams.devicesObj.ProfilesArray
            }
            let bodyString = JSON.stringify(this.uiParams.devicesObj.ProfilesObj);
            let path = this.networkParams.certProfilesPath;
            this.putDataWithCert(this.networkParams.certProfilesPath,bodyString)
        }else {
            if(this.uiParams.userLoggedIn){
                this.uiParams.devicesObj.ProfilesObj = {
                    'profiles':this.uiParams.devicesObj.ProfilesArray
                }
                let bodyString = JSON.stringify(this.uiParams.devicesObj.ProfilesObj);
                let url = this.networkParams.profilesUrl;
                this.putData(url,bodyString);
            }
        }
    }
    makeHeaders(){
        let headers      = new Headers({ 'Content-Type': 'application/json',
                'Authorization': 'Basic ' + new Buffer(this.networkParams.username + ':' + this.networkParams.password).toString('base64')
            }); 
            
        let options       = new RequestOptions({ headers: headers });
        return options;
    }

    makeCertHeaders(){
        let options = {
            hostname: this.networkParams.certDetectorHostName,
            port: this.networkParams.detectorPort,
            key : this.networkParams.keyData,
            cert: this.networkParams.certData,
            method:'',
            path:'',
        }
        return options;
    }
    
    static getDataService(){
       return DataService.dataService;
    }
    getIDataWithCert(httpPath){
        let httpOptions = this.makeCertHeaders();
        httpOptions.path = httpPath;
        httpOptions.method = 'GET';
        var req = https.request(httpOptions, function(res) {
            res.on('data', function(data) {
                DataService.getDataService().handleGetIResponseData(data);
            });
            res.on('error',function(data){
                DataService.getDataService().handleGetIResponseData(data);
            });
            res.on('finish',function(data){
                DataService.getDataService().handleGetIResponseData(data);
            });
            res.on('end',function(data){
                DataService.getDataService().handleGetIResponseData(data);
            });
        });
        req.end();
        req.on('error', function(e) {
            DataService.getDataService().handleIResponseError(e)
        });
        req.on('finish',function(e){
            DataService.getDataService().handleIResponseError(e);
        });
    }

    checkMyError(error:Error){
        this.logger.log(error.stack);
    }
    checkMyData(data:String){
        this.logger.log(data);
    }

    getDataWithCertReq(){
        var options = {  
            url: 'https://api.my-staging.busch-jaeger.de/api/user/key-value/presence-detector-backup/devices',
            cert: this.networkParams.certData,
            port: 443,
            key: this.networkParams.keyData,
            method: 'GET',
        };
        request.get(options,function(error, response, body){
            this.logger.log('some response came'  + '   response ' + response.statusCode + ' message ' + response.statusMessage);
        }); 
    }

    getDataWithCert(httpPath){
        let httpOptions = this.makeCertHeaders();
        httpOptions.path = httpPath;
        httpOptions.method = 'GET';
        var req = https.request(httpOptions, function(res) {
            res.addListener('data',DataService.getDataService().checkMyData)
            res.addListener('error',DataService.getDataService().checkMyError)
        });
        req.end();
        req.addListener('data',DataService.getDataService().checkMyData)
        req.addListener('error',DataService.getDataService().checkMyError)
    }

    putDataWithCert(httpPath,bodyData){
        let httpOptions = this.makeCertHeaders();
        httpOptions.path = httpPath;
        httpOptions.method = 'PUT';
        var req = https.request(httpOptions, function(res) {
            res.on('data', function(data) {
                DataService.getDataService().handlePutResponseData(data);
            });
            res.on('error',function(data){
                DataService.getDataService().handlePutResponseData(data);
            });
            res.on('finish',function(data){
                DataService.getDataService().handlePutResponseData(data);
            });
             res.on('end',function(data){
                DataService.getDataService().handlePutResponseData(data);
            });
        });
        req.end(bodyData);
        req.on('error', function(e) {
            DataService.getDataService().handleResponseError(e)
        });
        req.on('finish', function(e) {
            DataService.getDataService().handleResponseError(e)
        });
    }


    getIData(getUrl){
        let getData =  this.http.get(getUrl, this.makeHeaders()) 
            .map(res => {
                if(res.status < HTTPCODES.SUCCESS_START || res.status > HTTPCODES.SUCCESS_END) {
                    return res.status;
                } 
                else {
                    return res.json();
                }
            })
            .subscribe(
                (data) => {
                    this.handleGetIResponseData(data);
                }, 
                (err) => {
                    this.handleIResponseError(err)
                }
            ); 
    }


    getData(getUrl){
        let getData =  this.http.get(getUrl, this.makeHeaders()) 
            .map(res => {
                if(res.status < HTTPCODES.SUCCESS_START || res.status > HTTPCODES.SUCCESS_END) {
                    return res.status;
                } 
                else {
                    return res.json();
                }
            })
            .subscribe(
                (data) => {
                    this.handleGetResponseData(data);
                }, 
                (err) => {
                    this.handleResponseError(err)
                }
            ); 
    }

    putData(putUrl,body){
        let putData = this.http.put(putUrl,body, this.makeHeaders()) 
            .map(res => {
                if(res.status < HTTPCODES.SUCCESS_START || res.status > HTTPCODES.SUCCESS_END) {
                    return res.status;
                } 
                else {
                    return res.json();
                }
            })
            .subscribe(
                (data) => {
                    this.handlePutResponseData(data);
                }, 
                (err) => {
                    this.handleResponseError(err)
                }
            ); 
    }


    getIDevicesFromCloud() {
            if(this.networkParams.useCertAuth){
                let path =  this.networkParams.certDevicesPath;
                this.getIDataWithCert(path);
            }else{
                let url = this.networkParams.devicesUrl;
                this.getIData(url);
            }
        }

    getDevicesFromCloud() {
        if(this.networkParams.useCertAuth){
            let path =  this.networkParams.certDevicesPath;
            this.getDataWithCert(path);
            //this.getDataWithCertReq();
        }else{
            let url = this.networkParams.devicesUrl;
            this.getData(url);
        }
    }
    getDevicesFromCloudAndAdd() {
        if(this.networkParams.useCertAuth){
             let path =  this.networkParams.certDevicesPath;
            this.getDataAndAddDeviceIfneededWithCert(path);
        }else {
            if(this.uiParams.userLoggedIn){
            let url = this.networkParams.devicesUrl;
            this.getDataAndAddDeviceIfneeded(url);
            }
        }
    }

    getDataAndAddDeviceIfneededWithCert(httpPath){
        let httpOptions = this.makeCertHeaders();
        httpOptions.path = httpPath;
        httpOptions.method = 'GET';
        var req = https.request(httpOptions, function(res) {
            res.on('data', function(data) {
                this.handleGetDataAndAddDeviceWithCert(data);
            });
        });
        req.end();
        req.on('error', function(e) {
                this.handleResponseError(e)
        });
    }

    getDataAndAddDeviceIfneeded(getUrl){
        let getData =  this.http.get(getUrl, this.makeHeaders()) 
            .map(res => {
                if(res.status < HTTPCODES.SUCCESS_START || res.status > HTTPCODES.SUCCESS_END) {
                    return res.status;
                } 
                else {
                    return res.json();
                }
            })
            .subscribe(
                (data) => {
                    this.handleGetDataAndAddDevice(data);
                }, 
                (err) => {
                    this.handleResponseError(err)
                }
            ); 
    }

    
    handleGetDataAndAddDeviceWithCert(data){
        let strFormat =  JSON.stringify(data);
        let Detectors = data.detectors;
        if(Detectors != undefined ){
            this.uiParams.userLoggedIn = true;
            this.uiParams.lastSynced = data._updated_at.split('+')[0];
            let localDate = this.getUTCDateFormat();
            let syncdate1 = new Date(localDate)
            let syncdate2 = new Date(this.uiParams.lastSynced)
            if(syncdate1 > syncdate2){
            }else if (syncdate1 < syncdate2){
            }else {
            }
            this.setDevices(Detectors,true);
            if(this.uiParams.devicesObj.DeviceData != undefined){
                let isExists = false;
                for(let  i= 0; i < Detectors.length; i++ ){
                    if(Detectors[i].btAddress == this.uiParams.devicesObj.DeviceData.btAddress){
                        isExists =  true;
                    }
                }
                if(isExists == false){
                    this.addDevice(this.uiParams.devicesObj.DeviceData,true);
                    this.updateInstalledDevicesToCloud()
                }
            }
            if(this.uiParams.subMenuComponent != undefined)
                this.uiParams.subMenuComponent.onSucessfullSync(this.uiParams.lastSynced);
        }
    }

    handleGetDataAndAddDevice(data){
        let strFormat =  JSON.stringify(data);
        let Detectors = data.detectors;
        if(Detectors != undefined ){
            this.uiParams.userLoggedIn = true;
            this.uiParams.lastSynced = data._updated_at.split('+')[0];
            let localDate = this.getUTCDateFormat();
            let syncdate1 = new Date(localDate)
            let syncdate2 = new Date(this.uiParams.lastSynced)
            if(syncdate1 > syncdate2){
            }else if (syncdate1 < syncdate2){
            }else {
            }
            this.setDevices(Detectors,true);
            if(this.uiParams.devicesObj.DeviceData != undefined){
                let isExists = false;
                for(let  i= 0; i < Detectors.length; i++ ){
                    if(Detectors[i].btAddress == this.uiParams.devicesObj.DeviceData.btAddress){
                        isExists =  true;
                    }
                }
                if(isExists == false){
                    this.addDevice(this.uiParams.devicesObj.DeviceData,true);
                    this.updateInstalledDevicesToCloud()
                }
            }
            if(this.uiParams.subMenuComponent != undefined)
                this.uiParams.subMenuComponent.onSucessfullSync(this.uiParams.lastSynced);
        }
    }
    updateInstalledDevicesToCloud(){
        if(this.networkParams.useCertAuth){
            this.uiParams.devicesObj.DetectorsObj = {
                'detectors':this.uiParams.devicesObj.IDevicesArray
            }
            let bodyString = JSON.stringify(this.uiParams.devicesObj.DetectorsObj);
            let path = this.networkParams.certDevicesPath;
            this.putDataWithCert(this.networkParams.certDevicesPath,bodyString)
        }else {
            if(this.uiParams.userLoggedIn){
                this.uiParams.devicesObj.DetectorsObj = {
                    'detectors':this.uiParams.devicesObj.IDevicesArray
                }
                let bodyString = JSON.stringify(this.uiParams.devicesObj.DetectorsObj);
                let url = this.networkParams.devicesUrl;
                this.putData(url,bodyString);
            }
        }
    }
    putDevicesToCloud(installed){
        if(this.networkParams.useCertAuth){
            if(this.uiParams.devicesObj.IDevicesArray != undefined ){
                for(let i = 0; i < this.uiParams.devicesObj.IDevicesArray.length; i++){
                        if(this.uiParams.devicesObj.DeviceData.btAddress == this.uiParams.devicesObj.IDevicesArray[i].btAddress){
                            this.uiParams.devicesObj.IDevicesArray[i] = this.uiParams.devicesObj.DeviceData;
                            break;
                        }
                }
            
                this.uiParams.devicesObj.DetectorsObj = {
                    'detectors':this.uiParams.devicesObj.IDevicesArray
                }
                let bodyString = JSON.stringify(this.uiParams.devicesObj.DetectorsObj);
                let path = this.networkParams.certDevicesPath;
                this.putData(path,bodyString);
            }
        }else{
            if(this.uiParams.userLoggedIn){
                for(let i = 0; i < this.uiParams.devicesObj.IDevicesArray.length; i++){
                    if(this.uiParams.devicesObj.DeviceData.btAddress == this.uiParams.devicesObj.IDevicesArray[i].btAddress){
                        this.uiParams.devicesObj.IDevicesArray[i] = this.uiParams.devicesObj.DeviceData;
                        break;
                    }
                }
                this.uiParams.devicesObj.DetectorsObj = {
                    'detectors':this.uiParams.devicesObj.IDevicesArray
                }
                let bodyString = JSON.stringify(this.uiParams.devicesObj.DetectorsObj);
                let url = this.networkParams.devicesUrl;
                this.putData(url,bodyString);
            }
        }
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
                this.uiParams.devicesObj.DeviceData.potentiometerMode = attrValue;
            break;
            case SCCP_ATTRIBUTES.BRIGHTNESS_THRESHOLD                                    : 
                this.uiParams.devicesObj.DeviceData.brightnessThreshold= attrValue;
            break;
            case SCCP_ATTRIBUTES.BRIGHTNESS_THRESHOLD_MIN                                : 
                this.uiParams.devicesObj.DeviceData.brightnessThresholdMin= attrValue;
            break;
            case SCCP_ATTRIBUTES.BRIGHTNESS_THRESHOLD_MAX                                : 
                this.uiParams.devicesObj.DeviceData.brightnessThresholdMax= attrValue;
            break;
            case SCCP_ATTRIBUTES.CONSIDER_SLAVE_BRIGHTNESS_ENABLE                        :
                this.uiParams.devicesObj.DeviceData.considerSlaveBrightnessEnable= attrValue;
            break; 
            case SCCP_ATTRIBUTES.CONSTANT_LIGHT_CONTROL_ENABLE                           : 
                this.uiParams.devicesObj.DeviceData.constantLightControlEnable= attrValue;
            break;
            case SCCP_ATTRIBUTES.CONSTANT_LIGHT_BRIGHTNESS_SET_POINT                     : 
                this.uiParams.devicesObj.DeviceData.constantLightBrightnessSetPoint= attrValue;
            break;
            case SCCP_ATTRIBUTES.CONSTANT_LIGHT_BRIGHTNESS_SET_POINT_MIN                 : 
                this.uiParams.devicesObj.DeviceData.constantLightBrightnessSetPointMin= attrValue;
            break;
            case SCCP_ATTRIBUTES.CONSTANT_LIGHT_BRIGHTNESS_SET_POINT_MAX                 : 
                this.uiParams.devicesObj.DeviceData.constantLightBrightnessSetPointMax= attrValue;
            break;
            case SCCP_ATTRIBUTES.CONSTANT_LIGHT_CONTROL_CONSIDER_SLAVE_BRIGHTNESS_ENABLE : 
                this.uiParams.devicesObj.DeviceData.constantLightControlConsiderSlaveBrightnessEnable= attrValue;
            break;
            case SCCP_ATTRIBUTES.SHORT_TIME_PULSE_ENABLE                                 : 
                this.uiParams.devicesObj.DeviceData.shortTimePulseEnable= attrValue;
            break;
            case SCCP_ATTRIBUTES.SWITCH_OFF_DELAY                                        :
                this.uiParams.devicesObj.DeviceData.switchOffDelay= attrValue;
            break;
            case SCCP_ATTRIBUTES.SWITCH_OFF_DELAY_MIN                                    : 
                this.uiParams.devicesObj.DeviceData.switchOffDelayMin= attrValue;
            break;
            case SCCP_ATTRIBUTES.SWITCH_OFF_DELAY_MAX                                    : 
                this.uiParams.devicesObj.DeviceData.switchOffDelayMax= attrValue;
            break;
            case SCCP_ATTRIBUTES.OPERATION_MODE                                          : 
                this.uiParams.devicesObj.DeviceData.operationMode= attrValue;
            break;
            case SCCP_ATTRIBUTES.SLAVE_MODE_ENABLE                                       : 
                this.uiParams.devicesObj.DeviceData.slaveModeEnable= attrValue;
            break;
            case SCCP_ATTRIBUTES.OUTDOOR_APPLICATION_ENABLE                              : 
                this.uiParams.devicesObj.DeviceData.outdoorApplicationEnable= attrValue;
            break;
            case SCCP_ATTRIBUTES.PIR_SENSITIVITY0                                        : 
                this.uiParams.devicesObj.DeviceData.pirSensitivity0= attrValue;
            break;
            case SCCP_ATTRIBUTES.PIR_SENSITIVITY1                                        : 
                this.uiParams.devicesObj.DeviceData.pirSensitivity1= attrValue;
            break;
            case SCCP_ATTRIBUTES.PIR_SENSITIVITY2                                        : 
                this.uiParams.devicesObj.DeviceData.pirSensitivity2= attrValue;
            break;
            case SCCP_ATTRIBUTES.PIR_SENSITIVITY3                                        : 
                this.uiParams.devicesObj.DeviceData.pirSensitivity3= attrValue;
            break;
            case SCCP_ATTRIBUTES.BRIGHTNESS_CORRECTION_ENABLE                            : 
                this.uiParams.devicesObj.DeviceData.brightnessCorrectionEnable= attrValue;
            break;
            case SCCP_ATTRIBUTES.BRIGHTNESS_CORRECTION_VALUE                             : 
                this.uiParams.devicesObj.DeviceData.brightnessCorrectionValue= attrValue;
            break;
            case SCCP_ATTRIBUTES.DYNAMIC_SWITCH_OFF_DELAY_ENABLE                         : 
                this.uiParams.devicesObj.DeviceData.DynamicSwitchOffDelayEnable = attrValue;
            break;
            case SCCP_ATTRIBUTES.CH1_CIRCUIT_LOGIC                                       : 
                this.uiParams.devicesObj.DeviceData.ch1CircuitLogic= attrValue;
            break;
            case SCCP_ATTRIBUTES.CH1_PERMANENT_ON_DURATION                               : 
                this.uiParams.devicesObj.DeviceData.ch1PermanentOnDuration= attrValue;
            break;
            case SCCP_ATTRIBUTES.CH1_PERMANENT_ON_DURATION_MIN                           : 
                this.uiParams.devicesObj.DeviceData.ch1PermanentOnDurationMin= attrValue;
            break;
            case SCCP_ATTRIBUTES.CH1_PERMANENT_ON_DURATION_MAX                           : 
                this.uiParams.devicesObj.DeviceData.ch1PermanentOnDurationMax= attrValue;
            break;
            case SCCP_ATTRIBUTES.CH1_PERMANENT_OFF_DURATION                              : 
                this.uiParams.devicesObj.DeviceData.ch1PermanentOffDuration= attrValue;
            break;
            case SCCP_ATTRIBUTES.CH1_PERMANENT_OFF_DURATION_MIN                          : 
                this.uiParams.devicesObj.DeviceData.ch1PermanentOffDurationMin= attrValue;
            break;
            case SCCP_ATTRIBUTES.CH1_PERMANENT_OFF_DURATION_MAX                          : 
                this.uiParams.devicesObj.DeviceData.ch1PermanentOffDurationMax= attrValue;
            break;
            case SCCP_ATTRIBUTES.SOFT_ON_ENABLE                                          : 
                this.uiParams.devicesObj.DeviceData.softOnEnable= attrValue;
            break;
            case SCCP_ATTRIBUTES.SOFT_ON_DURATION                                        :
                this.uiParams.devicesObj.DeviceData.softOnDuration= attrValue;
            break;
            case SCCP_ATTRIBUTES.SOFT_ON_DURATION_MIN                                    :
                this.uiParams.devicesObj.DeviceData.softOnDurationMin= attrValue;
            break; 
            case SCCP_ATTRIBUTES.SOFT_ON_DURATION_MAX                                    : 
                this.uiParams.devicesObj.DeviceData.softOnDurationMax= attrValue;
            break;
            case SCCP_ATTRIBUTES.SOFT_OFF_ENABLE                                         : 
                this.uiParams.devicesObj.DeviceData.softOffEnable= attrValue;
            break;
            case SCCP_ATTRIBUTES.SOFT_OFF_DURATION                                       : 
                this.uiParams.devicesObj.DeviceData.softOffDuration= attrValue;
            break;
            case SCCP_ATTRIBUTES.SOFT_OFF_DURATION_MIN                                   : 
                this.uiParams.devicesObj.DeviceData.softOffDurationMin= attrValue;
            break;
            case SCCP_ATTRIBUTES.SOFT_OFF_DURATION_MAX                                   : 
                this.uiParams.devicesObj.DeviceData.softOffDurationMax= attrValue;
            break;
            case SCCP_ATTRIBUTES.PHASE_CUT_MODE                                          : 
                this.uiParams.devicesObj.DeviceData.phaseCutMode= attrValue;
            break;
            case SCCP_ATTRIBUTES.CH1_MEMORY_FUNCTION_ENABLE                              : 
                this.uiParams.devicesObj.DeviceData.ch1MemoryFunctionEnable= attrValue;
            break;
            case SCCP_ATTRIBUTES.DELIMIT_LIGHTING_LEVEL_ENABLE                           : 
                this.uiParams.devicesObj.DeviceData.delimitLightingLevelEnable= attrValue;
            break;
            case SCCP_ATTRIBUTES.CH1_MIN_LEVEL_ENABLE                                    : 
                this.uiParams.devicesObj.DeviceData.ch1MinLevelEnable= attrValue;
            break;
            case SCCP_ATTRIBUTES.CH1_MIN_LEVEL                                           : 
                this.uiParams.devicesObj.DeviceData.ch1MinLevel= attrValue;
            break;
            case SCCP_ATTRIBUTES.CH1_MAX_LEVEL_ENABLE                                    : 
                this.uiParams.devicesObj.DeviceData.ch1MaxLevelEnable= attrValue;
            break;
            case SCCP_ATTRIBUTES.CH1_MAX_LEVEL                                           : 
                this.uiParams.devicesObj.DeviceData.ch1MaxLevel= attrValue;
            break;
            case SCCP_ATTRIBUTES.LEVEL_MIN                                               : 
                this.uiParams.devicesObj.DeviceData.levelMin =  attrValue;
            break;
            case SCCP_ATTRIBUTES.LEVEL_MAX                                               :
                this.uiParams.devicesObj.DeviceData.levelMax = attrValue;
            break;
            case SCCP_ATTRIBUTES.DALI_POWER_ON_LEVEL                                     :
                this.uiParams.devicesObj.DeviceData.daliPowerOnLevel = attrValue;
            break;
            case SCCP_ATTRIBUTES.COLOR_TEMPERATURE                                       : 
                this.uiParams.devicesObj.DeviceData.colorTemperature = attrValue;
            break;
            case SCCP_ATTRIBUTES.COLOR_TEMPERATURE_MIN                                   :
                this.uiParams.devicesObj.DeviceData.colorTemperatureMin = attrValue;
            break;
            case SCCP_ATTRIBUTES.COLOR_TEMPERATURE_MAX                                   : 
                this.uiParams.devicesObj.DeviceData.colorTemperatureMax = attrValue;
            break;
            case SCCP_ATTRIBUTES.BURN_IN_ENABLE                                          : 
                this.uiParams.devicesObj.DeviceData.burnInEnable= attrValue;
            break;
            case SCCP_ATTRIBUTES.BURN_IN_MODE                                            : 
                this.uiParams.devicesObj.DeviceData.burnInMode= attrValue;
            break;
            case SCCP_ATTRIBUTES.BURN_IN_DURATION                                        : 
                this.uiParams.devicesObj.DeviceData.burnInDuration= attrValue;
            break;
            case SCCP_ATTRIBUTES.BURN_IN_DURATION_MIN                                    : 
                this.uiParams.devicesObj.DeviceData.burnInDuration_min= attrValue;
            break;
            case SCCP_ATTRIBUTES.BURN_IN_DURATION_MAX                                    : 
                this.uiParams.devicesObj.DeviceData.burnInDuration_max= attrValue;
            break;
            case SCCP_ATTRIBUTES.BASIC_BRIGHTNESS_MODE                                   : 
                this.uiParams.devicesObj.DeviceData.basicBrightnessMode= attrValue;
            break;
            case SCCP_ATTRIBUTES.BASIC_BRIGHTNESS_LEVEL                                  : 
                this.uiParams.devicesObj.DeviceData.basicBrightnessLevel= attrValue;
            break;
            case SCCP_ATTRIBUTES.BASIC_BRIGHTNESS_AMBIENT_BRIGHTNESS_THRESHOLD           : 
                this.uiParams.devicesObj.DeviceData.basicBrightnessAmbientBrightnessThreshold= attrValue;
            break;
            case SCCP_ATTRIBUTES.BASIC_BRIGHTNESS_AMBIENT_BRIGHTNESS_THRESHOLD_MIN       : 
                this.uiParams.devicesObj.DeviceData.basicBrightnessAmbientBrightnessThresholdMin= attrValue;
            break;
            case SCCP_ATTRIBUTES.BASIC_BRIGHTNESS_AMBIENT_BRIGHTNESS_THRESHOLD_MAX       : 
                this.uiParams.devicesObj.DeviceData.basicBrightnessAmbientBrightnessThresholdMax= attrValue;
            break;
            case SCCP_ATTRIBUTES.BASIC_BRIGHTNESS_START_TIME                             : 
                this.uiParams.devicesObj.DeviceData.basicBrightnessStartTime= attrValue;
            break;
            case SCCP_ATTRIBUTES.BASIC_BRIGHTNESS_END_TIME                               : 
                this.uiParams.devicesObj.DeviceData.basicBrightnessEndTime= attrValue;
            break;
            case SCCP_ATTRIBUTES.BASIC_BRIGHTNESS_START_TIME_ASTRO_FUNCTION_ENABLE                  :
                this.uiParams.devicesObj.DeviceData.basicBrightnessStartTimeAstroFunctionEnable= attrValue;
            break;
            case SCCP_ATTRIBUTES.NIGHT_LIGHT_FUNCTION_ENABLE                             : 
                this.uiParams.devicesObj.DeviceData.nightLightFunctionEnable= attrValue;
            break;
            case SCCP_ATTRIBUTES.NIGHT_LIGHT_START_TIME                                  : 
                this.uiParams.devicesObj.DeviceData.nightLightStartTime= attrValue;
            break;
            case SCCP_ATTRIBUTES.NIGHT_LIGHT_END_TIME                                    : 
                this.uiParams.devicesObj.DeviceData.nightLightEndTime= attrValue;
            break;
            case SCCP_ATTRIBUTES.NIGHT_LIGHT_LEVEL                                       : 
                this.uiParams.devicesObj.DeviceData.nightLightLevel= attrValue;
            break;
            case SCCP_ATTRIBUTES.STEPWISE_SWITCH_OFF_DELAY_ENABLE                        : 
                this.uiParams.devicesObj.DeviceData.stepwiseSwitchOffDelayEnable= attrValue;
            break;
            case SCCP_ATTRIBUTES.STEPWISE_SWITCH_OFF_DELAY                               : 
                this.uiParams.devicesObj.DeviceData.stepwiseSwitchOffDelay= attrValue;
            break;
            case SCCP_ATTRIBUTES.STEPWISE_SWITCH_OFF_DELAY_MIN                           : 
                this.uiParams.devicesObj.DeviceData.stepwiseSwitchOffDelayMin= attrValue;
            break;
            case SCCP_ATTRIBUTES.STEPWISE_SWITCH_OFF_DELAY_MAX                           : 
                this.uiParams.devicesObj.DeviceData.stepwiseSwitchOffDelayMax= attrValue;
            break;
            case SCCP_ATTRIBUTES.STEPWISE_SWITCH_OFF_LEVEL                               : 
                this.uiParams.devicesObj.DeviceData.stepwiseSwitchOffLevel= attrValue;
            break;
            case SCCP_ATTRIBUTES.PRESENCE_SIMULATION_ENABLE                              :
                this.uiParams.devicesObj.DeviceData.presenceSimulationEnable = attrValue
            break;
            case SCCP_ATTRIBUTES.PRESENCE_SIMULATION_START_TIME                          :
                this.uiParams.devicesObj.DeviceData.presenceSimulationStartTime = attrValue
            break;
            case SCCP_ATTRIBUTES.PRESENCE_SIMULATION_END_TIME                            :
                this.uiParams.devicesObj.DeviceData.presenceSimulationEndTime = attrValue 
            break;
            case SCCP_ATTRIBUTES.PRESENCE_SIMULATION_START_TIME_ASTRO_FUNCTION_ENABLE               :
            break;
            case SCCP_ATTRIBUTES.PRESENCE_SIMULATION_END_TIME_ASTRO_FUNCTION_ENABLE               :
            break;
            case SCCP_ATTRIBUTES.PERMANENT_LIGHT_BY_PUSH_BUTTON_ENABLE                :
                this.uiParams.devicesObj.DeviceData.permanentLightByPushButtonEnable = attrValue;
            break;
            case SCCP_ATTRIBUTES.CH2_CIRCUIT_LOGIC                                       :
                this.uiParams.devicesObj.DeviceData.ch2CircuitLogic = attrValue
            break;
            case SCCP_ATTRIBUTES.CH2_MODE                                                :
                this.uiParams.devicesObj.DeviceData.ch2Mode = attrValue 
            break;
            case SCCP_ATTRIBUTES.HVAC_DYNAMICAL_CONTROL_ENABLE                                           :
                this.uiParams.devicesObj.DeviceData.hvacDynamicalControlEnable = attrValue;
            break;
            case SCCP_ATTRIBUTES.HVAC_SWITCH_ON_DELAY                                    :
                this.uiParams.devicesObj.DeviceData.hvacSwitchOnDelay = attrValue 
            break;
            case SCCP_ATTRIBUTES.HVAC_SWITCH_ON_DELAY_MIN                                :
                this.uiParams.devicesObj.DeviceData.hvacSwitchOnDelayMin = attrValue 
            break;
            case SCCP_ATTRIBUTES.HVAC_SWITCH_ON_DELAY_MAX                                :
                this.uiParams.devicesObj.DeviceData.hvacSwitchOnDelayMax = attrValue 
            break;
            case SCCP_ATTRIBUTES.HVAC_SWITCH_OFF_DELAY                                   :
                this.uiParams.devicesObj.DeviceData.hvacSwitchOffDelay = attrValue 
            break;
            case SCCP_ATTRIBUTES.HVAC_SWITCH_OFF_DELAY_MIN                               :
                this.uiParams.devicesObj.DeviceData.hvacSwitchOffDelayMin = attrValue 
            break;
            case SCCP_ATTRIBUTES.HVAC_SWITCH_OFF_DELAY_MAX                               :
                this.uiParams.devicesObj.DeviceData.hvacSwitchOffDelayMax = attrValue 
            break;
            case SCCP_ATTRIBUTES.TEST_MODE_DEACTIVATE_OUTPUTS_ENABLE                     :
                this.uiParams.devicesObj.DeviceData.testModeDeactivateOutputsEnable = attrValue 
            break;
            case SCCP_ATTRIBUTES.ENERGY_MONITOR_CONNECTED_LOAD                           :
                this.uiParams.devicesObj.DeviceData.energyMonitorConnectedLoad = attrValue 
            break;
            case SCCP_ATTRIBUTES.ENERGY_MONITOR_CONNECTED_LOAD_MIN                       :
                this.uiParams.devicesObj.DeviceData.energyMonitorConnectedLoadMin = attrValue 
            break;
            case SCCP_ATTRIBUTES.ENERGY_MONITOR_CONNECTED_LOAD_MAX                       :
                this.uiParams.devicesObj.DeviceData.energyMonitorConnectedLoadMax = attrValue 
            break;
            case SCCP_ATTRIBUTES.ENERGY_MONITOR_LIGHTING_DURATION                        :
                this.uiParams.devicesObj.DeviceData.energyMonitorLightingDuration = attrValue 
            break;
            case SCCP_ATTRIBUTES.ENERGY_MONITOR_LIGHTING_DURATION_MIN                    :
                this.uiParams.devicesObj.DeviceData.energyMonitorLightingDurationMin = attrValue 
            break;
            case SCCP_ATTRIBUTES.ENERGY_MONITOR_LIGHTING_DURATION_MAX                    :
                this.uiParams.devicesObj.DeviceData.energyMonitorLightingDurationMax = attrValue 
            break;
            case SCCP_ATTRIBUTES.CONTACT                                                 : 
                this.uiParams.devicesObj.DeviceData.contact = attrValue;
            break;
            case SCCP_ATTRIBUTES.BUILDING                                                : 
                this.uiParams.devicesObj.DeviceData.building = attrValue;
            break;
            case SCCP_ATTRIBUTES.ENABLE_USER_SET_BRIGHTNESS_THRESHOLD                    :
                this.uiParams.devicesObj.DeviceData.enableUserSetBrightnessThreshold = attrValue 
            break;
            case SCCP_ATTRIBUTES.ENABLE_USER_SET_SWITCH_OFF_DELAY                        :
                this.uiParams.devicesObj.DeviceData.enableUserSetSwitchOffDelay = attrValue 
            break;
            case SCCP_ATTRIBUTES.ENABLE_USER_ENERGY_MONITOR                              :
                this.uiParams.devicesObj.DeviceData.enableUserEnergyMonitor = attrValue 
            break;
            case SCCP_ATTRIBUTES.ENABLE_USER_BASIC_BRIGHTNESS                            :
                this.uiParams.devicesObj.DeviceData.enableUserBasicBrightness = attrValue 
            break;
            case SCCP_ATTRIBUTES.ENABLE_USER_NIGHT_LIGHT_FUNCTION                        :
                this.uiParams.devicesObj.DeviceData.enableUserNightLightFunction = attrValue 
            break;
            case SCCP_ATTRIBUTES.ENABLE_USER_COLOR_TEMPERATURE_CONTROL_ENABLE            :
                this.uiParams.devicesObj.DeviceData.enableUserColorTemperatureControlEnable = attrValue 
            break;
            case SCCP_ATTRIBUTES.CURRENT_BRIGHTNESS                                      : 
                this.uiParams.devicesObj.DeviceData.currentBrightness= attrValue;
            break;
            case SCCP_ATTRIBUTES.IDENTIFYING_DEVICE                                      : 
                this.uiParams.devicesObj.DeviceData.identifyingDevice = attrValue
            break;
            case SCCP_ATTRIBUTES.MOVEMENT                                                :
                this.uiParams.devicesObj.DeviceData.movement = attrValue 
            break;
            case SCCP_ATTRIBUTES.CH1_IDENTIFYING_LOAD                                    :
                this.uiParams.devicesObj.DeviceData.ch1IdentifyingLoad = attrValue 
            break;
            case SCCP_ATTRIBUTES.CH1_ON_OFF_STATE                                        :
                this.uiParams.devicesObj.DeviceData.ch1OnOffState = attrValue 
            break;
            case SCCP_ATTRIBUTES.CH1_CURRENT_LEVEL                                       : 
                this.uiParams.devicesObj.DeviceData.ch1CurrentLevel = attrValue;
            break;
            case SCCP_ATTRIBUTES.CH2_IDENTIFYING_LOAD                                    :
                this.uiParams.devicesObj.DeviceData.ch2IdentifyingLoad = attrValue 
            break;
            case SCCP_ATTRIBUTES.CH2_ON_OFF_STATE                                        :
                this.uiParams.devicesObj.DeviceData.ch2OnOffState = attrValue 
            break;
            case SCCP_ATTRIBUTES.TEST_MODE_ENABLE                                        :
                this.uiParams.devicesObj.DeviceData.testModeEnable = attrValue 
            break;
            case SCCP_ATTRIBUTES.ACCESS_LEVEL                                            :
                this.uiParams.devicesObj.DeviceData.accessLevel = attrValue  
            break;
            default:
            break;
        }
    }
    getHexofMe(decNumber){
    let hexString = decNumber.toString(16);
    let yourNumber = parseInt(hexString, 16);
    return yourNumber;
  }
}