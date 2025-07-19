<template>
  <article class="Box">
    <button class="Box__button">
      <h3 class="Box__title">
        {{ props.group }}
      </h3>
    </button>
  </article>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  group: {
    type: String,
    required: true
  }
})
</script>
<style scoped>
.Box {
  background-color: var(--color-box-background);
  border: 1px solid var(--color-box-border);
  border-radius: 8px;

  text-align: center;
}

.Box__button {
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  height: 50px;
  margin: 5px;
  width: fit-content;
  background: light-dark(var(--color-box-background), var(--color-box-background-dark));
  border: solid var(--color-box-border);
  font-size: 16px;
  color: light-dark(var(--color-title), var(--color-title-dark));

  -webkit-transition: 500ms;
  transition: 500ms;
  border-radius: 5px;
  background: linear-gradient(145deg, #2e2d2d, #212121);
  box-shadow:
    -1px -5px 15px #41465b,
    5px 5px 15px #41465b,
    inset 5px 5px 10px #212121,
    inset -5px -5px 10px #212121;

  &:hover {
    -webkit-box-shadow:
      1px 1px 13px #20232e,
      -1px -1px 13px #545b78;
    box-shadow:
      1px 1px 13px #20232e,
      -1px -1px 13px #545b78;
    color: #d6d6d6;
    -webkit-transition: 500ms;
    transition: 500ms;
  }

  &:active {
    -webkit-box-shadow:
      inset 1px 1px 13px #20232e,
      inset -1px -1px 13px #545b78;
    box-shadow:
      inset 1px 1px 13px #20232e,
      inset -1px -1px 13px #545b78;
    color: #d6d6d6;
    -webkit-transition: 500ms;
    transition: 500ms;
  }
}
</style>
