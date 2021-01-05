<script>
  import FormInput from '../atoms/FormInput.svelte'
  import FormButton from '../atoms/FormButton.svelte'

  function encode(data: FormData) {
    return [].slice
      .call(data.entries())
      .map(
        (entry: string[]) =>
          encodeURIComponent(entry[0]) + '=' + encodeURIComponent(entry[1])
      )
      .join('&')
  }

  function handleSubmit() {
    const formData = new FormData(this)
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: {
        ...encode(formData),
      },
    })
      .then(console.log)
      .catch(console.log)
  }
</script>

<style lang="scss">
  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: min-content;
    grid-gap: var(--step-0);
    align-content: stretch;

    :global {
      > :first-child {
        grid-column: 1 / span 1;
        grid-row: 1;
      }

      > :nth-child(2) {
        grid-column: 1 / span 1;
        grid-row: 2;
        align-self: end;
      }

      > :nth-child(3) {
        grid-column: 2 / span 1;
        grid-row: 1 / span 2;
      }

      > :nth-child(4) {
        grid-column: 1 / span 2;
        grid-row: 3 / span 1;
      }

      > :last-child {
        grid-column: 1 / span 2;
        grid-row: 4 / span 1;
      }
    }
  }
</style>

<form name="contact" method="POST" on:submit|preventDefault={handleSubmit}>
  <FormInput name="name" label="Naam" type="text" />
  <FormInput name="email" label="E-mail" type="email" />
  <FormInput name="message" label="Bericht" type="textarea" />
  <input type="hidden" name="form-name" value="contact" />
  <FormButton>Verzenden</FormButton>
</form>
