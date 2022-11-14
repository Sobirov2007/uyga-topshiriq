////? Yosh kakulyatori
var year = 2022;
var birthyear = 2007;
var next = "Sizning yoshingiz " + (year - birthyear) + " Da "; //!Sizning yoshingiz 15 da
console.log(next);

////? Choy qancha istemol qilish hisobi
// var age = 15;
// var maxage = 90;
// var numperday = 3;
// var next = numperday * 365 * + (maxage - age);
// var next2 = "Sizning keksalikga qadar choy istemol qilishingiz hisobi: " + (next) + " ";
// console.log(next2);   //!Sizning keksalikga qadar choy istemol qilishingiz hisobi
////?alphabet
function alphabet_order(str) {
  return str.split("").sort().join("")
}
console.log(alphabet_order("Jorabek")); //!ismingizni teskarisi
////? . /[l]/g
// let text = "Hello world! My friends";
// let search = /[l]/g;
// let result = text.match(search);
// console.log(result);

////?Dunyo tarjimoni
function helloWorld(lang) {
  if (lang == "en") { 
    return "Hello";
  } else if (lang == "fz") {//Fransuzchada
    return "Bonjour";
  } else if (lang == "en") {//inglit tilida
    return "Hello";
  } else if (lang == "hind") {//hindchada
    return "नमस्ते";
  } else if (lang == "ben") {//bengalcha
    return "হ্যালো";
  } else if (lang == "tj") {//tojikchada
    return "Салом";
  } else if (lang == "af") {//afg'onvha
    return "haai daar";
  } else if (lang == "tuk") {//turkmancha
    return "Salam";
  } else if (lang == "uk") {//ukraincha
    return "Привіт";
  } else if (lang == "ru") {//ruscha
    return "Всем привет";
  }
}
console.log(helloWorld("en"));
console.log(helloWorld("fz"));
console.log(helloWorld("en"));
console.log(helloWorld("hind"));
console.log(helloWorld("ben"));
console.log(helloWorld("tj"));
console.log(helloWorld("af"));
console.log(helloWorld("tuk"));
console.log(helloWorld("uk"));
console.log(helloWorld("ru"));