// https://vitepress.dev/guide/custom-theme
import mediumZoom from "medium-zoom";
import { EnhanceAppContext, inBrowser, Theme, useRoute } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { h, nextTick, onMounted, watch } from "vue";
import { BProgress } from "./bprogress";
import "./bprogress.css";
import "./style.css";

export default {
  extends: DefaultTheme,
  setup() {
    const route = useRoute();
    const initZoom = () => {
      // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // default
      // Enable for all images without explicitly adding {data-zoomable}
      mediumZoom(".main img", { background: "var(--vp-c-bg)" });
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom()),
    );
  },
  Layout() {
    return h(DefaultTheme.Layout, null, {});
  },
  enhanceApp({ app, router, siteData }: EnhanceAppContext) {
    // Progress bar
    if (inBrowser) {
      BProgress.configure({ showSpinner: false });
      router.onBeforeRouteChange = () => {
        BProgress.start(); // Start progress bar
      };
      router.onAfterRouteChange = () => {
        BProgress.done(); // Stop progress bar
      };
    }
  },
} satisfies Theme;
