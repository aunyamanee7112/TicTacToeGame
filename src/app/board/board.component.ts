import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares: any[];
  xIsNExt: boolean;
  winner: string;
  get player(){
    return this.xIsNExt ? 'X':'O';
  }
  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }
  newGame(){
    this.squares = Array(9).fill(null); // ตารางกระดาน
    this.winner = null //แสดงผลคนชนะ
    this.xIsNExt = true;
  }

  makeMove(idx:number){
    if(!this.squares[idx]){
        this.squares.splice(idx,1,this.player);
        this.xIsNExt = !this.xIsNExt
    }
    this.winner = this.calculateWinner();
     //ทริกใหม่ ให้ตัวแปรเท่ากับฟังชั่น
     //ให้ฟังขั่นรีเทินค่ามาเอง ไม่ต้องไปยัดค่าใส่ตัวแปรในฟังชั้น
  }

  calculateWinner(){
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ]; //กรณีชนะ ตำแหน่ง 3ตัวเรียงกันที่ x o จะวิน
    for (let i = 0; i < lines.length; i++) {
      const [a,b,c] = lines[i] //ประกาศตัวแปรอาเรย์
      if(
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
         return this.squares[a]
      }
    }
    return null;
  }

}
