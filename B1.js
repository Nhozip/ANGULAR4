var HocSinh = (function () {
    function HocSinh(age, id, name) {
        this.age = age;
        this.name = name;
        this.id = id;
    }
    HocSinh.prototype.setAge = function (age) {
        if (age < 0) {
            this.age = 0;
        }
    };
    HocSinh.prototype.getAge = function () {
        return this.age;
    };
    return HocSinh;
}());
var s = new HocSinh(10, "AHDAJDKAJK", "Nhozip");
var s1 = new HocSinh(10, "AHDAJDKAJK", "Nhozip");
s.setAge(-1);
s1.setAge(33);
console.log(s.getAge());
console.log(s1.getAge());
