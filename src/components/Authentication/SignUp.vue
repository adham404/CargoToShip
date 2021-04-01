<template>
  <v-container>
  <v-form class="mt-10">
      <v-col>
      <v-row>
      <v-text>Already Have an account <a @click="GoToSignUp">Log in</a></v-text>
      </v-row>
      <v-row>
      <v-text-field
      v-model="FirstName"
      label="First Name"
      ></v-text-field>
      </v-row>
      <v-row>
      <v-text-field
      v-model="LastName"
      type="email"
      label="Last Name"
      ></v-text-field>
      </v-row>
      <v-row>
      <v-text-field
      v-model="Email"
      type="email"
      label="Email"
      ></v-text-field>
      </v-row>
      <v-row>
      <v-text-field
      v-model="Password"
      type="password"
      label="Password"
      ></v-text-field>
      </v-row>
      <v-row>
      <v-text-field
      v-model="ConfirmPassword"
      type="password"
      label="Confirm Password"
      ></v-text-field>
      </v-row>
      <v-row>
    <v-btn @click="Login">Sign Up</v-btn>
      </v-row>
      </v-col>
  </v-form>
</v-container>

</template>

<script>
export default {

}
</script>

<style>

</style>