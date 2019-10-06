import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/take'; 
import 'rxjs/add/operator/map'; 
// import { map } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  private categories=[
    {name:'Hinges'},
    {name:'Locks and Keys'},
    {name:'L-Handle and T-Handle Type Locks'},
    {name:'Neutral Bars'},
    {name:'Disconnecting Neutral Link'},
    {name:'MCB Chanel'},
    {name:'Polyamide Handle'},
    {name:'Air Vent Filter'},
    {name:'Meter Glass and MCCB Cover'},
    {name:'Terminal Strip'},
    {name:'Slide Lock Fuse'},
    {name:'Close Type Strip'},
    {name:'Nylon Cable Tie'},
    {name:'PG Glande'},
    {name:'Insulator'},
    {name:'Cable Binding Strap, Button & Sandle Clip'},
    {name:'Connector'},
    {name:'Bushing'},
    {name:'Bus Bar Insulator'},
    {name:'Sleeve'},
    {name:'Ink Ribbon & Lable'},
    {name:'PVC channel'},
    {name:'Doorknob & Hardware'},
    {name:'Grommets'},
    {name:'Gaskit'}
  ]

  private products=[
    {name:'Flat Hinges With Studs ',category:'Hinges',image:'',description:'',price:''},
    {name:'Flat Hinges 60 mm',category:'Hinges',image:'',description:'',price:''},
    {name:'Light Duty Stay Hinges',category:'Hinges',image:'',description:'',price:''},
    {name:'Flat Hinges 180°',category:'Hinges',image:'',description:'',price:''},
    {name:'Rod Hinge 180° Powder Coated Cut Size 2x3mm',category:'Hinges',image:'',description:'',price:''},
    {name:'Flate Hinge with Screw',category:'Hinges',image:'',description:'',price:''},
    {name:'Rittal Type Hinge-73mm',category:'Hinges',image:'',description:'',price:''},
    {name:'Concealed Hinge',category:'Hinges',image:'',description:'',price:''},
    {name:'Sheet Metal Concealed Hinge-40 mm',category:'Hinges',image:'',description:'',price:''},
    {name:'Sheet Metal Concealed Hinge-60 mm',category:'Hinges',image:'',description:'',price:''},
    {name:'Sheet Metal Concealed Hinge-60x47 mm',category:'Hinges',image:'',description:'',price:''},
    {name:'Sheet Metal Concealed Hinge-60x42 mm',category:'Hinges',image:'',description:'',price:''},
    {name:'Sheet Metal Concealed Hinge-66x35 mm',category:'Hinges',image:'',description:'',price:''},
    {name:'Sheet Metal Concealed Hinge-60x25 mm',category:'Hinges',image:'',description:'',price:''},
    {name:'Lift Off Hinge-59',category:'Hinges',image:'',description:'',price:''},
    {name:'Male Female Hinge',category:'Hinges',image:'',description:'',price:''},
    {name:'U Type Hinge-20, 25 mm',category:'Hinges',image:'',description:'',price:''},
    {name:'Pin Type Lock-20, 25, 30 mm',category:'Locks and Keys',image:'',description:'',price:''},
    {name:'Star Type Lock-20, 25, 30 mm',category:'Locks and Keys',image:'',description:'',price:''},
    {name:'Screw Driver Type Lock-20, 25, 30 mm',category:'Locks and Keys',image:'',description:'',price:''},
    {name:'Pin Type Lock (PVC Body and Zink Knob)-20 mm',category:'Locks and Keys',image:'',description:'',price:''},
    {name:'Pin Type PVC Lock-20 mm',category:'Locks and Keys',image:'',description:'',price:''},
    {name:'Sliding Panel Lock (Snap Type)',category:'Locks and Keys',image:'',description:'',price:''},
    {name:'MS Panel Lock (Small, Medium, Big)',category:'Locks and Keys',image:'',description:'',price:''},
    {name:'Squire Body (PVC) Small Lock',category:'Locks and Keys',image:'',description:'',price:''},
    {name:'Pin Type Lock Key',category:'Locks and Keys',image:'',description:'',price:''},
    {name:'Pin Type Lock Key (PVC Lock)',category:'Locks and Keys',image:'',description:'',price:''},
    {name:'Star Type Lock Key',category:'Locks and Keys',image:'',description:'',price:''},
    {name:'Squire Type Lock Key',category:'Locks and Keys',image:'',description:'',price:''},
    {name:'MS Lock Key',category:'Locks and Keys',image:'',description:'',price:''},
    {name:'Lock Fingure (Handle)',category:'Locks and Keys',image:'',description:'',price:''},
    {name:'Squire Typle Lock-20, 25, 30 mm',category:'Locks and Keys',image:'',description:'',price:''},
    {name:'L-HandIe Without Key',category:'L-Handle and T-Handle Type Locks',image:'',description:'',price:''},
    {name:'L-Handle With Key',category:'L-Handle and T-Handle Type Locks',image:'',description:'',price:''},
    {name:'L-Handle With Key(lnternal Locking)',category:'L-Handle and T-Handle Type Locks',image:'',description:'',price:''},
    {name:'L-Handle With Padlock',category:'L-Handle and T-Handle Type Locks',image:'',description:'',price:''},
    {name:'L-Handle Plane Polyamide',category:'L-Handle and T-Handle Type Locks',image:'',description:'',price:''},
    {name:'L-Handle With Key Polyamide',category:'L-Handle and T-Handle Type Locks',image:'',description:'',price:''},
    {name:'L-Handle With Key With Latch Mechanism',category:'L-Handle and T-Handle Type Locks',image:'',description:'',price:''},
    {name:'T-Handle Plane',category:'L-Handle and T-Handle Type Locks',image:'',description:'',price:''},
    {name:'T-Handle With Key',category:'L-Handle and T-Handle Type Locks',image:'',description:'',price:''},
    {name:'T-Handle With Key With Cam Adopt.(Small)',category:'L-Handle and T-Handle Type Locks',image:'',description:'',price:''},
    {name:'T-Handle With Key With Cam Adopt.(Big)',category:'L-Handle and T-Handle Type Locks',image:'',description:'',price:''},
    {name:'Three Point Lock (Polyamide and Zink Die Cast)',category:'L-Handle and T-Handle Type Locks',image:'',description:'',price:''},
    {name:'NL-32A / away (4+1 Hole)',category:'Neutral Bars',image:'',description:'',price:''},
    {name:'NL-32A / 6Way (6+1 Hole)',category:'Neutral Bars',image:'',description:'',price:''},
    {name:'NL-32A / 8Way (8+1 Hole)',category:'Neutral Bars',image:'',description:'',price:''},
    {name:'NL-32A / 10Way (10+1 Hole)',category:'Neutral Bars',image:'',description:'',price:''},
    {name:'NL-32A / 12Way (12+1 Hole)',category:'Neutral Bars',image:'',description:'',price:''},
    {name:'NL-32A / 16Way (16+1 Hole)',category:'Neutral Bars',image:'',description:'',price:''},
    {name:'NL-63A / away (4+1 Hole)',category:'Neutral Bars',image:'',description:'',price:''},
    {name:'NL-63A / 6Way (6+1 Hole)',category:'Neutral Bars',image:'',description:'',price:''},
    {name:'NL-63A / 8Way (8+1 Hole)',category:'Neutral Bars',image:'',description:'',price:''},
    {name:'NL-63A / 10Way (10+1 Hole)',category:'Neutral Bars',image:'',description:'',price:''},
    {name:'NL-63A / 16Way (12+1 Hole)',category:'Neutral Bars',image:'',description:'',price:''},
    {name:'NL-63A / 16Way (16+1 Hole)',category:'Neutral Bars',image:'',description:'',price:''},
    {name:'32 Amp.',category:'Disconnecting Neutral Link',image:'',description:'',price:''},
    {name:'63 Amp.',category:'Disconnecting Neutral Link',image:'',description:'',price:''},
    {name:'100 Amp.',category:'Disconnecting Neutral Link',image:'',description:'',price:''},
    {name:'MCB Channel',category:'MCB Chanel',image:'',description:'',price:''},
    // {name:'MCB Channel -0.8 mm',category:'MCB Chanel',image:'',description:'',price:''},
    // {name:'MCB Channel -1.0 mm',category:'MCB Chanel',image:'',description:'',price:''},
    {name:'Terminal Channel',category:'MCB Chanel',image:'',description:'',price:''},
    {name:'MCB Stopper',category:'MCB Chanel',image:'',description:'',price:''},
    {name:'Terminal Stopper',category:'MCB Chanel',image:'',description:'',price:''},
    {name:'Polyamide U Type Handle-92mm',category:'Polyamide Handle',image:'',description:'',price:''},
    {name:'Polyamide U Type Handle-120mm',category:'Polyamide Handle',image:'',description:'',price:''},
    {name:'Air vent 90X90 (Use 3" Fan)',category:'Air Vent Filter',image:'',description:'',price:''},
    {name:'Air vent 130X130 (Use 4" Fan)',category:'Air Vent Filter',image:'',description:'',price:''},
    {name:'Air vent 184X184 (Use 6" Fan)',category:'Air Vent Filter',image:'',description:'',price:''},
    {name:'Air Vent 212X212 (Use 7" Fan)',category:'Air Vent Filter',image:'',description:'',price:''},
    {name:'Air vent 238X238 (Use 8" Fan)',category:'Air Vent Filter',image:'',description:'',price:''},
    {name:'Adapter for 238X238 Air Vent (Use 6" Fan)',category:'Air Vent Filter',image:'',description:'',price:''},
    {name:'Snap Type Air Vent 100X100',category:'Air Vent Filter',image:'',description:'',price:''},
    {name:'Snap Type Air Fent (Use 4" Fan',category:'Air Vent Filter',image:'',description:'',price:''},
    {name:'Snap Type Air Vent 203X203 Ventilator',category:'Air Vent Filter',image:'',description:'',price:''},
    {name:'S. T. A. vent 203X203 Fan Mounting(Use 4" Fan)',category:'Air Vent Filter',image:'',description:'',price:''},
    {name:'Snap Type Air Vent 255X255 Ventilator',category:'Air Vent Filter',image:'',description:'',price:''},
    {name:'S. T. A. vent 255X255 Fan Mounting(Use 6" Fan)',category:'Air Vent Filter',image:'',description:'',price:''},
    {name:'Snap Type Air Vent 325X325 Ventilator',category:'Air Vent Filter',image:'',description:'',price:''},
    {name:'Big Doc. Holder with Adhesive 282X221X19',category:'Air Vent Filter',image:'',description:'',price:''},
    {name:'Small Doc. Holder with Adhesive 190X175X23',category:'Air Vent Filter',image:'',description:'',price:''},
    {name:'Big Doc. HOI. (Deep) with Adhesive 280X235X40',category:'Air Vent Filter',image:'',description:'',price:''},
    {name:'Meter Glass',category:'Meter Glass and MCCB Cover',image:'',description:'',price:''},
    // {name:'Meter Glass 120x120 mm',category:'Meter Glass and MCCB Cover',image:'',description:'',price:''},
    // {name:'Meter Glass 230x230 mm',category:'Meter Glass and MCCB Cover',image:'',description:'',price:''},
    {name:'MCCB Cover(PVC)',category:'Meter Glass and MCCB Cover',image:'',description:'',price:''},
    // {name:'MCCB Cover 200 Amp. (PVC)',category:'Meter Glass and MCCB Cover',image:'',description:'',price:''},
    // {name:'MCCB Cover 400 Amp. (PVC)',category:'Meter Glass and MCCB Cover',image:'',description:'',price:''},
    {name:'Terminal Strip',category:'Terminal Strip',image:'',description:'',price:''},
    // {name:'ETS-60 Amp. (2,4,6,8,10,12) Way',category:'Terminal Strip',image:'',description:'',price:''},
    // {name:'ETS-100 Amp. (2,4,6,8,10,12) Way',category:'Terminal Strip',image:'',description:'',price:''},
    {name:'Slide Lock Fuse',category:'Slide Lock Fuse',image:'',description:'',price:''},
    // {name:'ESLP-5A',category:'Slide Lock Fuse',image:'',description:'',price:''},
    // {name:'ESLF-15A',category:'Slide Lock Fuse',image:'',description:'',price:''},
    // {name:'ESLP-15A',category:'Slide Lock Fuse',image:'',description:'',price:''},
    // {name:'ESLF-30A',category:'Slide Lock Fuse',image:'',description:'',price:''},
    // {name:'ESLP-30A',category:'Slide Lock Fuse',image:'',description:'',price:''},
    // {name:'ESLF-60A',category:'Slide Lock Fuse',image:'',description:'',price:''},
    // {name:'ESLP-60A',category:'Slide Lock Fuse',image:'',description:'',price:''},
    // {name:'ECTS-30',category:'Close Type Strip',image:'',description:'',price:''},
    {name:'Close Type Strip',category:'Close Type Strip',image:'',description:'',price:''},
    {name:'Nylon Cable Tie',category:'Nylon Cable Tie',image:'',description:'',price:''},
    {name:'Tie Mount',category:'Tie Mount',image:'',description:'',price:''},
    {name:'Cable Binding Strap',category:'Cable Binding Strap, Button & Sandle Clip',image:'',description:'',price:''},
    {name:'Button',category:'Cable Binding Strap, Button & Sandle Clip',image:'',description:'',price:''},
    {name:'Sandle Clip',category:'Cable Binding Strap, Button & Sandle Clip',image:'',description:'',price:''},
    {name:'PG Glande',category:'PG Glande',image:'',description:'',price:''},
    {name:'Conical Bus Bar Insulator',category:'Insulator',image:'',description:'',price:''},
    {name:'Cylindrical Bus Bar Insulator',category:'Insulator',image:'',description:'',price:''},
    {name:'Hex Bus Bar Insulator',category:'Insulator',image:'',description:'',price:''},
    {name:'EL-Type Bus Bar Insulator',category:'Insulator',image:'',description:'',price:''},
    {name:'Single Pole Bus Bar Insulator',category:'Insulator',image:'',description:'',price:''},
    {name:'HT Insulator',category:'Insulator',image:'',description:'',price:''},
    {name:'Three Phase Connector',category:'Connector',image:'',description:'',price:''},
    {name:'Three Phase Connector with Cover',category:'Connector',image:'',description:'',price:''},
    {name:'HV Transformer Bushing with Brass Rod',category:'Bushing',image:'',description:'',price:''},
    {name:'LV Transformer Bushing with Brass Rod',category:'Bushing',image:'',description:'',price:''},
    {name:'Single Bus Bar Insulator',category:'Bus Bar Insulator',image:'',description:'',price:''},
    {name:'Two Bus Bar Support',category:'Bus Bar Insulator',image:'',description:'',price:''},
    {name:'Three Bus Bar Support',category:'Bus Bar Insulator',image:'',description:'',price:''},
    {name:'Four Bus Bar Support',category:'Bus Bar Insulator',image:'',description:'',price:''},
    {name:'Heat Shrinkable PVC Sleeve',category:'Sleeve',image:'',description:'',price:''},
    {name:'PVC Spiral Sleeve',category:'Sleeve',image:'',description:'',price:''},
    {name:'PVC Wire Sleeve',category:'Sleeve',image:'',description:'',price:''},
    {name:'Feerule Marking Sleeve',category:'Sleeve',image:'',description:'',price:''},
    {name:'Ink Ribbon',category:'Ink Ribbon & Lable',image:'',description:'',price:''},
    {name:'Self Adhesive Lable',category:'Ink Ribbon & Lable',image:'',description:'',price:''},
    {name:'PVC Wiring Channel',category:'PVC Channel',image:'',description:'',price:''},
    {name:'Screw Knobs',category:'Doorknob & Hardware',image:'',description:'',price:''},
    {name:'Eye Bolts',category:'Doorknob & Hardware',image:'',description:'',price:''},
    {name:'Rubber Grommets',category:'Grommets',image:'',description:'',price:''},
    {name:'Rubber Gaskit',category:'Gaskit',image:'',description:'',price:''},
    {name:'Self Adheshive Gaskit',category:'Gaskit',image:'',description:'',price:''},
  ]
   
  getCategories(){
    // console.log(this.http.get('categories'));
    return this.categories;
  }

  getProducts(){
   return this.http.get('assets/data/data.json')
   
  }

  getProduct(value){
    // console.log(this.products[value])
    // this.http.get('products[value]').subscribe(p=>{console.log(p)});

   return this.products.filter(p=>{
    return p.name.includes(value)
   });
  }

}
