<script>
  export let data;

</script>


<div class="container mx-auto flex items-center justify-center min-h-screen border border-dotted border-zinc-800 p-4">

  <div class="text-center">
    <h1 class="text-4xl font-bold mb-3">
      Welcome to Catfolio
    </h1>
    <div class="grid grid-cols-3 md:grid-cols-5 gap-4 mb-4 max-w-3xl">
    {#each data.cats as {_id}}
      <div>
        <img src="https://cataas.com/cat/{_id}?width=500" alt="" class="rounded aspect-square object-cover">
      </div>
    {/each}
  </div>


    <p>Visit <a class="text-amber-500" href="/about">About Page</a> to read the documentation</p>
  </div>
</div>