import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    id:uuid(),
    name : 'Roadstr',
    image:"https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    desc : 'Men Fluorescent Woven Design Sneakers',
    category:'Sneakers',
    price : 299,
    strikePrice : 399,
    offer : '50% OFF',
    rating : 2.7,
    quantity : 1,
    outOfStock: false,
    fastDelivery : true
},
{
    id:uuid(),
    name : 'Roadstr',
    image:"https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    desc : 'Men Fluorescent Woven Design Sneakers',
    category:'Sneakers',
    price : 555,
    strikePrice : 599,
    offer : '20% OFF',
    rating : 3.5,
    quantity : 1,
    outOfStock: true,
    fastDelivery : false
},
{
    id:uuid(),
    name : 'Crew STREET',
    image:"https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619__480.jpg",
    desc : 'Men Fluorescent Green Woven Design Sneakers',
    category:'Casual Shoes',
    price : 599,
    strikePrice : 699,
    offer : '60% OFF',
    rating : 4.8,
    quantity : 1,
    outOfStock: false,
    fastDelivery : true
},
{
    id:uuid(),
    name : 'Crew STREET',
    image:"https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619__480.jpg",

    desc : 'Men Fluorescent Green Woven Design Sneakers',
    category:'Casual Shoes',
    price : 1999,
    strikePrice : 1199,
    offer : '30% OFF',
    rating : 4.5,
    quantity : 1,
    outOfStock: false,
    fastDelivery : true
},

{
    id:uuid(),
    name : 'Crew Streat',
    image : "https://images.pexels.com/photos/3598123/pexels-photo-3598123.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    desc : 'Men Fluorescent Green Woven Design Sneakers',
    category:'Sandals',
    price : 999,
    strikePrice : 1199,
    offer : '30% OFF',
    rating : 4.5,
    quantity : 1,
    outOfStock: false,
    fastDelivery : true
},
{
    id:uuid(),
    name : 'Crew Streat',
    image : "/images/sportShoes.png",
    desc : 'Men Fluorescent Green Woven Design Sneakers',
    category:'Sports Shoes',
    price : 999,
    strikePrice : 1199,
    offer : '30% OFF',
    rating : 4.5,
    quantity : 1,
    outOfStock: false,
    fastDelivery : true
},
{
    id:uuid(),
    name : 'Crew Streat',
    image : "https://cdn.pixabay.com/photo/2020/02/28/10/44/shoes-4887100__340.jpg",
    desc : 'Men Fluorescent Green Woven Design Sneakers',
    category:'Formal Shoes',
    price : 1599,
    strikePrice : 1699,
    offer : '55% OFF',
    rating : 4.7,
    quantity : 1,
    outOfStock: false,
    fastDelivery : false
},
{
    id:uuid(),
    name : 'Crew Streat',
    image : "https://images.pexels.com/photos/5148368/pexels-photo-5148368.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    desc : 'Men Fluorescent Green Woven Design Sneakers',
    category:'Flip Flops',
    price : 1599,
    strikePrice : 1699,
    offer : '55% OFF',
    rating : 4.7,
    quantity : 1,
    outOfStock: false,
    fastDelivery : false
},
{
    id:uuid(),
    name : 'Crew Streat',
    image : "https://cdn.pixabay.com/photo/2015/04/09/19/56/sock-715024__340.jpg",
    desc : 'Men Fluorescent Green Woven Design Sneakers',
    category:'Socks',
    price : 2999,
    strikePrice : 3999,
    offer : '70% OFF',
    rating : 5.0,
    quantity : 1,
    outOfStock: true,
    fastDelivery : false
}
];
