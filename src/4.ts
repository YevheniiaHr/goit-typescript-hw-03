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
    constructor(private key: Key){
        this.key;
    };
    getKey():Key{
        return this.key;
    }
}
abstract class House {
    constructor(protected door: boolean,
        protected key: Key, 
        protected tenants: Person[]=[])
    {
        this.door =false;
        this.key =key;

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
    openDoor(key: Key): void {
        if(key.getSignature() === this.key.getSignature()){
            this.door=true;
        }else{
            console.log("Door closed")
        }
    }
}
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};