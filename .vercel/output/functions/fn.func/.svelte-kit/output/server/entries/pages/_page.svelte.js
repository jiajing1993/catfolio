import { c as create_ssr_component, d as each, e as escape } from "../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="container mx-auto flex items-center justify-center min-h-screen border border-dotted border-zinc-800"><div class="text-center"><h1 class="text-4xl font-bold mb-3" data-svelte-h="svelte-1dj58q3">Welcome to Catfolio</h1> <div class="grid grid-cols-3 md:grid-cols-5 gap-4 mb-4 max-w-3xl">${each(data.cats, ({ _id }) => {
    return `<div><img src="${"https://cataas.com/cat/" + escape(_id, true) + "?width=500"}" alt="" class="rounded h-full object-cover"> </div>`;
  })}</div> <p data-svelte-h="svelte-1ar9fv4">Visit <a class="text-amber-500" href="/about">About Page</a> to read the documentation</p></div></div>`;
});
export {
  Page as default
};
