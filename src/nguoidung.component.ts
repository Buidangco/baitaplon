import { Component, OnInit } from '@angular/core';
import {ScoreService} from '../score.service';
import{khoahoc,hocky} from '../model/score'
import { AuthenticationService } from '../lib/authentication.service';

@Component({
  selector: 'app-nguoidung',
  templateUrl: './nguoidung.component.html',
  styleUrls: ['./nguoidung.component.css']
})
export class NguoidungComponent implements OnInit {
  khoahoc1:khoahoc[];
  hocky1:hocky[];
  mang:any;
  constructor(private scoreService:ScoreService,private authenticationService: AuthenticationService) { }

  getkhoahoc():void{
    this.scoreService.getkhoahoc().subscribe(
      (update)=>{
        this.khoahoc1=update;
      }
    )
  }

  gethocky():void{
    this.scoreService.gethocky()
    .subscribe((update)=>this.hocky1=update)
  }

  them(id:string,id1:string,id2:string){
    this.scoreService.gettracuusinhvien(id,id1,id2)
    .subscribe((update)=>{
      this.mang=update;
      console.log(this.mang);
    })
  }
  user:any;
  ngOnInit(): void {
    this.user=this.authenticationService.userValue.username;
    this.getkhoahoc();
    this.gethocky();
  }
  logout() {
    this.authenticationService.logout();
  }
}
