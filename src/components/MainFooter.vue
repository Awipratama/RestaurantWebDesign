<template>
  <section class="footer">
    <div class="container-fluid">
      <div class="row p-5">
        <div class="col-lg-6">
          <div class="contact">
            <h3>Contact Person</h3>
            <form action="">
              <label for="name">From : </label><br />
              <input type="text" id="name" name="name" class="w-75" placeholder="Your Name" /><br />
              <label for="coments">Send Your Messages Here : </label><br />
              <textarea name="coments" id="coments" cols="30" rows="10" placeholder="Here You Can Type" class="w-75"></textarea><br /><br />
              <a href="" class="btn-custom">Submit</a>
            </form>
          </div>
        </div>
        <div class="col-lg-6 pt-5">
          <h5><i class="bi bi-geo-alt p-2"></i>LOCATION</h5>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2214.065085003739!2d115.15666726575266!3d-8.59449766523574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1713322218990!5m2!1sid!2sid"
            width="600"
            height="450"
            style="border: 0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="the-location"
          ></iframe>
        </div>
      </div>
    </div>
    <div class="end-footer container-fluid text-center">
      <a href="https://www.instagram.com/little_fish05"><i class="bi bi-instagram fs-3"></i></a>
      <p class="m-0 py-2">CopyRight & Made By AwiPratama</p>
    </div>
  </section>
</template>
<style scoped>
.footer {
  color: white;
  background: rgb(60, 60, 60);
  font-family: "poppins", sans-serif;
}

.contact h3 {
  padding-bottom: 10px;
}

form label {
  padding-block: 15px;
  font-size: 18px;
}

form input {
  border-radius: 8px;
  font-size: 15px;
  padding: 10px;
  background: rgba(0, 0, 0, 0.3);
  color: white;
}

form textarea {
  border-radius: 8px;
  padding: 10px;
  background: rgba(0, 0, 0, 0.3);
  color: white;
}

.end-footer {
  background: black;
  padding: 20px;
}

.end-footer a {
  transition: all 400ms;
  color: white;
}

.end-footer a:hover {
  transform: translateY(10px);
  color: orangered;
}

p {
  font-size: 15px;
}

.btn-custom {
  padding-inline: 25px;
  padding-block: 10px;
  border-radius: 10px;
  background: #1ecbe1;
  text-decoration: none;
  color: white;
  transition: 500ms;
  font-weight: 600;
}

.btn-custom:hover {
  color: black;
  background: white;
}

@media screen and (max-width: 394px) {
  .the-location {
    width: 100%;
  }
}
</style>
