var imageSlider = document.getElementById("something")

class slider {
    image = ''
    constructor(image) {
        this.image = image
    }
}

var image1 = new slider('images/image5.jpg')
var image2 = new slider('images/image6.jpg')
var image3 = new slider('images/image3.jfif')
var image4 = new slider('images/image4.jfif')

var render = function(template, node) {
    node.innerHTML = template
}
var something = `
<section class="size">
<h1>Your title can be long and descriptive</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Enim odio, corporis consequuntur architecto porro vitae minus
    officia neque.</p>
<button>READ MORE</button>
<div id="slider">
    <div class="slides">
        <input type="radio" name="r" id="r1" checked >
        <input type="radio" name="r" id="r2" >
        <input type="radio" name="r" id="r3" >
        <input type="radio" name="r" id="r4" >
        <div class="slide default">
            <img class="s1" src=${image1.image}>
        </div>
        <div class="slide">
            <img class="s1" src=${image2.image}>
        </div>
        <div class="slide">
            <img class="s1" src=${image3.image}>
        </div>
        <div class="slide">
            <img class="s1" src=${image4.image}>
        </div>
    </div>
    <div class="navigation">
        <label for="r1" class="bar"></label>
        <label for="r2" class="bar"></label>
        <label for="r3" class="bar"></label>
        <label for="r4" class="bar"></label>
    </div>
</div>
</section>`
render(something, imageSlider)