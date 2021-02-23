<template>
  <Fieldset legend="Ваш филиал" required>
    <select
      name="city"
      class="form__select"
      required
      v-model="selected"
      @change="$emit('validate', isValid), setFilial(currentFilial)"
      :disabled="checked"
    >
      <option class="form__option" value="" selected disabled>Выберите город</option>
      <option
        class="form__option"
        v-for="filial in filials"
        :key="filial.id"
        :value="filial.title"
      >
        {{filial.title}}
      </option>
    </select>
    <div class="form__input-container">
      <input
        class="form__checkbox"
        type="checkbox"
        name="online"
        v-model.trim="checked"
        @change="$emit('validate', isValid), setFilial(currentFilial)"
      >
      <label class="form__label">Онлайн</label>
    </div>
  </Fieldset>
</template>

<script>
import Fieldset from './Fieldset';

export default {
  name: 'FilialFieldset',
  components: {
    Fieldset,
  },
  props: ['setFilial'],
  data() {
    return {
      selected: '',
      checked: false,
    }
  },
  computed: {
    filials() {
      return this.$store.state.filials;
    },
    isValid() {
      return (this.selected || this.checked) ? true : false;
    },
    currentFilial() {
      return this.checked ? 'online' : this.selected;
    }
  },
  mounted() {
    this.$store.dispatch('getFilials');
  }
}
</script>

<style>
.form__select {
  margin-bottom: 20px;
  padding: 3px 8px;
  max-width: 30%;
  box-sizing: border-box;
  border: 1px solid #ebebeb;
  cursor: pointer;
}

.form__select:invalid {
  color: #a0a0a0;
}

.form__select:disabled {
  background: #f4f4f4;
}
</style>
