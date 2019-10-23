<template>
    <v-toolbar>
        <v-toolbar-title>Forum</v-toolbar-title>
        <v-spacer></v-spacer>
        <app-notification v-if="loggedIn"></app-notification>
        <div>
            <router-link v-for="item in items" :key="item.title" :to="item.to" v-if="item.show">
                <v-btn text>{{item.title}}</v-btn>
            </router-link>
        </div>
    </v-toolbar>
</template>

<script>
    import AppNotification from "./AppNotification";
    export default {
        components: {AppNotification},
        data() {
            return {
                loggedIn: User.isLoggedIn(),
                items: [
                    {title: 'Forum', to: '/forum', show: true},
                    {title: 'Ask Question', to: '/ask', show: User.isLoggedIn()},
                    {title: 'Category', to: '/category', show: User.admin()},
                    {title: 'Login', to: '/login', show: !User.isLoggedIn()},
                    {title: 'Logout', to: '/logout', show: User.isLoggedIn()},
                ]
            }
        },
        created() {
            EventBus.$on('logout', () => {
                User.logout();
            });
        }
    }
</script>

<style scoped>

</style>
