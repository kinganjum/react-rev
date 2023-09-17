import React from "react"; // it will import react from node_modules.
import ReactDOM from "react-dom/client"; // video no 3 time (1.26.15) /client is must to use 

/*
            header:- logo,
                     navbar
                     cart

            body :- search bar,
                    restro card
                    images
                    name
                    rating
                    cuisnes

            footer:- links
                     copyright
            */

                     const Logo = () => (
                        <a href="/">
                        <img className="logo"
                           alt="logo" src="https://lh3.googleusercontent.com/EbPS9tYwL3H8NkiYJPJbuRHmeIFVUYJs99IdfFT7ea6ZF9sw1Vhw9tiCFVCXqornHGKZyP8sy89up4G-yKqGzoLgPx8"/>
                        </a>
                    );
                    
                    
                    const Header = function () {
                            return (
                            <div className="header">
                                 <Logo/>         
                                 <div className="nav-iteams">
                                    <ul> 
                                        <li>Home</li>
                                        <li>About</li>
                                        <li>Contact</li>
                                        <li>Cart</li>
                                    </ul>
                                 </div>
                            </div>
                            );    
                        };
                    
// const foodsaga = {
//     name : "foodsaga",
//     image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d2holjt2hvdgdqld2ssd",
//     cuisnes: ["Burger", "american"],
//     rating: "4.2"
// }

// here in below function we have called variable foodsaga values as we want inside props{} (1.26.00)

// const RestrauntCard = () => {
//     return (
//     <div className="card">
//         <img src={foodsaga.image}/>
//         <h2>{foodsaga.name}</h2>
//         <h3>{foodsaga.cuisnes.join(",")}</h3>
//         <h4>{foodsaga.rating}stars</h4> 
//     </div>
//     )
// }

//**** From here array of object :- (1.32.15)
//config driven ui
// const RestrauntList = [{
//     name : "foodsaga",
//     image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d2holjt2hvdgdqld2ssd",
//     cuisnes: ["Burger", "american"],
//     rating: "4.2"
// }
// ];


   
const RestrauntList = [
    {
        "info": {
          "id": "178006",
          "name": "Rajpurohit Sweets",
          "cloudinaryImageId": "floh6mmtwym89koqlggr",
          "locality": "5th Lane",
          "areaName": "Shahupuri",
          "costForTwo": "\u20B9100 for two",
          "cuisines": [
            "Desserts"
          ],
          "avgRating": 4.3,
          "veg": true,
          "feeDetails": {
            "restaurantId": "178006",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 2400
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 2400
          },
          "parentId": "165802",
          "avgRatingString": "4.3",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 15,
            "lastMileTravel": 1.1,
            "serviceability": "SERVICEABLE",
            "slaString": "15 mins",
            "lastMileTravelString": "1.1 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-09-15 22:00:00",
            "opened": true
          },
          "badges": {

          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {

          },
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {

              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          }
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/rajpurohit-sweets-5th-lane-shahupuri-kolhapur-178006",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "305451",
          "name": "The Momo Panda",
          "cloudinaryImageId": "ocgptyjsdvxbi16a4cue",
          "locality": "Tarabai Park",
          "areaName": "Warna Colony",
          "costForTwo": "\u20B9200 for two",
          "cuisines": [
            "Tibetan",
            "Beverages"
          ],
          "avgRating": 4.3,
          "feeDetails": {
            "restaurantId": "305451",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 2400
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 2400
          },
          "parentId": "7561",
          "avgRatingString": "4.3",
          "totalRatingsString": "500+",
          "sla": {
            "deliveryTime": 25,
            "lastMileTravel": 1.2,
            "serviceability": "SERVICEABLE",
            "slaString": "25 mins",
            "lastMileTravelString": "1.2 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-09-15 23:00:00",
            "opened": true
          },
          "badges": {

          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {

              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "20% OFF",
            "subHeader": "UPTO \u20B950"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          }
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/the-momo-panda-tarabai-park-warna-colony-kolhapur-305451",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "98006",
          "name": "Rajwadi",
          "cloudinaryImageId": "ys3e3bp1a7lmsrbleen2",
          "locality": "DY Patil City Mall",
          "areaName": "Shahupuri",
          "costForTwo": "\u20B9250 for two",
          "cuisines": [
            "Chinese",
            "North Indian",
            "South Indian",
            "Burgers",
            "Pizzas",
            "Biryani"
          ],
          "avgRating": 4,
          "veg": true,
          "feeDetails": {
            "restaurantId": "98006",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 2400
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 2400
          },
          "parentId": "20008",
          "avgRatingString": "4.0",
          "totalRatingsString": "5K+",
          "sla": {
            "deliveryTime": 24,
            "lastMileTravel": 1.8,
            "serviceability": "SERVICEABLE",
            "slaString": "24 mins",
            "lastMileTravelString": "1.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-09-15 23:00:00",
            "opened": true
          },
          "badges": {

          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {

              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "\u20B9125 OFF",
            "subHeader": "ABOVE \u20B9249",
            "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          }
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/rajwadi-dy-patil-city-mall-shahupuri-kolhapur-98006",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "450520",
          "name": "Burger King",
          "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
          "locality": "Service Road",
          "areaName": "Mane Heights",
          "costForTwo": "\u20B9350 for two",
          "cuisines": [
            "Burgers",
            "American"
          ],
          "avgRating": 4,
          "feeDetails": {
            "restaurantId": "450520",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 2900
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 2900
          },
          "parentId": "166",
          "avgRatingString": "4.0",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 29,
            "lastMileTravel": 5.8,
            "serviceability": "SERVICEABLE",
            "slaString": "29 mins",
            "lastMileTravelString": "5.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-09-16 00:00:00",
            "opened": true
          },
          "badges": {

          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {

              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "EVERY ITEM",
            "subHeader": "@ \u20B9129"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          }
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/burger-king-service-road-mane-heights-kolhapur-450520",
          "type": "WEBLINK"
        }
      },
   ];
//    console.log(RestrauntList.length)


// this is destructring (2.14.00)
// const RestrauntCard = ({restaurant}) => {
//   const {name, cuisines, and many more} = restaurant;
// }

// const RestrauntCard = (props) => {
//     return (
//     <div className="card">
//         {/* <img src={RestrauntList[0].image}/> */}
//         <h2>{props.restaurant.info.name}</h2>
//         <h3>{props.restaurant.info.cuisines}</h3>
//         <h4>{props.restaurant.info.locality}</h4> 
//     </div>
//     )
// }

// const Body = () => {
//     return <div className="restaurant-list">
//         <RestrauntCard restaurant = {RestrauntList[0]} />
//         <RestrauntCard restaurant = {RestrauntList[1]} />
//         <RestrauntCard restaurant = {RestrauntList[2]} />
//         <RestrauntCard restaurant = {RestrauntList[3]} />
       
        
//     </div>
// }
// <RestrauntCard restaurant = {RestrauntList[0]} />  ;= is known as passing props inside react.


//  ********** **************
//  (2.22.00) spread opreator :-
// const RestrauntCard = ({name,cuisines,cloudinaryImageId,locality}) => {
  
//   return (
//   <div className="card">
//       <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}/>
//       <h2>{name}</h2>
//       <h3>{cuisines.join(",")}</h3>
//       <h4>{locality}</h4> 
//   </div>
//   )
// }
// (2.22.00)
// const Body = () => {
//   return <div className="restaurant-list">
//       <RestrauntCard {...RestrauntList[0].info} />
//       <RestrauntCard {...RestrauntList[1].info} />
//       <RestrauntCard {...RestrauntList[2].info} />
//       <RestrauntCard {...RestrauntList[3].info} />
      
      
//   </div>
// }
//  end of spread opreator.


// (2.28.00) map() :-
const RestrauntCard = ({name,cuisines,cloudinaryImageId,areaName,locality}) => {
  
    return (
    <div className="card">
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}/>
        <h2>{name}</h2>
        <h3>{cuisines.join(",")}</h3>
        <h2>{areaName}</h2>
        <h4>{locality}</h4> 
    </div>
    )
  }
  // map()
  // "no key < index key < unique key"
  const Body = () => {
    return <div className="restaurant-list">
      {
        RestrauntList.map(restraurant => {
          return <RestrauntCard {...restraurant.info} key={restraurant.info.id} />
        })
      }
   </div>
  }
  // end of map()
  
  
  
  
  const Footer = () => {
      return(
          <h4>Footer</h4>
      )
  }
  
  
  const AppLayout = () => {
      return (
          <>
         <Header/>
         <Body/>
         <Footer/>
         </>
      )
  }
  
  
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<AppLayout/>);  // to call function.
   
  
  
  