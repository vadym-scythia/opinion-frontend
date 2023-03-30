<script>
    import { onMount } from "svelte";

    const apiCallback = "https://opinion.dev.ngrok.io/api/exchange-code?code=";
    let error = null;
    let isLoading = false;

    const exchangeCodeForShortLiveToken = async (code) => {
        isLoading = true;

        try {
            const response = await fetch(apiCallback + code, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error(
                    `API request failed with status ${response.status}`
                );
            }

            // short-live token
            const token = await response.json();
        } catch (err) {
            error = err.message;
        } finally {
            isLoading = false;
        }

        onMount(() => {
            const urlParams = new URLSearchParams(window.location.search);
            const code = urlParams.get("code");
            const error = urlParams.get("error");

            if (code) {
                exchangeCodeForShortLiveToken(code);
            } else if (error) {
                console.error("Instagram authentication error:", error);
            }
        });
    };
</script>

{#if isLoading}
  <p>Loading...</p>
{:else if error}
  <p>Error: {error}</p>
{/if}

<button on:click={exchangeCodeForShortLiveToken}> callback </button>