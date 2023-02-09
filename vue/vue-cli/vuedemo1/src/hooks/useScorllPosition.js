import { ref } from "vue";
export default function useScrollPosition() {
  const x = ref(0);
  const y = ref(0);
  document.addEventListener("scroll", () => {
    x.value = window.scrollX.toFixed(2);
    y.value = window.scrollY.toFixed(2);
  });

  return { x, y };
}
