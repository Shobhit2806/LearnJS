const str = "Ultimate javascript / FrontEnd Guide"
const keywords = ["Javascript","Front","End"];


const highlight = (str,keywords,caseInsensitive = false) =>{

    if(caseInsensitive){
        keywords = keywords.map((word)=>word.toLowerCase());
    }

    const hasWord = (word)=>{
        word = caseInsensitive?word.toLowerCase():word;
        return uniqueKeyWords.has(word);
    }

    const uniqueKeyWords = new Set(keywords);
    const words = str.split(" ");

    const result = words.map((word)=>{
        let output = "";
        if(hasWord(word)){
            output = `<strong>${word}</strong>`;
        }else{
            for(let i=0;i<word.length;i++){
                let prefix = word.slice(0,i+1);
                let suffix = word.slice(i+1)

                if(hasWord(prefix) && hasWord(suffix)){
                    output = `<strong>${word}</strong>`;
                }
                else if(hasWord(prefix) && !hasWord(suffix)){
                    output = `<strong>${prefix}</strong>`
                }
                else if(!hasWord(prefix) && hasWord(suffix)){
                    output = `<strong>${suffix}</strong>`
                }
        
            

            }
        }

        return output!==""?output:word
    })


    return result.join(" ");

} 

console.log(highlight(str,keywords,true))