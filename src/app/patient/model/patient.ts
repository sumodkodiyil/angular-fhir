export class Patient{
    id: string;
    name: string;
    gender: string;
    birthDate: Date;

    constructor(id: string, name:string, gender: string, birthDate: string){
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.birthDate = new Date(birthDate);
    }
}