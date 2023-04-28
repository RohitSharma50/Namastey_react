/*
*
*      <---***Thinge bundle doing for us***---> 
* Create a server
* HRM- HOt Module Reloading
* File Watcher algorithum -C++
* Building
* MInify
* Cleaning our Code
* Dev and Production Build
* Super fast build Algorithum
* Image Optimization
* Caching while development (image should in project )
* Compression
* Compatible with older version of browser 
*  HTTPS on dev
*  parcel manages port number
*  Consistent hashing Algorithum
*  Zero configuration
*   
*

*/ 

import React from "react";
import ReactDOM from "react-dom/client";  
  
 const Title =()=>{
    return(
         <a href="/">
           < img  
           className="logo"
           alt="Logo"  
           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMMkjUBEcADJviZ9tq020cUQZfz9d8-4RGgA&usqp=CAU"/>
        </a>
    );
 }
const Header = () =>{
return (
    <div className="header">
        <Title/>
        <div className="nav-item">
        <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Cart</li>
        </ul>
        </div>
    </div>

) 

};   
const restrautList = [ 
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "561148",
      "name": "CKC Kitchen",
      "uuid": "8db9c9df-254e-4f29-a9f3-54c0afdc2cf0",
      "city": "10199",
      "area": "Palwal Locality",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "syjwcnjyg06ndl5imele",
      "cuisines": [
        "North Indian",
        "Chinese",
        "Snacks"
      ],
      "tags": [
        
      ],
      "costForTwo": 25000,
      "costForTwoString": "₹250 FOR TWO",
      "deliveryTime": 32,
      "minDeliveryTime": 32,
      "maxDeliveryTime": 32,
      "slaString": "32 MINS",
      "lastMileTravel": 1.899999976158142,
      "slugs": {
        "restaurant": "ckc-kitchen-palwal-city-palwal-city",
        "city": "palwal"
      },
      "cityState": "10199",
      "address": "New Colony road, Near power house Palwal",
      "locality": "Hasanpur Palwal Road",
      "parentId": 337856,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "Flat ₹125 off",
        "shortDescriptionList": [
          {
            "meta": "Flat ₹125 off on orders above ₹199",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Flat ₹125 off on orders above ₹199 | Use code MATCHDEAL125",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "₹125 OFF",
        "shortDescriptionList": [
          {
            "meta": "Use MATCHDEAL125",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Flat ₹125 off on orders above ₹199 | Use code MATCHDEAL125",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 500,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 500,
        "message": "",
        "title": "Delivery Charge",
        "amount": "500",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=6517009~p=1~eid=00000187-ae00-2527-0cd5-3fcf00e70162",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "1.8 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "561148",
        "deliveryTime": 32,
        "minDeliveryTime": 32,
        "maxDeliveryTime": 32,
        "lastMileTravel": 1.899999976158142,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "3.8",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "705654",
      "name": "Pizza Treat",
      "uuid": "8e2724d4-9b84-43be-9455-a3a4e8688da4",
      "city": "10199",
      "area": "Palwal City",
      "totalRatingsString": "Too Few Ratings",
      "cloudinaryImageId": "f01a0e987a9181b3f4343369ee2a358a",
      "cuisines": [
        "Indian"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 19,
      "minDeliveryTime": 19,
      "maxDeliveryTime": 19,
      "slaString": "19 MINS",
      "lastMileTravel": 0.699999988079071,
      "slugs": {
        "restaurant": "pizza-treat-palwal-city-palwal-city",
        "city": "palwal"
      },
      "cityState": "10199",
      "address": "SHYAM NAGAR COLONY NEAR HOLY CHILDREN SCHOOL PALWAL ,,Palwal,Palwal,Haryana-121102",
      "locality": "Shyam Nagar Colony",
      "parentId": 159013,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 500,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 500,
        "message": "",
        "title": "Delivery Charge",
        "amount": "500",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "0.6 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "705654",
        "deliveryTime": 19,
        "minDeliveryTime": 19,
        "maxDeliveryTime": 19,
        "lastMileTravel": 0.699999988079071,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "--",
      "totalRatings": 0,
      "new": true
    },
    "subtype": "basic"
  },
]                         
 
const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString
   })  =>{
  return (
    <div className="card">
      <img src={
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_140,h_140,c_fill/" +
        cloudinaryImageId

      } />
      <h2>{name}</h2>
  
      
      <h3>{cuisines.join(",")}</h3>
      <h4>{lastMileTravelString} minutes</h4>
    </div>
  )
}
const Body = () => {
     return (   
     <div className="resturant-list"> 
       {restrautList.map(( restaurant) => {
       return <RestrauntCard  {...restaurant.data}/>;
      } )};
        
        </div>
     );
    };
       

const Footer = () => {
     return ( 
     <h2>This is footer</h2>
     )
};
 const AppLayout = () => { 
   return ( <> 
    <Header/>
    <Body/> 
    <Footer/>
    </>
   )
 }
 const root = ReactDOM.createRoot(document.getElementById("root"));

 root.render(<AppLayout/>);