<script>
export default {
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      const nav = document.querySelector(".navbar");

      if (nav.clientHeight < window.scrollY) {
        nav.classList.add("nav-move");
        return;
      }
      nav.classList.remove("nav-move");
    },
  },
};
</script>
<template>
  <nav class="navbar navbar-expand-lg navbar-light position-fixed px-3">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="@/assets/img/FoodHub.png" alt="" width="100" height="60" />
      </a>
      <button class="btn btn-white border d-block d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
          <img src="@/assets/img/FoodHub.png" alt="" width="100" height="60" />
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body d-block d-lg-none">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#menu">Menu</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#ingridient">Ingredients</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#review">Review</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#gallery">Gallery</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="collapse d-flex justify-content-end navbar-collapse d-none d-lg-block" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#menu">Menu</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#ingridient">Ingredients</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#review">Review</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#gallery">Gallery</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style scoped>
.navbar {
  z-index: 99999;
  width: 100%;
  top: 0;
  transition: all 200ms;
  background: none;
}
.btn {
  padding-inline: 20px;
  padding-block: 10px;
}
.nav-link {
  color: aliceblue;
  font-weight: 600;
  padding-left: 20px !important;
  padding-right: 20px !important;
  border-radius: 10px;
}
.nav-link:hover {
  color: orange;
}
.nav-item {
  color: #83818c;
  padding: 5px;
  text-decoration: none;
  transition: 0.3s;
  margin: 0 6px;
  z-index: 1;
  font-family: "DM Sans", sans-serif;
  font-weight: 500;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: orange;
    border-radius: 8px 8px 0 0;
    opacity: 0;
    transition: 0.3s;
  }
}
.nav-item:not(.is-active):hover:before {
  opacity: 1;
  bottom: 0px;
}
.nav-item:not(.is-active):hover {
  color: #333;
}

.nav-move {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  background: rgba(255, 255, 255, 1);
  color: black;
}

.nav-move .text-brand-main {
  color: black;
}

.nav-move .nav-link {
  color: black;
}

@media screen and (max-width: 394px) {
  .navbar {
    background: #fff;
  }
  .offcanvas-body {
    color: black !important;
  }
  .nav-link {
    color: none;
  }
  .nav-item:not(.is-active):hover:before {
    opacity: 0;
    bottom: 0px;
  }
}
</style>
