export class User {
    private _firstname: string;
    private _surname: string;
    private _age: number;
    private _gender: string;
    private _id?: number;

    constructor(){}
    // accessor and mutator methods (getter and setter)
    get firstname(){
        return this._firstname
    }
    set firstname(n){
        if (n !== '' && n !='   '){
            this._firstname = n
        }
        else {
            this._firstname = 'Ethel'
        }
    }
    get surname(){
        return this._surname
    }
    set surname(s){
        if (s !== ''){
            this._surname = s
        }
    }
    get age(){
        return this._age
    }
    set age(a){
        if (a > 18 && a <80){
            this._age = a
        }
    }
    get gender(){
        return this._gender
    }
    set gender(g){
        if (g in ['female', 'male', 'non-specific']){
            this._gender = g
        }
    }
    get id(){
        return this._id
    }
    set id(i){ // we should check id is unique!
        if (i >=0 ){
            this._id = i
        }
    }

}
