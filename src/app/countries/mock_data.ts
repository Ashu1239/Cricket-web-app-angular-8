import { Country } from './country';
import { Teams } from './country';

export const COUNTRY: Country[] = [
    {cid:1,name:'Mauli Super',image:'mauli_super.png'},
    {cid:2,name:'Yash 11',image:'yash_11.png'},
    {cid:3,name:'PMG Enterprise',image:'pmg.png'},
    {cid:4,name:'Mangalmurti Boys',image:'mangalmurti.png'}
  ];

export const TEAMS : Teams[] = [
    {tid:1,cid:1,name:'Mauli Super',image:'assets/images/mauli_super.png', owner:'Shankar Gaonkar', captain: 'Prathmesh Gaonkar', vice_captain: 'Prasad Gaonkar'},
    {tid:2,cid:2,name:'Yash 11',image:'assets/images/yash_11.png',owner:'Santosh  Sawant', captain: 'Nikhil Shetye', vice_captain: 'Pundalik Gaonkar'},
    {tid:3,cid:3,name:'PMG Enterprise',image:'assets/images/pmg.png',owner:'Parag Gaonkar', captain: 'Sidhesh Sawant', vice_captain: 'Rakesh Naik'},
    {tid:4,cid:4,name:'Mangalmurti Boys',image:'assets/images/mangalmurti.png',owner:'Alvin Silvera', captain: 'DIngamber Naik', vice_captain: 'Sumit Sawant'},
];
