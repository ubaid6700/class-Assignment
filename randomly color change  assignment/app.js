var simpleColor = document.getElementById('#simpleColor');
var hexColor = document.getElementById('#hexColor');

var colors = ["red", "orange", "blue", "green", "purple"];
var body = document.querySelector('body');
var backg = document.getElementById('#background');
var clickMe = document.getElementById('#click');

clickMe.addEventListener("click", ()=> {
    const randomColor = auto();
    body.style.backgroundColor = randomColor;
    backg.innerHTML = randomColor;
});
var auto = ()=>{
    var autonumber = Math.round(Math.random() * colors.length);
    var autonumber1 = colors[autonumber];
    return autonumber1;
}

simple.addEventListener('click',()=>{
    var colors = ["red", "orange", "blue", "green", "purple"];
    var body = document.querySelector('body');
    var backg = document.getElementById('#background');
    var clickMe = document.getElementById('#click');
    
    clickMe.addEventListener("click", ()=> {
        const randomColor = auto();
        body.style.backgroundColor = randomColor;
        backg.innerHTML = randomColor;
    });
    var auto = ()=>{
        var autonumber = Math.round(Math.random() * colors.length)
        var autonumber1 = colors[autonumber];
        return autonumber1;
    }
} )


hex.addEventListener('click',()=>{
var backg = document.getElementById('#background')
var hexcolors = ["#F8CAA3", "#6BDA5D", "#BBD441", "#90BAE5", "#E5BA5F"];
var body = document.querySelector('body');
var clickMe = document.getElementById('#click');

clickMe.addEventListener("click", ()=> {
    const randomColor = auto();
    body.style.backgroundColor = randomColor;
    backg.innerHTML = randomColor;
});
var auto = ()=>{
    var autonumber = Math.round(Math.random() * hexcolors.length - 1)
    var autonumber1 = hexcolors[autonumber];
    return autonumber1;

}
})