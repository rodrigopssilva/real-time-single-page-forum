<template>
    <v-toolbar>
        <v-toolbar-title>Forum</v-toolbar-title>
        <v-spacer></v-spacer>
        <div>
            <router-link to="/">
                <v-btn text>Forum</v-btn>
            </router-link>
            <v-btn text>Ask Question</v-btn>
            <v-btn text>Category</v-btn>
            <router-link to="/login">
                <v-btn text>Login</v-btn>
            </router-link>
        </div>
    </v-toolbar>
</template>

<script>
    export default {
        name: 'Toolbar'
    }
</script>

<style scoped>

</style>
