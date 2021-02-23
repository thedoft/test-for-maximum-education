<template>
  <Fieldset legend="Загрузка документов">
    <p class="form__hint">Приложите, пожалуйста, полноэкранный скриншот. Это поможет быстрее решить проблему.</p>
    <input class="form__file-input" type="file" name="files" @change="handleFileChange($event)">
  </Fieldset>
</template>

<script>
import Fieldset from './Fieldset';

export default {
  name: 'FileFieldset',
  components: {
    Fieldset,
  },
  props: ['setFile'],
  methods: {
    handleFileChange(evt) {
      const file = evt.target.files[0];

      if (file) {
        const reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onloadend = () => {
          this.setFile(reader.result);
        }
      }
    }
  }
}
</script>

<style>
.form__hint {
  color: #a0a0a0;
  max-width: 420px;
  margin: 0 0 15px;
}
</style>
