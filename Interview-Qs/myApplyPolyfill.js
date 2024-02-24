Function.prototype.myApply = function (context={},args=[]){
    if(typeof this!=="function"){
        throw new Error(this + "Its not callable");
    }
    if(!Array.isArray(args)){
        throw new Error(args+"is not an array")
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

purchaseMobile.myApply(mobileObj, ["Apple"]);