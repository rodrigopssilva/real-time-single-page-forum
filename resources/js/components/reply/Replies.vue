<template>
    <div>
        <reply
            v-for="(reply, index) in content"
            :key="reply.id"
            :index="index"
            :data="reply"></reply>
    </div>
</template>

<script>
    import Reply from './Reply';
    export default {
        components: {Reply},
        props: ['question'],
        data() {
            return {
                content: this.question.replies
            }
        },
        created() {
            this.listen();
        },
        methods: {
            listen() {
                EventBus.$on('newReply', (reply) => {
                    this.content.unshift(reply);
                });

                EventBus.$on('deleteReply', (index) => {
                    axios.delete('/api/question/' + this.question.slug + '/reply/' + this.content[index].id)
                        .then(response => {
                            this.content.splice(index, 1);
                        })
                        .catch(error => console.log(error.response.data));
                });
            },
        },
    }
</script>

<style scoped>

</style>
