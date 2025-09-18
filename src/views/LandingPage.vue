<script>
import MainNavigation from "@/components/MainNavigation.vue";
import MainCarousel from "@/components/MainCarousel.vue";
import MainFooter from "@/components/MainFooter.vue";

export default {
  components: {
    Navigation: MainNavigation,
    Carousel01: MainCarousel,
    MainFooter: MainFooter,
  },
};
</script>
<template>
  <Navigation />
  <section class="hero">
    <!-- <video autoplay muted loop class="w-100 h-100 hero-video">
      <source src="@/assets/img/Finish.mp4" type="video/mp4" />
    </video> -->
    <img src="@/assets/img/FotoSate.jpg" class="hero-video" alt="">
    <div class="hero-text-content-wrapper">
      <div class="hero-title">
        <h1 class="fw-bold slide01"><span class="bali">Sate Lilit</span> Bali</h1>
        <h5 class="slide02">
          Dengan bumbu yang khas dan di dasarkan dengan <span class="orange">Daging Ayam</span>, sate lilit di panggang dengan arang sehingga memiliki <span class="orange">Kematangan Yang Pas</span>.
          Tak hanya sate yang Lezat, pada sajian ini juga di padukan dengan Nasi, Mentimun dan Sambal sebagai perasa tambahan nya.
        </h5>
        <a href="#menu">
          <button class="slide03">
            Let's Get Started
            <div class="star-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xml:space="preserve"
                version="1.1"
                style="shape-rendering: geometricPrecision; text-rendering: geometricPrecision; image-rendering: optimizeQuality; fill-rule: evenodd; clip-rule: evenodd"
                viewBox="0 0 784.11 815.53"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <defs></defs>
                <g id="Layer_x0020_1">
                  <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                  <path
                    class="fil0"
                    d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                  ></path>
                </g>
              </svg>
            </div>
            <div class="star-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xml:space="preserve"
                version="1.1"
                style="shape-rendering: geometricPrecision; text-rendering: geometricPrecision; image-rendering: optimizeQuality; fill-rule: evenodd; clip-rule: evenodd"
                viewBox="0 0 784.11 815.53"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <defs></defs>
                <g id="Layer_x0020_1">
                  <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                  <path
                    class="fil0"
                    d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                  ></path>
                </g>
              </svg>
            </div>
            <div class="star-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xml:space="preserve"
                version="1.1"
                style="shape-rendering: geometricPrecision; text-rendering: geometricPrecision; image-rendering: optimizeQuality; fill-rule: evenodd; clip-rule: evenodd"
                viewBox="0 0 784.11 815.53"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <defs></defs>
                <g id="Layer_x0020_1">
                  <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                  <path
                    class="fil0"
                    d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                  ></path>
                </g>
              </svg>
            </div>
            <div class="star-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xml:space="preserve"
                version="1.1"
                style="shape-rendering: geometricPrecision; text-rendering: geometricPrecision; image-rendering: optimizeQuality; fill-rule: evenodd; clip-rule: evenodd"
                viewBox="0 0 784.11 815.53"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <defs></defs>
                <g id="Layer_x0020_1">
                  <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                  <path
                    class="fil0"
                    d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                  ></path>
                </g>
              </svg>
            </div>
            <div class="star-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xml:space="preserve"
                version="1.1"
                style="shape-rendering: geometricPrecision; text-rendering: geometricPrecision; image-rendering: optimizeQuality; fill-rule: evenodd; clip-rule: evenodd"
                viewBox="0 0 784.11 815.53"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <defs></defs>
                <g id="Layer_x0020_1">
                  <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                  <path
                    class="fil0"
                    d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                  ></path>
                </g>
              </svg>
            </div>
            <div class="star-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xml:space="preserve"
                version="1.1"
                style="shape-rendering: geometricPrecision; text-rendering: geometricPrecision; image-rendering: optimizeQuality; fill-rule: evenodd; clip-rule: evenodd"
                viewBox="0 0 784.11 815.53"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <defs></defs>
                <g id="Layer_x0020_1">
                  <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                  <path
                    class="fil0"
                    d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                  ></path>
                </g>
              </svg>
            </div>
          </button>
        </a>
      </div>
    </div>
  </section>

  <section class="story container-fluid">
    <div class="row py-5" id="menu">
      <div class="col-lg-5 col-12 mx-auto">
        <div class="story-img">
          <img src="@/assets/img/StoryImg.jpg" alt="" />
        </div>
      </div>
      <div class="col-lg-7 d-flex justify-content-center px-5">
        <div class="row little-story">
          <div class="col-6 layout-story">
            <div class="d-flex align-items-center info-sate flex-column px-3">
              <img src="@/assets/img/FotoSate.jpg" alt="" class="img-sate" />
              <div class="text-sate">
                <h4>Sate Lilit</h4>
                <p>
                  Sate Lilit adalah sebuah varian sate asal Bali. Sate ini terbuat dari daging babi, ikan, ayam, daging sapi, atau bahkan kura-kura yang dicincang, kemudian dicampur dengan parutan
                  kelapa, santan, jeruk nipis, bawang merah, dan merica.
                </p>
              </div>
            </div>
          </div>
          <div class="col-6 layout-story">
            <div class="d-flex align-items-center info-sate flex-column px-3">
              <img src="@/assets/img/Drink.jpg" alt="" class="img-sate" />
              <div class="text-sate">
                <h4>Es Kelapa Muda</h4>
                <p>Es kelapa muda atau es degan adalah minuman segar penyejuk dahaga dan pikiran yang sedang panas yang terbuat dari daging dan air kelapa yang masih muda.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="pb-5" id="ingridient">
    <div class="ingridient-head">
      <div class="text-head">Discover</div>
      <h3>Our Ingridients</h3>
    </div>
    <div class="ingridient container-fluid py-5">
      <div class="row">
        <div class="col-lg-6 d-flex align-items-center flex-column">
          <div class="ingridient-judul text-center py-5">
            <h5>Tentang <br /><span>Sate Lilit</span></h5>
            <p>
              Sate lilit adalah salah satu makanan khas Bali. Sate lilit awalnya adalah makanan khas Klungkung. Namun saat ini sate lilit bisa ditemukan di seluruh wilayah di Bali. Sate lilit dulunya
              hanya dihidangkan saat ada upacara keagamaan saja. Sate lilit memiliki filosofi yakni menyimbolkan masyarakat Bali yang selalu bersatu.
            </p>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="story-img">
            <img src="@/assets/img/upangle.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="ingridient container-fluid py-5">
      <div class="row">
        <div class="col-lg-6">
          <div class="story-img">
            <img src="@/assets/img/Drink.jpg" alt="" />
          </div>
        </div>
        <div class="col-lg-6 d-flex align-items-center flex-column">
          <div class="ingridient-judul text-center py-5">
            <h5>Tentang <br /><span>Es Kelapa Muda</span></h5>
            <p>
              Es Kelapa Muda adalah minuman segar penyejuk dahaga dan pikiran yang sedang panas yang terbuat dari daging dan air kelapa yang masih muda. Es kelapa muda merupakan minuman yang berasal
              dari Indonesia yang banyak digemari oleh orang-orang.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="list-ingridient container-fluid">
      <div class="ingridient-judul d-flex flex-column align-items-center text-center py-5">
        <h5>Here's Our <br /><strong>Ingridients</strong></h5>
      </div>
      <div class="row">
        <div class="col-lg-2 text-center px-5 bahan">
          <img src="@/assets/img/luluhsate.jpeg" alt="" class="w-100" />
          <h3>Luluh Sate</h3>
        </div>
        <div class="col-lg-2 text-center px-5 bahan">
          <img src="@/assets/img/katiksate.jpeg" alt="" class="w-100" />
          <h3>Katik Sate</h3>
        </div>
        <div class="col-lg-2 text-center px-5 bahan">
          <img src="@/assets/img/daunlemo.jpeg" alt="" class="w-100" />
          <h3>Daun Lemo</h3>
        </div>
        <div class="col-lg-2 text-center px-5 bahan">
          <img src="@/assets/img/kikihnyuh.jpg" alt="" class="w-100" />
          <h3>Irisan Kelapa</h3>
        </div>
        <div class="col-lg-2 text-center px-5 bahan">
          <img src="@/assets/img/cabai.jpg" alt="" class="w-100" />
          <h3>Cabai</h3>
        </div>
        <div class="col-lg-2 text-center px-5 bahan">
          <img src="@/assets/img/kelapamuda.jpg" alt="" class="w-100" />
          <h3>Kepala Muda</h3>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="review-bg" id="review">
      <div class="judul-review text-center w-100 py-4">
        <h1>What is <br /><strong>People Say?</strong></h1>
      </div>
      <Carousel01 />
    </div>
  </section>

  <section class="gallery">
    <div class="gallery-head pt-5" id="gallery">
      <div>Let's See</div>
      <h1 class="mb-4">Our Gallery</h1>
    </div>
    <div class="container">
      <div class="row gy-4 pb-5">
        <div class="col-lg-8 col-12">
          <div class="row gy-4">
            <div class="col-md-6 col-12 position-relative">
              <div class="gallery-img-wrapper">
                <img src="@/assets/img/satebg.jpg" class="w-100 gallery-img-height-expand" />
              </div>
              <div class="gallery-name">Lilitan Sate</div>
            </div>
            <div class="col-md-6 col-12 position-relative">
              <div class="gallery-img-wrapper">
                <img src="@/assets/img/Drink.jpg" class="w-100 gallery-img-height-expand shadow" />
              </div>
              <div class="gallery-name">Kelapa Muda</div>
            </div>
            <div class="col-12 position-relative">
              <div class="gallery-img-wrapper">
                <img src="@/assets/img/FotoSate.jpg" class="w-100 gallery-img-height-short" />
              </div>
              <div class="gallery-name">Sate Bakar</div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-12">
          <div class="row gy-4">
            <div class="col-12 position-relative">
              <div class="gallery-img-wrapper">
                <img src="@/assets/img/panggangan.jpg" class="w-100" />
              </div>
              <div class="gallery-name">Pemanggang Sate</div>
            </div>
            <div class="col-12 position-relative">
              <div class="gallery-img-wrapper">
                <img src="@/assets/img/StoryImg.jpg" class="w-100" />
              </div>
              <div class="gallery-name">Complete Lunch</div>
            </div>

            <div class="col-12 position-relative">
              <div class="gallery-img-wrapper">
                <img src="@/assets/img/upangle.jpg" style="object-position: top" class="w-100 gallery-img-height-expand-2" />
              </div>
              <div class="gallery-name">Unique Style</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <MainFooter />
</template>
<style scoped>
.hero {
  overflow: hidden;
  color: white;
  height: 100vh;
  width: 100%;
  position: relative;
}
.hero-video {
  box-shadow: inset 0px -10px 10px rgb(255, 255, 255) !important;
  filter: brightness(0.7);
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.hero-text-content-wrapper {
  background: rgba(0, 0, 0, 0.06);
  background: linear-gradient(90deg,rgba(0, 0, 0, 0.5) 15%, rgba(255, 255, 255, 0) 90%);
  padding: 20px 0;
  max-height: 100vh;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  inset: 0;
}
.hero-title {
  position: relative;
  padding-inline: 70px;
  color: white;
  font-family: "poppins", sans-serif;
}
.hero-title h1 {
  font-size: clamp(1rem, 5vw + 0.5rem, 3rem);
}
.hero-title h5 {
  max-width: 100%;
  text-align: justify;
  padding-bottom: 10px;
}
.bali {
  color: orange;
}
.orange {
  color: orange;
}

button {
  position: relative;
  padding: 8px 30px;
  background: orange;
  font-size: 17px;
  font-weight: 500;
  color: #ffffff;
  border: 3px solid orange;
  border-radius: 8px;
  box-shadow: 0 0 0 orange;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  animation: 2s forwards btn;
}

@keyframes btn {
  0% {
    left: -1000px;
  }
  80% {
    left: 20px;
  }
  100% {
    left: 0px;
  }
}

.star-1 {
  position: absolute;
  top: 20%;
  left: 20%;
  width: 25px;
  height: auto;
  filter: drop-shadow(0 0 0 #fffdef);
  z-index: -5;
  transition: all 1s cubic-bezier(0.05, 0.83, 0.43, 0.96);
}

.star-2 {
  position: absolute;
  top: 45%;
  left: 45%;
  width: 15px;
  height: auto;
  filter: drop-shadow(0 0 0 #fffdef);
  z-index: -5;
  transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
}

.star-3 {
  position: absolute;
  top: 40%;
  left: 40%;
  width: 5px;
  height: auto;
  filter: drop-shadow(0 0 0 #fffdef);
  z-index: -5;
  transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
}

.star-4 {
  position: absolute;
  top: 20%;
  left: 40%;
  width: 8px;
  height: auto;
  filter: drop-shadow(0 0 0 #fffdef);
  z-index: -5;
  transition: all 0.8s cubic-bezier(0, 0.4, 0, 1.01);
}

.star-5 {
  position: absolute;
  top: 25%;
  left: 45%;
  width: 15px;
  height: auto;
  filter: drop-shadow(0 0 0 #fffdef);
  z-index: -5;
  transition: all 0.6s cubic-bezier(0, 0.4, 0, 1.01);
}

.star-6 {
  position: absolute;
  top: 5%;
  left: 50%;
  width: 5px;
  height: auto;
  filter: drop-shadow(0 0 0 #fffdef);
  z-index: -5;
  transition: all 0.8s ease;
}

button:hover {
  background: transparent;
  color: #fec195;
  box-shadow: 0 0 25px #fec1958c;
}

button:hover .star-1 {
  position: absolute;
  top: -80%;
  left: -30%;
  width: 25px;
  height: auto;
  filter: drop-shadow(0 0 10px #fffdef);
  z-index: 2;
}

button:hover .star-2 {
  position: absolute;
  top: -25%;
  left: 10%;
  width: 15px;
  height: auto;
  filter: drop-shadow(0 0 10px #fffdef);
  z-index: 2;
}

button:hover .star-3 {
  position: absolute;
  top: 55%;
  left: 25%;
  width: 5px;
  height: auto;
  filter: drop-shadow(0 0 10px #fffdef);
  z-index: 2;
}

button:hover .star-4 {
  position: absolute;
  top: 30%;
  left: 80%;
  width: 8px;
  height: auto;
  filter: drop-shadow(0 0 10px #fffdef);
  z-index: 2;
}

button:hover .star-5 {
  position: absolute;
  top: 25%;
  left: 115%;
  width: 15px;
  height: auto;
  filter: drop-shadow(0 0 10px #fffdef);
  z-index: 2;
}

button:hover .star-6 {
  position: absolute;
  top: 5%;
  left: 60%;
  width: 5px;
  height: auto;
  filter: drop-shadow(0 0 10px #fffdef);
  z-index: 2;
}

.fil0 {
  fill: #fffdef;
}

.hero-title .slide01 {
  animation: 3s forwards hero-ezzy-showup;
}
@keyframes hero-ezzy-showup {
  0% {
    left: -50px;
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    left: 0;
    opacity: 1;
  }
}

.hero-title .slide02 {
  width: 50%;
  animation: 10s forwards welcome-showup;
}

@keyframes welcome-showup {
  0% {
    opacity: 0;
    top: -20px;
  }

  40% {
    opacity: 1;
  }

  100% {
    top: 0;
  }
}

.head h2 {
  color: orange;
  font-family: "Courgette", "sans-serif";
  text-align: center;
}

.head-span {
  font-family: "poppins", sans-serif;
  color: black;
  font-weight: 600;
}

.story-img[data-v-f0577048] {
  width: 100%;
  max-width: 450px;
  margin-inline: auto;
  aspect-ratio: 1 / 1;
  border-radius: 8px;
  overflow: hidden;
}

.story-img > img[data-v-f0577048] {
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: all 300ms;
}

.story-img > img[data-v-f0577048]:hover {
  transform: scale(1.2);
}

.img-sate {
  aspect-ratio: 1/1;
  border-radius: 50%;
  width: 60%;
  box-shadow: 5px 10px 20px 5px rgba(0, 0, 0, 0.2);
}

.info-sate {
  border-radius: 10px;
  padding-block: 20px;
  transition: all 0.5s;
}

.info-sate:hover {
  box-shadow: 5px 5px 25px 5px rgba(0, 0, 0, 0.1);
  transform: translateY(-10px);
}

.text-sate {
  padding-block: 20px;
  padding-inline: 10px;
  text-align: center;
}

.ingridient-head {
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(@/assets/img/satebg.jpg);
  background-position: center;
  background-repeat: no-repeat;
  padding: 80px 0px;
  transition: all 500ms;
  background-attachment: fixed;
  margin-bottom: 30px;
}

.text-head {
  color: orange;
  font-size: 2.1rem;
  font-family: "Courgette", sans-serif;
}

.ingridient-head h3 {
  font-weight: 600;
  font-size: 2.5rem;
  font-family: "poppins", sans-serif;
}

.ingridient-judul h5 span::before {
  position: absolute;
  content: "";
  background-color: black;
  width: 70%;
  border-radius: 8px;
  height: 5px;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -100%);
}

.ingridient-judul h5 {
  font-family: "Courgette", sans-serif;
  color: orange;
  font-size: 2rem;
}
.ingridient-judul h5 span {
  font-family: "poppins", sans-serif;
  color: black;
  font-size: 2.8rem;
  position: relative;
  padding-bottom: 10px;
}

.ingridient-judul p {
  padding-inline: 5rem;
  padding-top: 20px;
  font-size: 1.2rem;
}

.bahan img {
  border-radius: 50%;
  transition: 400ms;
}

.bahan img:hover {
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.2);
  transform: translateY(-5px);
}

.bahan h3 {
  font-family: "poppins", sans-serif;
  font-size: 1.2rem;
  padding-top: 10px;
}

.ingridient-judul strong {
  color: black;
  font-family: "poppins", sans-serif;
}

.judul-review {
  z-index: 999;
  font-family: "courgette", sans-serif;
  color: orange;
}

.judul-review strong {
  font-family: "poppins", sans-serif;
  color: white;
}

.review-bg {
  /* position: absolute; */
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/src/assets/img/forReview.jpg);
  background-position: center;
  background-repeat: no-repeat;
  padding: 0px;
  transition: all 500ms;
  /* margin-bottom: 30px; */
}

.gallery {
  background-color: #f3efea;
}

.gallery img {
  object-fit: cover;
  filter: brightness(0.8);
  border-radius: 8px;
  aspect-ratio: 460/307;
}

.gallery-head {
  text-align: center;
}

.gallery-head :nth-child(1) {
  font-size: clamp(1rem, 0.5rem + 5vw, 2rem);
  font-weight: 600;
  color: orange;
  font-family: "Courgette", "sans-serif";
}

.gallery-head :nth-child(2) {
  font-weight: 700;
  text-transform: uppercase;
  font-size: clamp(1.5rem, 0.5rem + 8vw, 2.5rem);
}

.gallery-img-height-expand {
  aspect-ratio: 460/660 !important;
}

.gallery-img-height-expand-2 {
  aspect-ratio: 460/437 !important;
}

.gallery-img-height-short {
  aspect-ratio: 460/205 !important;
}

.gallery-name {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: clamp(1rem, 2vw + 0.5rem, 1.3rem);
  width: max-content;
  max-width: 100%;
  color: #5f5753;
  text-transform: uppercase;
  font-weight: 600;
  background-color: rgba(255, 251, 251, 0.922);
  padding: 10px 20px;
  border-radius: 8px;
  transform: translate(-50%, -50%);
  transition: all 500ms;
}

.gallery-name:hover {
  background-color: orange;
  color: white;
}

.gallery-img-wrapper {
  overflow: hidden;
}

.gallery-img-wrapper img {
  transition: all 500ms;
}

.gallery-img-wrapper img:hover {
  transform: scale(1.2);
}

@media screen and (max-width: 394px) {
  .hero-title h5 {
    font-size: 10px;
  }
  .hero {
    margin-top: 22%;
  }
  .slide02 {
    display: none;
  }
  .slide01 {
    font-size: 2.2rem !important;
  }
  button {
    font-size: 10px;
    width: 80%;
    padding: -10px;
    margin-left: 24px;
  }
  .review-bg {
    display: none;
  }
  .little-story {
    flex-direction: column;
  }
  .text-sate {
    width: 100%;
    padding-block: 10px;
    padding-inline: 0px;
  }
  .layout-story {
    width: 100%;
  }
  .ingridient-judul p {
    padding-inline: 1rem;
  }
}
</style>
