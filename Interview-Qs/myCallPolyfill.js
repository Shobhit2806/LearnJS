Function.prototype.myCall = function (context={},...args){
    if(typeof this!=="function"){
        throw new Error(this + "Its not callable");
    }
    context.fn = this;
    context.fn(...args)
}
const mobileObj = {
    price:"124000",
    model:"Iphone 15 pro"
}
function purchaseMobile(brand){
    console.log( `I have purchased ${brand} ${this.model} for ${this.price}`)
}

purchaseMobile.myCall(mobileObj, "Apple");