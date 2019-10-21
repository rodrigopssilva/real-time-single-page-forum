<template>
    <div class="mt-4">
        <v-form @submit.prevent="create">
            <vue-simplemde v-model="body"></vue-simplemde>
            <v-btn
                dark
                color="green"
                @click="submit"
            >Reply</v-btn>
        </v-form>
    </div>
</template>

<script>
    export default {
        props: ['questionSlug'],
        data() {
            return {
                body: null,
            }
        },
        methods: {
            submit() {
                axios.post('/api/question/' + this.questionSlug + '/reply', {body: this.body})
                    .then(response => {
                        this.body = '';
                        EventBus.$emit('newReply', response.data.reply);
                        window.scrollTo(0, 0);
                    })
                    .catch(error => console.log(error.response.data));
            }
        }
    }
</script>

<style scoped>

</style>
