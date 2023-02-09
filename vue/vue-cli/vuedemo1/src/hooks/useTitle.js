import { ref, watch } from "vue";

export const setTitle = (titleValue) => {
  const title = ref(titleValue);

  watch(
    title,
    (curr) => {
      document.title = curr;
    },
    {
      immediate: true,
    }
  );

  return title;
};
