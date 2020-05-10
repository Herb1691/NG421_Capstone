import { Component, OnInit } from '@angular/core';
import { IDevices } from '../interfaces/idevices';
import { DevicesService } from '../services/devices.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {

  devices: IDevices[] = [];
  device: IDevices =
  {
    systemtype: '',
    maker: '',
    systemname: '',
    datepurchased: new Date(),
    isassigned: false
  };

  constructor(private service: DevicesService) { }

  async ngOnInit() {
    // this.devices = await this.service.getDevices();
  }

  async save() {
    // const newDevice = await this.service.addDevice( this.device );
    this.devices.push( this.device );
    console.log(this.device);
  }
}
