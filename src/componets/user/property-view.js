import Base from './../Base.js'

export default class PropertyView extends Base {

    css = `
    * {box-sizing:border-box}

    /* Slideshow container */
    .slideshow-container {
      max-width: 20em;
      position: relative;
      margin: auto;
    }
    
    /* Next & previous buttons */
    .prev, .next {
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: auto;
      margin-top: -22px;
      padding: 16px;
      color: white;
      font-weight: bold;
      font-size: 18px;
      transition: 0.6s ease;
      border-radius: 0 3px 3px 0;
      user-select: none;
    }
    
    /* Position the "next button" to the right */
    .next {
      right: 0;
      border-radius: 3px 0 0 3px;
    }
    
    /* On hover, add a black background color with a little bit see-through */
    .prev:hover, .next:hover {
      background-color: rgba(0,0,0,0.8);
    }
    
    
    /* Fading animation */
    .fade {
      -webkit-animation-name: fade;
      -webkit-animation-duration: 1.5s;
      animation-name: fade;
      animation-duration: 1.5s;
    }
    
    @-webkit-keyframes fade {
      from {opacity: .4}
      to {opacity: 1}
    }
    
    @keyframes fade {
      from {opacity: .4}
      to {opacity: 1}
    }


    `
    content = `

    <div class="slideshow-container">

    <!-- Full-width images with number and caption text -->
    <div class="mySlides fade">
      <img src="./assets/images/desk3.png" style="width:100%" />
    </div>
  
    <div class="mySlides fade">
      <img src="./assets/images/desk2.png" style="width:100%" />
    </div>
    <div class="mySlides fade">
      <img src="./assets/images/desk.png" style="width:100%" />
    </div>
  
    <!-- Next and previous buttons -->
    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
    <a class="next" onclick="plusSlides(1)">&#10095;</a>
  </div>
  <br>
<script>
  var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
</script>


        <div>
           <div>
            <button>Previus</button>
            <img src="">
            <button>Next</button>
           </div>
           <div>
            <div>
                <h3>Title</h3>
                <span>Star</span>
                <span>Share</span>
                <button>Pricegdsai</button>
            </div>
            <div>
                Description
            </div>
            <div>
                <button>Comment</button>
                <button>Reserve</button>
                <button>More>></button>
            </div>
           </div>
        </div>
    `

    constructor() {
        super()
        this.mount()
    }

}

window.customElements.define('property-view', PropertyView)
