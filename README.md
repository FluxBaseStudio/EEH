# EEH Automated Quote Page

## Pliki

1. `app/quote/page.tsx`
   - osobna podstrona formularza `/quote`
   - multi-step formularz z paskiem postępu
   - live estimate
   - komunikat, że wycena czeka również na mailu

2. `app/quote/quote.css`
   - pełne style formularza i podstrony

3. `app/api/quote/route.ts`
   - endpoint wysyłający 3 maile:
     - mail do właściciela
     - podziękowanie do klienta
     - mail z wyceną do klienta

4. `navbar-button-example.txt`
   - kod przycisku do górnego paska nawigacji

5. `.env.example`
   - zmienne środowiskowe SMTP

## Instalacja

```bash
npm install nodemailer
npm install -D @types/nodemailer
```

## Struktura w projekcie

```txt
app/
  quote/
    page.tsx
    quote.css
  api/
    quote/
      route.ts
```

## Przycisk w menu

W głównym Navbarze dodaj:

```tsx
<Link href="/quote" className="navQuoteButton">
  Free Quote
</Link>
```

albo:

```tsx
<Link href="/quote" className="navQuoteButton">
  Darmowa wycena
</Link>
```
