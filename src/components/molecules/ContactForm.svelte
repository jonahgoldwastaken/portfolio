<script>
  import FormInput from '../atoms/FormInput.svelte'
  import FormButton from '../atoms/FormButton.svelte'
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

<form
  name="contact"
  method="POST"
  data-netlify="true"
  data-netlify-recaptcha="true"
>
  <FormInput name="name" label="Naam" type="text" />
  <FormInput name="email" label="E-mail" type="email" />
  <FormInput name="message" label="Bericht" type="textarea" />
  <div data-netlify-recaptcha="true" />
  <FormButton>Verzenden</FormButton>
</form>
