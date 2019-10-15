/*
 * Programming Quiz: JuliaJames (4-1)
 */

var x = 1;

while (x < 21) {
    var name = (x % 3 === 0) ? "Julia" : "";
    name += (x % 5 === 0) ? "James" : "";
    console.log(name ? name : x);
    x++;
}
