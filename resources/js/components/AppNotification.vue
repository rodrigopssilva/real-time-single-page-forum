<template>
    <div class="text-center">
        <v-menu offset-y>
            <template v-slot:activator="{ on }">
                <v-btn text v-on="on">
                    <v-icon :color="color">add_alert</v-icon> {{unReadCount}}
                </v-btn>
            </template>
            <v-list>
                <v-list-item v-for="item in unRead" :key="item.id">
                    <router-link :to="item.path">
                        <v-list-item-title @click="readIt(item)">{{item.question}}</v-list-item-title>
                    </router-link>
                </v-list-item>
                <v-list-item v-for="item in read" :key="item.id">
                    <v-list-item-title>{{item.question}}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                read: {},
                unRead: {},
                unReadCount: 0,
            }
        },
        created() {
            if (User.isLoggedIn()) {
                this.getNotifications();
            }
        },
        methods: {
            getNotifications() {
                axios.post('/api/notifications')
                    .then(response => {
                        this.read = response.data.read;
                        this.unRead = response.data.unRead;
                        this.unReadCount = response.data.unRead.length;
                    })
                    .catch(error => console.log(error.response.data));
            },
            readIt(notification) {
                axios.post('/api/markAsRead', {id:notification.id})
                    .then(response => {
                        this.unRead.splice(notification, 1);
                        this.read.push(notification);
                        this.unReadCount--;
                    })
                    .catch(error => console.log(error.response.data));
            },
        },
        computed: {
            color() {
                return this.unReadCount > 0 ? 'red' : 'red lighten-4';
            }
        }
    }
</script>

<style scoped>

</style>
