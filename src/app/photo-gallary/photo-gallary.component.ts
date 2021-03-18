import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-gallary',
  templateUrl: './photo-gallary.component.html',
  styleUrls: ['./photo-gallary.component.scss']
})
export class PhotoGallaryComponent implements OnInit {



  imageObject = [
{
  image: 'assets/images/photo_gallary/Trophy.jpeg',
  thumbImage: 'assets/images/photo_gallary/Trophy.jpeg',
  title: 'Prices'
},
{
  image: 'assets/images/photo_gallary/Trophy2.jpeg',
  thumbImage: 'assets/images/photo_gallary/Trophy2.jpeg',
  title: 'Prices'
},
{
  image: 'assets/images/ingogration1.jpeg',
  thumbImage: 'assets/images/photo_gallary/ingogration1.jpeg',
  title: 'APL Inogration by Hon. Baburav Dhuri'
},
{
  image: 'assets/images/inogration2.jpeg',
  thumbImage: 'assets/images/photo_gallary/inogration2.jpeg',
  title: 'APL Inogration by Hon. Baburav Dhuri'
},
{
  image: 'assets/images/inogration3.jpeg',
  thumbImage: 'assets/images/photo_gallary/inogration3.jpeg',
  title: 'APL Inogration by Hon. Baburav Dhuri'
},
{
  image: 'assets/images/MOM1.jpeg',
  thumbImage: 'assets/images/photo_gallary/MOM1.jpeg',
  title: 'Sumit Sawant recieve Man of the Match Award'
}

];

  constructor() { }

  ngOnInit() {
  }

}
