

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.DmatM7ks.js","_app/immutable/chunks/scheduler.DUa3pFyD.js","_app/immutable/chunks/index.C2NzGguW.js"];
export const stylesheets = [];
export const fonts = [];
