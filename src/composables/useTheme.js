import { ref } from "vue";

const isDark = ref(
  typeof document !== "undefined" &&
    document.documentElement.classList.contains("dark"),
);

export function useTheme() {
  function toggleTheme() {
    isDark.value = !isDark.value;
    document.documentElement.classList.toggle("dark", isDark.value);
    try {
      localStorage.setItem("theme", isDark.value ? "dark" : "light");
    } catch (e) {}
  }
  return { isDark, toggleTheme };
}
