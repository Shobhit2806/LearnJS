Function.prototype.myBind = function (context={},...args){
    if(typeof this!=="function"){
        throw new Error(this + "cannot be bound as it is not callable");
    }
    context.fn = this;
    return function(...newArgs){
        return context.fn(...args,...newArgs)
    }
}
const mobileObj = {
    price:"124000",
    model:"Iphone 15 pro"
}
function purchaseMobile(brand){
    console.log( `I have purchased ${brand} ${this.model} for ${this.price}`)
}

const checkBind = purchaseMobile.myBind(mobileObj);
checkBind( "Apple");