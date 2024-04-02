// 氏名: カインテュザァ
// 提出日: 2024年3月28日
// ******************************************************
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-time-range-checker',
  templateUrl: './time-range-checker.component.html',
  styleUrls: ['./time-range-checker.component.css']
})
export class TimeRangeCheckerComponent implements OnInit {

  intCheckTime: number = 0;
  intStartTime: number = 0;
  intEndTime: number = 0;
  isTimeInRange: boolean | null = null;
  constructor() { }

  ngOnInit(): void {
  }

  CheckTime() {
    // 開始時刻が終了時刻よりも前の場合、指定された時刻が範囲内にあるかどうかをチェックします
    if (this.intStartTime < this.intEndTime) {
      this.isTimeInRange = (this.intCheckTime >= this.intStartTime && this.intCheckTime < this.intEndTime);
    }
    // 開始時刻が終了時刻よりも後の場合、指定された時刻が範囲内にあるかどうかをチェックします
    else if (this.intStartTime > this.intEndTime) {
      this.isTimeInRange = (this.intCheckTime >= this.intStartTime || this.intCheckTime < this.intEndTime);
    } 
    // 開始時刻と終了時刻が同じ場合、指定された時刻が範囲内にあるかどうかをチェックします
    else {
      this.isTimeInRange = (this.intCheckTime === this.intStartTime);
    }
    let message = this.isTimeInRange ? "時刻は指定された時間帯内にあります" : "時刻は指定された時間帯外にあります";
    alert(message);
  }
}

