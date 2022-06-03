<template>
    <footer class="footer-dark" style="margin-top: 5rem;">
        <div class="container">
            <div class="row">
                <div class="col-sm-6 col-md-3 item">
                    <img src="@/assets/img/hvl_logo.svg" height="42px" style="margin-top: 3rem;">
                </div>
                <div class="col-sm-6 col-md-3 item">
<img src="@/assets/img/livestilling_logo_hvit.svg" height="42px" style="margin-top: 3rem;">
                </div>
                <div class="col-md-6 item text">
                    <h3>LiveStilling</h3>
                    <p>Utviklet av Sebastian Wilhelmsen og Simen Gjerde som del av bachelorprosjekt.<br><br><br><br>Ønsker du å benytte løsningen for ditt arrengement?<br></p>
                    <p class="text-info" style="margin-bottom: 1rem;">Kontakt oss</p>
                </div>
            </div>
            <p class="copyright">LiveStilling © 2022</p>
        </div>
    </footer>
</template>

<style scoped>
.footer-dark {
  padding: 50px 0;
  color: #f0f9ff;
  background-color: #282d32;
}

.footer-dark h3 {
  margin-top: 0;
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 16px;
}

.footer-dark ul {
  padding: 0;
  list-style: none;
  line-height: 1.6;
  font-size: 14px;
  margin-bottom: 0;
}

.footer-dark ul a {
  color: inherit;
  text-decoration: none;
  opacity: 0.6;
}

.footer-dark ul a:hover {
  opacity: 0.8;
}

@media (max-width:767px) {
  .footer-dark .item:not(.social) {
    text-align: center;
    padding-bottom: 20px;
  }
}

.footer-dark .item.text {
  margin-bottom: 36px;
}

@media (max-width:767px) {
  .footer-dark .item.text {
    margin-bottom: 0;
  }
}

.footer-dark .item.text p {
  opacity: 0.6;
  margin-bottom: 0;
}

.footer-dark .item.social {
  text-align: center;
}

@media (max-width:991px) {
  .footer-dark .item.social {
    text-align: center;
    margin-top: 20px;
  }
}

.footer-dark .item.social > a {
  font-size: 20px;
  width: 36px;
  height: 36px;
  line-height: 36px;
  display: inline-block;
  text-align: center;
  border-radius: 50%;
  box-shadow: 0 0 0 1px rgba(255,255,255,0.4);
  margin: 0 8px;
  color: #fff;
  opacity: 0.75;
}

.footer-dark .item.social > a:hover {
  opacity: 0.9;
}

.footer-dark .copyright {
  text-align: center;
  padding-top: 24px;
  opacity: 0.3;
  font-size: 13px;
  margin-bottom: 0;
}


</style>