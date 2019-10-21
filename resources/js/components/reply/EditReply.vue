<template>
    <div class="mt-4">
        <v-form @submit.prevent="update">
            <vue-simplemde v-model="reply.reply"></vue-simplemde>
            <v-card-actions>
                <v-btn icon small @click="update">
                    <v-icon color="green">save</v-icon>
                </v-btn>
                <v-btn icon small @click="cancel">
                    <v-icon color="black">cancel</v-icon>
                </v-btn>
            </v-card-actions>
        </v-form>
    </div>
</template>

<script>
    export default {
        props: ['reply'],
        methods: {
            update() {
                let url = '/api/question/' + this.reply.question_slug + '/reply/' + this.reply.id;
                axios.patch(url, {body: this.reply.reply})
                    .then(response => {
                        this.cancel();
                    })
                    .catch(error => console.log(error.response.data));
            },
            cancel() {
                EventBus.$emit('cancelEditing');
            },
        }
    }
</script>

<style scoped>

</style>
