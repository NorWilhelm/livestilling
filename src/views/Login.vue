<template>
     <div class="col-8 offset-2 text-center" style="margin-bottom: 600px">
        <h1 class="display-6">Logg inn</h1>
        <div class="row">
            <div class="col"><input type="email" name="Email" placeholder="Email" style="margin: 0.5rem; width: 250px" inputmode="email" required="" minlength="3"></div>
        </div>
        <div class="row">
            <div class="col"><input v-model="password" type="password" name="Password" placeholder="Password" inputmode="password" style="margin: 0.5rem; width: 250px"></div>
        </div>
        <div class="row">
            <div class="col"><button class="btn btn-primary m-3" type="button" @click="onLogin()">Logg inn</button>
            <p style="color: var(--bs-gray-600);height: 12px;">Kontakt oss</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LoginView",
    data() {
        return {
            password: ''
        }
    },
    methods: {
        onLogin() {
            this.$store.dispatch('logUserIn', this.password)
        }
    }
}
</script>