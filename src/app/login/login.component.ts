import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

declare const $ : any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router, private http : HttpClient){

  }

  ngOnInit(): void {
  }

  showPeringatanModal(message: string): void{
    $("#peringatanModal").modal();
    $("#pm_message").html(message);
  }

  signIn(): void{
    console.log("signIn()");

    var userId = $("#idText").val();
    userId = encodeURIComponent(userId);

    var password = $("#passwordText").val();
    password = encodeURIComponent(password);

    var url = "https://stmikpontianak.net/011100862/login.php" +
    "?id=" + userId +
    "&password=" +password;

  console.log("url : " + url);

  this.http.get(url)
    .subscribe((data : any) => {
      console.log(data);

      var row = data[0];

      if (row.idCount != "1")
      {
        this.showPeringatanModal("Id atau Password tidak cocok");
        return;
      }

      sessionStorage.setItem("userId", userId);

      console.log("session data berhasil dibuat");

      this.router.navigate(["/dashboard"])
    });
  } 

}

