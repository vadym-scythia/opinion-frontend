<script context="module">
  import Auth from "./routes/auth/Auth.svelte";
  import Callback from "./Callback.svelte";
  export let url = "";
</script>

<script lang="ts">
  const callbackComponent = Callback as any;
</script>

<main>
  <div class="card">
    <Auth /><Callback />
  </div>
</main>

<style>
</style>
