<template>
  <Fieldset legend="Описание проблемы" required>
    <textarea
      class="form__textarea"
      name="description"
      rows="10"
      placeholder="Введите текст"
      required
      v-model.trim="message"
      @input="$emit('validate', isValid), setDescription(message)"
    />
  </Fieldset>
</template>

<script>
import Fieldset from './Fieldset';

export default {
  name: 'DescriptionFieldset',
  components: {
    Fieldset,
  },
  props: ['setDescription'],
  data() {
    return {
      message: '',
    }
  },
  computed: {
    isValid() {
      return this.message ? true : false;
    }
  }
}
</script>

<style>
.form__textarea {
  max-width: 100%;
  border: 1px solid #ebebeb;
  box-sizing: border-box;
  padding: 6px 10px;
}

.form__textarea::placeholder {
  color: #a0a0a0;
}
</style>
