import { c as create_ssr_component } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="container mx-auto flex items-center justify-center h-screen border border-dotted border-zinc-800" data-svelte-h="svelte-6yiaet"><div class="text-center"><h1 class="text-4xl font-bold mb-3">Catfolio is a folio of all kinds of cats</h1> <p>Visit <a class="text-pink-500" href="/">Home</a> to view all cuties</p></div></div>`;
});
export {
  Page as default
};
