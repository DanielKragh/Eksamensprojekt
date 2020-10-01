<template>
  <div class="slider">
    <div class="slideshow-container">
      <!-- Full-width images with number and caption text -->
      <div class="mySlides fade">
        <img src="assets/images/slide1.jpg" style="width:100%" />
        <h2 class="text">Vi elsker at lave brød</h2>
      </div>

      <div class="mySlides fade">
        <img src="assets/images/slide2.jpg" style="width:100%" />
        <h2 class="text">Vi elsker at lave brød</h2>
      </div>

      <div class="mySlides fade">
        <img src="assets/images/slide3.jpg" style="width:100%" />
        <h2 class="text">Vi elsker at lave brød</h2>
      </div>

      <!-- Next and previous buttons -->
      <v-btn fab text class="prev" @click="plusSlides(-1)">
        <v-icon x-large>mdi-chevron-left</v-icon>
      </v-btn>
      <v-btn fab text class="next" @click="plusSlides(1)">
        <v-icon x-large>mdi-chevron-right</v-icon>
      </v-btn>
    </div>

    <!-- The dots/circles -->
    <div class="dots-container" style=" text-align:center">
      <span class="dot" @click="currentSlide(1)"></span>
      <span class="dot" @click="currentSlide(2)"></span>
      <span class="dot" @click="currentSlide(3)"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
  data() {
    return {
      slideIndex: 1
    };
  },
  methods: {
    // Next/previous controls
    plusSlides(n) {
      this.showSlides((this.slideIndex += n));
    },

    // Thumbnail image controls
    currentSlide(n) {
      this.showSlides((this.slideIndex = n));
    },

    showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {
        this.slideIndex = 1;
      }
      if (n < 1) {
        this.slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[this.slideIndex - 1].style.display = "block";
      dots[this.slideIndex - 1].className += " active";
    }
  },
  mounted() {
    this.showSlides(this.slideIndex);
  }
};
</script>

<style lang="scss" scoped>
.slider {
  position: relative;
}

.slideshow-container {
  width: 100%;
  position: relative;
  margin: auto;
}

.mySlides {
  display: none;
}

.prev,
.next {
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
  user-select: none;
}

.next {
  right: 0;
}

.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.text {
  color: #f2f2f2;
  font-size: 45px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media only screen and (max-width: 720px) {
    font-size: 30px;
  }
   @media only screen and (max-width: 520px) {
    font-size: 30px;
  }
}

.dots-container {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%, -50%);
  .dot {
    cursor: pointer;
    height: 10px;
    width: 10px;
    margin: 0 2px;
    background-color: rgb(255, 255, 255);
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
    &.active {
      background-color: #636363;
    }
  }
}

.active,
.dot:hover {
  background-color: #636363;
}

.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}
</style>