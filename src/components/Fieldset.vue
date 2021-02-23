<template>
  <fieldset class="fieldset">
    <legend class="fieldset__legend">
      {{ legend }} <span class="fieldset__required-label" v-if="required">*</span>
    </legend>

    <slot />

  </fieldset>
</template>

<script>
export default {
  name: 'Fieldset',
  props: {
    'legend': String,
    'required': Boolean,
  }
}
</script>

<style>
.fieldset {
  border: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0 0 40px;
}

.fieldset__legend {
  padding: 0;
  margin: 0 0 15px;
  font-size: 20px;
  line-height: 24px;
}

.fieldset__required-label {
  color: #f00;
}
</style>
