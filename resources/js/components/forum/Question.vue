<template>
    <v-card class="mt-2">
        <v-card-title primary-title>
            <div>
                <h3 class="headline mb0">
                    <router-link :to="data.path">
                        {{data.title}}
                    </router-link>
                </h3>
                <div class="grey--text">
                    {{data.user}} asked {{data.created_at}}
                </div>
            </div>
        </v-card-title>
        <v-card-text>
            {{data.body}}
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        props: ['data']
    }
</script>

<style scoped>

</style>
