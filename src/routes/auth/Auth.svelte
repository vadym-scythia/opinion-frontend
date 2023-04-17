<script>
    const apiAuth = "https://opinion.dev.ngrok.io/api/auth";
  
    const authorize = async () => {
      const response = await fetch(apiAuth, {
        method: "GET",
        headers: {},
      });
      let redirectLink = await response.text();
      console.log(redirectLink);
      location.replace(redirectLink);
    };
  </script>
  
  <button on:click={authorize}> authorize </button>