class Key {
    private signature: number 
    constructor(){
        this.signature = Math.random();
    }
    getSignature(): number{
        return this.signature;
    }
}
class Person{
    private key: Key
    constructor(){
        this.key = new Key;
    };
    getKey():Key{
        return this.key;
    }
}
abstract class House {
    constructor(
        protected door: boolean,
        protected key: Key, 
        protected tenants: Person[]=[])
    {
        this.door = false;
        this.key = key;

    }
    abstract openDoor(key: Key): void;
    comeIn(person: Person): void{
        if(this.door){
            this.tenants.push(person);

        }else{
            console.log("Door closed")
        }
    };
};
 
class MyHouse extends House{
    constructor(key: Key, tenants: Person[] = []) {
        super(false, key, tenants);  
    }
    openDoor(key: Key): void {
        if(key.getSignature() === this.key.getSignature()){
            this.door=true;
        }else{
            console.log("Door closed")
        }
    }
}
const key = new Key();

const person = new Person();

const house = new MyHouse(key);
house.openDoor(person.getKey());

house.comeIn(person);


export {};