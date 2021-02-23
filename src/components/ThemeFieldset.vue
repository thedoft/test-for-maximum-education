<template>
  <Fieldset legend="Тема обращения" required>
    <div class="form__input-container">
      <input
        class="form__checkbox"
        type="radio"
        name="theme"
        value="quality"
        ref="radio"
        required
        v-model="picked"
        @change="$emit('validate', isValid), cleanInput(), setTheme(theme)"
      >
      <label class="form__label">Недоволен качеством услуг</label>
    </div>
    <div class="form__input-container">
      <input
        class="form__checkbox"
        type="radio"
        name="theme"
        value="contract"
        v-model="picked" @change="$emit('validate', isValid), cleanInput(), setTheme(theme)"
      >
      <label class="form__label">Расторжение договора</label>
    </div>
    <div class="form__input-container">
      <input
        class="form__checkbox"
        type="radio"
        name="theme"
        value="email"
        v-model="picked" @change="$emit('validate', isValid), cleanInput(), setTheme(theme)"
      >
      <label class="form__label">Не приходит письмо активации на почту</label>
    </div>
    <div class="form__input-container">
      <input
        class="form__checkbox"
        type="radio"
        name="theme"
        value="profile"
        v-model="picked" @change="$emit('validate', isValid), cleanInput(), setTheme(theme)"
      >
      <label class="form__label">Не работает личный кабинет</label>
    </div>

    <input
      class="form__input"
      type="text"
      placeholder="Другое"
      ref="input"
      required
      v-model="text"
      @input="$emit('validate', isValid), unpickedRadios(), setTheme(theme)"
    >
  </Fieldset>
</template>

<script>
import Fieldset from './Fieldset';

export default {
  name: 'ThemeFieldset',
  components: {
    Fieldset,
  },
  props: ['setTheme'],
  data() {
    return {
      picked: false,
      text: '',
    }
  },
  computed: {
    isValid() {
      return (this.picked || this.text) ? true : false;
    },
    theme() {
      return this.picked ? this.picked : this.text;
    },
  },
  methods: {
    cleanInput() {
      this.text = '';
      this.$refs.input.required = false;
    },
    unpickedRadios() {
      this.picked = false;
      this.$refs.radio.required = false;
    }
  },
}
</script>

<style>

</style>
