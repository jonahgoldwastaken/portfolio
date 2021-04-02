<script lang="ts">
  import Copyright from '../atoms/Copyright.svelte'
</script>

<style lang="scss">
  footer {
    position: sticky;
    top: 100vh;
    background: var(--secondary);
    padding: var(--double-space) 0;

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

<footer>
  <!--  <div>-->
  <!--    <FooterSection heading="Projecten">-->
  <!--      <FooterLink href="/project/empower">EMPOWER 2.0</FooterLink>-->
  <!--      <FooterLink href="/project/vercel">Vercel Remake</FooterLink>-->
  <!--      <FooterLink href="/project/bbwal">De Blauwburgwal</FooterLink>-->
  <!--      <FooterLink href="/project/datastory">Interactieve data story</FooterLink>-->
  <!--    </FooterSection>-->
  <!--    <FooterSection heading="My corners of the internet">-->
  <!--      <FooterLink href="https://github.com/theonejonahgold">GitHub</FooterLink>-->
  <!--    </FooterSection>-->
  <!--    &lt;!&ndash; <FooterSection heading="Contact">-->
  <!--      <ContactForm />-->
  <!--    </FooterSection> &ndash;&gt;-->
  <!--  </div>-->
  <Copyright />
</footer>
