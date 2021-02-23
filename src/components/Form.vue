<template>
  <form class="form" @submit="handleSubmit($event)">
    <h1 class="form__title">Форма подачи заявки в отдел сервиса и качества</h1>
    <div class="form__container">
      <FilialFieldset  @validate="validateFilial" :setFilial="setFilial" />
      <ThemeFieldset @validate="validateTheme" :setTheme="setTheme" />
      <DescriptionFieldset @validate="validateDescription" :setDescription="setDescription" />
      <FileFieldset :setFile="setFile" />
      <button class="form__submit-button" :disabled="!isFormValid">Отправить</button>
    </div>
  </form>
</template>

<script>
import FilialFieldset from './FilialFieldset';
import ThemeFieldset from './ThemeFieldset';
import DescriptionFieldset from './DescriptionFieldset';
import FileFieldset from './FileFieldset';

export default {
  name: 'Form',
  components: {
    FilialFieldset, ThemeFieldset, DescriptionFieldset, FileFieldset,
  },
  data() {
    return {
      isFilialValid: false,
      isThemeValid: false,
      isDescriptionValid: false,
      filial: '',
      theme: '',
      description: '',
      file: null,
    }
  },
  computed: {
    isFormValid() {
      return (this.isFilialValid && this.isThemeValid && this.isDescriptionValid);
    },
  },
  methods: {
    validateFilial(isValid) {
      this.isFilialValid = isValid ? true : false;
    },
    validateTheme(isValid) {
      this.isThemeValid = isValid ? true : false;
    },
    validateDescription(isValid) {
      this.isDescriptionValid = isValid ? true : false;
    },
    setFilial(filial) {
      this.filial = filial;
    },
    setTheme(theme) {
      this.theme = theme;
    },
    setDescription(description) {
      this.description = description;
    },
    setFile(file) {
      this.file = file;
    },
    async handleSubmit(evt) {
      evt.preventDefault();

      const { filial, theme, description, file } = this;

      await this.$store.dispatch('sendData', { filial, theme, description, file });

      if (this.$store.state.isPostSuccess) {
        this.$router.push('/success');
      } else {
        alert('Ошибка отправки заявки');
      }
    }
  }
}
</script>

<style>
.form {
  width: 90%;
}

.form__title {
  align-self: flex-start;
  margin: 0 0 20px;
}

.form__container {
  border: 1px solid #ebebeb;
  padding: 40px;
  box-sizing: border-box;
}

.form__input-container {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.form__input-container:only-of-type {
  margin-bottom: 0;
}

.form__input {
  max-width: 30%;
  padding: 6px 10px;
  box-sizing: border-box;
  border: 1px solid #ebebeb;
}

.form__input::placeholder {
  color: #a0a0a0;
}

.form__checkbox {
  width: 32px;
  height: 32px;
  margin-right: 15px;
  cursor: pointer;
}

.form__submit-button {
  text-transform: uppercase;
  width: 136px;
  height: 36px;
  background: #da9169;
  border: 1px solid #cf7240;
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  padding: 0;
  box-sizing: border-box;
  cursor: pointer;
}

.form__submit-button:disabled {
  background: #e1e1e1;
  border: none;
  cursor: default;
}
</style>
