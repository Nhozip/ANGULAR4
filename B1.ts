class HocSinh {
    id: string;
    name: string;
  private  age: number;
    constructor(age: number, id: string, name: string) {
        this.age = age;
        this.name = name;
        this.id = id;
    }
    setAge(age:number){
        if(age<0){
            this.age=0;
        }
    }
    getAge(){
        return this.age;
    }
}
var s: HocSinh = new HocSinh(10, "AHDAJDKAJK", "Nhozip");
var s1: HocSinh = new HocSinh(10, "AHDAJDKAJK", "Nhozip");
s.setAge(-1)
s1.setAge(33)
console.log(s.getAge())
console.log(s1.getAge())