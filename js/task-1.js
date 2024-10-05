function slugify(title) {
const sum = title.split(" ");
return sum.join("-").toLowerCase();


}
console.log(slugify("English for developer"));