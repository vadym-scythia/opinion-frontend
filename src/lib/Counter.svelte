<script>
  const authorize = async () => {
    const response = await fetch(
            'https://689f-193-53-89-42.eu.ngrok.io/IgAuthorization',
            {
                method: 'GET',
                headers: {},
            }
        );
      let data = await response.json();
      console.log(response);
  }
</script>

<button on:click={authorize}>
  authorize
</button>
