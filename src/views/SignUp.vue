<template>
    <div>
        <v-row justify="center" class="mt-5">
            <v-sheet width="600" color="blue" class="px-3">
                <v-text-field
                    label="First name"
                    filled
                    dense
                ></v-text-field>
                <v-text-field
                    label="Last name"
                    filled
                    dense
                ></v-text-field>
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
                <v-text-field
                    label="Confirm Password"
                    filled
                    dense
                ></v-text-field>
            </v-sheet>
            <v-btn>signup</v-btn>
            <v-btn>Go to Login</v-btn>
        </v-row>
        
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>