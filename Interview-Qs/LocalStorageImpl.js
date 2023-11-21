class LocalStorage {
    constructor() {
      this.store = new Map();
    }
    get length (){
      return this.store.size;
    };
    setItem = (...args) => {
      if (!args.length || args.length < 2) {
        throw new TypeError(`Expected two parameters but got ${args.length}`);
      }
  
      const [key, value] = args;
      this.store.set(String(key), String(value));
    };
    getItem = (...args) => {
      if (!args.length || args.length < 1) {
        throw new TypeError(`Expected 1 parameters but got ${args.length}`);
      }
  
      const [key] = args;
      return this.store.get(String(key));
    };
    removeItem=(key)=>{
      this.store.delete(String(key));
    };
    clear = () => {
      this.store.clear();
    };
  }
  
  const localStorage = new LocalStorage()