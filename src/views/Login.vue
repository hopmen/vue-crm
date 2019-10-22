<template>
  <form @submit.prevent="submitHandler" class="card auth-card">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input
          :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
          id="email"
          type="text"
          v-model.trim="email"
        >
        <label for="email">Email</label>
        <small
          class="helper-text invalid"
          v-if="$v.email.$dirty && !$v.email.required"
        >не пустое</small>
        <small
          class="helper-text invalid"
          v-else-if="$v.email.$dirty && !$v.email.email"
        >Коректный емаил</small>
      </div>
      <div class="input-field">
        <input
          :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
          id="password"
          type="password"
          v-model.trim="password"
        >
        <label for="password">Пароль</label>
        <small
          class="helper-text invalid"
          v-if="$v.password.$dirty && !$v.password.required"
        >не пустое</small>
        <small
          class="helper-text invalid"
          v-else-if="$v.password.$dirty && !$v.password.minLength"
        >Не менее 6 символов(ещё{{password.length}})</small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button
          class="btn waves-effect waves-light auth-submit"
          type="submit"
        >
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>
      
      <p class="center">
        Нет аккаунта?
        <router-link href="/" to="/register">Зарегистрироваться</router-link>
      </p>
    </div>
  </form>
</template>

<script>
  import { email, minLength, required } from 'vuelidate/lib/validators'
  import messages from '../utils/messages'

  export default {
    name: `login`,
    data: () => ({
      email: ``,
      password: ``,
    }),
    validations: {
      email: { email, required },
      password: { required, minLength: minLength(6) }
    },
    mounted () {
      if (messages[this.$route.query.message]) {
        this.$message(messages[this.$route.query.message])
      }

    },
    methods: {
      submitHandler () {
        if (this.$v.$invalid) {
          this.$v.$touch()
          return
        }
        const formData = {
          email: this.email,
          password: this.password
        }
        console.log(formData)
        this.$router.push(`/`)
      }
    }
  }
</script>
