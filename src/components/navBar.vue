<template>
   <div class="row">
        <div class="col-8 offset-2">
            <nav class="navbar navbar-light navbar-expand-md" style="margin-bottom: 1rem;height: 80px;">
                <div class="container">
                 <router-link to="/"><img src="@/assets/img/livestilling_new_logo.svg" alt="LiveStilling Logo" style="width: 128px;"></router-link>
                <button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-1"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navcol-1">
                        <ul class="navbar-nav pt-1">
                            <li class="nav-item flex-grow-1 px-2"><router-link class="nav-link active" to="/"><i class="icon ion-home"></i><span>&nbsp;Hjem</span></router-link></li>
                            <li class="nav-item px-2">    
                                <router-link class="nav-link" to="/">
                                    <span>&nbsp;Turneringer</span>
                                </router-link>
                            </li>
                            <li class="nav-item px-2"><a class="nav-link" href="#">Mer</a></li>
                        </ul>
                    </div>
                    <router-link v-if="user == ''" class="btn btn-outline" role="button" to="/login">Logg inn</router-link>
                    <p v-if="user == 'dommer'">Logget inn som dommer</p>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters.getUser;
    },
  }
};
</script>