<template>
    <div>
        <v-row justify="center" class="mt-5">
            <v-sheet width="600" color="blue" class="px-3">
                <v-text-field
                    label="Email"
                    filled
                    dense
                ></v-text-field>
                <v-text-field
                    label="Password"
                    filled
                    dense
                ></v-text-field>
            </v-sheet>
            <v-btn>Login</v-btn>
            <v-btn>Go to Signup</v-btn>
        </v-row>
        
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>