<template>
  <div class="success">
    <h1 class="success__title">Заявка отправлена.</h1>
    <img src="../assets/success_img.png" alt="Успешно" class="success__image" />
    <RouterLink to="/" exact class="success__back-link">Назад</RouterLink>
  </div>
</template>

<script>
export default {
  name: 'Success',
}
</script>

<style>
.success {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.success__title {
  margin: 0 0 20px;
}

.success__image {
  margin: 0 0 20px;
}

.success__back-link {
  color: #000;
}
</style>
