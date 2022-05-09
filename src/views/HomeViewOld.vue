<template>
    <div>
        <h1 class="display-6 text-center">Velg arrangement</h1>
        <div class="row">
            <div class="col-8 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-2 offset-2 offset-sm-4 offset-md-4 offset-lg-4 offset-xl-4 offset-xxl-5">
                <div class="card" style="margin-bottom: 3rem;">
                    <div class="card-body"><img src="@/assets/img/norway_cup_logo.svg" height="64" style="margin-bottom: 1rem;">
                        <h6 class="text-muted card-subtitle mb-2">30. Juli - 6. August</h6>
                        <p class="card-text"></p><a class="card-link" href="/kamp">Link</a><a class="card-link" href="/kamp"></a>
                    </div>
                </div>
            </div>
        </div>
        <h5 class="text-center" style="color: var(--bs-gray-800);">Sjekk stillingen på kampen live på mobilen</h5>
        <div id="image_spacer"><img id="grass_image" src="@/assets/img/gress_slette_bg.png" width="100%"></div>
    </div>
    <div style="padding-top: 22rem;">
        <h1 class="display-6 text-center">Kommende arrangementer</h1>
        <div class="row">
            <div class="col-sm-12 col-md-8 col-lg-8 col-xl-6 col-xxl-6 offset-md-2 offset-lg-2 offset-xl-3 offset-xxl-3" style="background: var(--bs-gray-100);">
                <div class="row">
                    <div class="col-auto"><img src="@/assets/img/voss_cup.png" height="64px"></div>
                    <div class="col">
                        <div class="row">
                            <div class="col">
                                <p>Voss Cup</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <p>10 - 12. Juni, 2022</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HomeViewOld',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#grass_image {
    position: absolute;
    bottom: 0px;
    left: 0%;
}
</style>
