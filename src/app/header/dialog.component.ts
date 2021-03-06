import { Component , OnChanges,OnInit ,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy} from '@angular/core';
import { LoggerService } from '../logger.service';
import { RouterModule, Routes ,Router} from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'dialog-root',
  templateUrl: './dialog.component.html',
  styleUrls: ['./header.component.css'],
})

export class DialogComponent  implements  OnChanges,OnInit ,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
  
  constructor(public logger: LoggerService,private router:Router,public data:DataService) {
  }
  ngOnChanges(changes) { 
  }
  ngOnInit() { 
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
  ngOnDestroy() { 
  }

  getArrowType() {
  }
  public getHeader() {
  }
  getDialogTitle() {
      return this.data.getDialogTitle();
  }
  getDialogText() {
      return this.data.getDialogText();
  }
  cancelStuff() {
      this.data.setResetEnergyMonitor(false);
      this.data.setShowModal(false);
  }
  doStuff() {
      let resetcmd =  this.data.getResetCommand()
      if( resetcmd > 0){
            this.data.sendResetCmd(resetcmd)
      }
      this.data.setResetCommand(-1);
      this.data.setShowModal(false);
  }
  getIfShowCancel(){
  }
  getOptionsCount(){
  }
  getOptionsText(){
  }
  getDialiogTitleColor(){
  }
  getDialogOptionColor(){
  }
  getProfile() {
    return this.data.getProfile();
  }
 //PDAL-2583
  isResetEnergyMon(){
    return this.data.isResetEnergyMon();
  }
}
