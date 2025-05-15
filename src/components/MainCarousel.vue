<script></script>

<template>
  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="@/assets/img/forReview.jpg" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <img src="@/assets/img/yande.jpg" alt="" class="foto z-2" />
          <h3>Yandex</h3>
          <p>Rasanya Enak ( walau agak gosong )</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="@/assets/img/forReview.jpg" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <img src="@/assets/img/kesava2.jpg" alt="" class="foto z-2" />
          <h3>Kesava Mas</h3>
          <p>Makanan nya Enak, Pelayan nya juga Hitam-hitam</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="@/assets/img/forReview.jpg" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <img src="@/assets/img/Ambatukam.jpg" alt="" class="foto z-2" />
          <h3>Mohammad Oby</h3>
          <p>Menunya Enak banget loh rek, Apalagi Muanichezee dengan kelezatan keju yang tiada tara dibuat dnegan Cinta dan Kasih Sayang</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="@/assets/img/forReview.jpg" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <img src="@/assets/img/ikanbengong.jpg" alt="" class="foto z-2" />
          <h3>Eliviana</h3>
          <p>Salah satu makanan Tradisional Terbaik yang saya Makan</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="@/assets/img/forReview.jpg" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <img src="@/assets/img/devara.jpg" alt="" class="foto z-2" />
          <h3>Devara</h3>
          <p>Salah satu makanan Tradisional Terbaik yang saya Makan</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="@/assets/img/forReview.jpg" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <img src="@/assets/img/wira.jpg" alt="" class="foto z-2" />
          <h3>Wira Rizquilah</h3>
          <p>Makanan Enak, Casir nya juga Cantik</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<style scoped>
.carousel-item img {
  opacity: 0;
}

.carousel-control-next,
.carousel-control-prev {
  top: -20% !important;
}

.carousel-caption img {
  opacity: 1;
}

.foto {
  border-radius: 50%;
  width: 20%;
  padding-block: 40px;
}

@media screen and (max-width: 394px) {
  .carousel {
    display: none;
  }
}
</style>
