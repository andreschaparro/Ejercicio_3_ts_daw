class User {
    private _id:number;
    private _name:string;
    private _email:string;
    private _isLogged:boolean;

    constructor(id:number, email:string, name:string) {
        this._id = id;
        this._email = email;
        this._name = name;
        this._isLogged = false;
    }

    set id(id:number) {
        this._id = id;
    }
    get id(): number {
        return this._id;
    }
    set email(email:string) {
        this._email = email;
    }
    get email(): string {
        return this._email;
    }
    set name(name:string) {
        this._name = name;
    }
    get name(): string {
        return this._name;
    }
    set isLogged(flag:boolean) {
        this._isLogged = flag;
    }
    get isLogged(): boolean {
        return this._isLogged;
    }

    public printInfo():void {
        console.log("Nombre: " + this._name + " email: " + this._email + " logged: " + this._isLogged)
    }
}

class Main {
    main(): void {
        console.log("Hola mundo");
        let users:Array<User>;
        users = new Array<User>;
        users.push(new User(1, "juan@juan.com", "juan"));
        users.push(new User(2, "pepe@pepe.com", "pepe"));
        users.push(new User(3, "ana@juan.com", "ana"));
        for(let i in users) {
            users[i].printInfo();
        }
    }
}

window.onload = () => {
    let m:Main = new Main();
    m.main();
};