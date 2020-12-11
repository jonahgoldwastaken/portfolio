<script>
  import { fly } from 'svelte/transition'
  import FooterSection from '../molecules/FooterSection.svelte'
  import ContactForm from '../molecules/ContactForm.svelte'
  import FooterLink from '../atoms/FooterLink.svelte'
  import Copyright from '../atoms/Copyright.svelte'
</script>

<style>
  footer {
    position: sticky;
    top: 100vh;
    background: var(--secondary);
    padding: var(--step-2) 0;

    > div {
      display: grid;

      @media screen and (min-width: 60rem) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media screen and (min-width: 80rem) {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }
</style>

<footer in:fly={{ duration: 200, y: 20 }} out:fly={{ duration: 200, y: -20 }}>
  <div>
    <FooterSection heading="Projecten">
      <FooterLink href="/project/bbwal">De Blauwburgwal</FooterLink>
      <FooterLink href="/project/datastory">Interactieve data story</FooterLink>
      <FooterLink href="/project/tedx">TEDx Alkmaar</FooterLink>
      <FooterLink href="/project/xsi">Extreme Space Invaders</FooterLink>
    </FooterSection>
    <FooterSection heading="My corners of the internet">
      <FooterLink href="https://github.com/theonejonahgold">GitHub</FooterLink>
    </FooterSection>
    <FooterSection heading="Contact">
      <ContactForm />
    </FooterSection>
  </div>
  <Copyright />
</footer>
