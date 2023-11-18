const cachedApiCall = (timer)=>{
    const cache = {};
    return async (url,payload={}) =>{
        const key = `${url}${JSON.stringify(payload)}`;
        if(!cache[key] || Date.now()> cache[key].expiry)
        {
            console.log("Make an api call");
            try{
                let data = await fetch(url,payload);
                data = await data.json();
                cache[key] = {
                    value:data,
                    expiry:Date.now()+timer
                }

            }catch(err){
                console.log(err)
            }
        }

        return cache[key].value;
    }
}


const call = cachedApiCall(1500);
call('https://jsonplaceholder.typicode.com/todos/1', {}).then((a) => console.log("1", a));
setTimeout(() => {
  call('https://jsonplaceholder.typicode.com/todos/1', {}).then((a) => console.log("2", a));
}, 800);
setTimeout(() => {
  call('https://jsonplaceholder.typicode.com/todos/1', {}).then((a) => console.log("3", a));
}, 1700);