class Key {
    private signature: number = Math.random();

    getSignature(): number {
        return this.signature;
    }
}
class Person {

    constructor(private key: Key) {

    };
    getKey(): Key {
        return this.key;
    }
}
abstract class House {
    protected door: boolean;
    protected tenants: Person[] = []
    constructor(protected key: Key) { };
    abstract openDoor(key: Key): void;
    comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person);

        } else {
            console.log("Door closed")
        }
    };
};

class MyHouse extends House {

    openDoor(key: Key): void {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
        } else {
            console.log("Door closed")
        }
    }
}
const key = new Key();

const person = new Person(key);

const house = new MyHouse(key);
house.openDoor(person.getKey());

house.comeIn(person);


export { };