import { Component, OnInit, AfterViewInit, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { formatCurrency } from '@angular/common';
declare const $ : any;


@Component({
  selector: 'app-forex',
  templateUrl: './forex.component.html',
  styleUrls: ['./forex.component.css']
})
export class ForexComponent implements OnInit {
  private _table1 : any;

  constructor(private renderer : Renderer2, private http : HttpClient) { }

  ngAfterViewInit(): void{
    this.renderer.removeClass(document.body, "sidebar-open");
    this.renderer.addClass(document.body, "sidebar-closed");

    this._table1 = $("#table1").DataTable
    (
      {
        "colomnDefs" :
        [
          {
            "targets" : 2,
            "className" : "text-right"
          }
        ]
      }
    );
    this.getData();
  }

  ngOnInit(): void {
  }

  getData(): void{
    console.log("getData()");

    var url = "https://openexchangerates.org/api/latest.json?app_id=dee79e154b464cb5b6b40972ac61bfc9";

    this.http.get(url)
    .subscribe((data : any) => {
      console.log(data);
      
      var rates = data.rates;
      console.log(rates);

      var idr = rates.IDR;
      var idr2 = formatCurrency(idr, "en-US", "", "USD");
      console.log("USD : " + idr2);
      var row = [ 1, "USD", idr2 ];
      this._table1.row.add(row);

      var sgd = rates.IDR / rates.SGD;
      var sgd2 = formatCurrency(sgd, "en-US", "", "SGD");
      console.log("SGD : " + sgd2);
      var row = [ 2, "SGD", sgd2 ];
      this._table1.row.add(row);

      var bnd = rates.IDR / rates.BND;
      var bnd2 = formatCurrency(bnd, "en-US", "", "BND");
      console.log("BND : " + bnd2);
      var row = [ 3, "BND", bnd2 ];
      this._table1.row.add(row);

      var hkd = rates.IDR / rates.HKD;
      var hkd2 = formatCurrency(hkd, "en-US", "", "HKD");
      console.log("HKD : " + hkd2);
      var row = [ 4, "HKD", hkd2 ];
      this._table1.row.add(row);

      var btc = rates.IDR / rates.BTC;
      var btc2 = formatCurrency(btc, "en-US", "", "BTC");
      console.log("BTC : " + btc2);
      var row = [ 5, "BTC", btc2 ];
      this._table1.row.add(row);

      var CAD = rates.IDR / rates.CAD;
      var CAD2 = formatCurrency(CAD, "en-US", "", "CAD");
      console.log("CAD : " + CAD2);
      var row = [ 6, "CAD", CAD2 ];
      this._table1.row.add(row);

      var CHF = rates.IDR / rates.CHF;
      var CHF2 = formatCurrency(CHF, "en-US", "", "CHF");
      console.log("CHF : " + CHF2);
      var row = [ 7, "CHF", CHF2 ];
      this._table1.row.add(row);

      var JPY = rates.IDR / rates.JPY;
      var JPY2 = formatCurrency(JPY, "en-US", "", "JPY");
      console.log("JPY : " + JPY2);
      var row = [ 8, "JPY", JPY2 ];
      this._table1.row.add(row);

      var GGP = rates.IDR / rates.GGP;
      var GGP2 = formatCurrency(GGP, "en-US", "", "GGP");
      console.log("GGP : " + GGP2);
      var row = [ 9, "GGP", GGP2 ];
      this._table1.row.add(row);

      var NZD = rates.IDR / rates.NZD;
      var NZD2 = formatCurrency(NZD, "en-US", "", "NZD");
      console.log("NZD : " + NZD2);
      var row = [ 10, "NZD", NZD2 ];
      this._table1.row.add(row);

      this._table1.draw(false);
    });
    }
  }
