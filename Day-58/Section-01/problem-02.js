//?Q2 : Create a product object that stores name and price and has a method that returns discounted price

let product={
    name:'Clothes',
    price:1200,
    DiscountedPrice:function(){
        return this.price-=200;
    }
}

console.log(product.DiscountedPrice());

