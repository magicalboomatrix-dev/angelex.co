export const metadata = {
  title: "AngelX → USDT-to-INR Exchange Platform",
  description:
             "Log in to AngelX for seamless USDT-to-INR conversions at the best market rates. Enjoy fast processing, secure payouts, and dependable support. Sell your crypto instantly with a platform built for speed, safety, and convenience.",
  keywords: [
    "angelx usdt price",
    "angelx usdt",
    "angelx crypto",
    "angelx usdt sell",
    "angelx login",
    "angelx pro",
    "angelx pro apk",
    "angelx exchange",
  ],
  alternates: {
    canonical: "https://angelex.co/exchange",
  },
  robots: {
    index: true,
    follow: true,
    content: "index, follow",
    maxSnippet: -1,
    maxImagePreview: "large",
    maxVideoPreview: -1,
  },
  googleBot: {
    index: true,
    follow: true,
    content: "index, follow",
    maxSnippet: -1,
    maxImagePreview: "large",
    maxVideoPreview: -1,
  },
  bingbot: {
    index: true,
    follow: true,
    content: "index, follow",
    maxSnippet: -1,
    maxImagePreview: "large",
    maxVideoPreview: -1,
  },

  authors: [{ name: "AngelX" }],
  publisher: "AngelX",
  openGraph: {
    type: "website",
    title: "AngelX → USDT-to-INR Exchange Platform",
    description:
      "Log in to AngelX for seamless USDT-to-INR conversions at the best market rates. Enjoy fast processing, secure payouts, and dependable support. Sell your crypto instantly with a platform built for speed, safety, and convenience.",
    url: "https://angelex.co/exchange",
    siteName: "AngelX",
    locale: "en_IN",
    images: [
      {
        url: "https://angelex.co/images/logo-icon.png",
        width: 1200,
        height: 630,
        alt: "AngelX USDT Exchange Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AngelX → USDT-to-INR Exchange Platform",
    description:
      "Log in to AngelX for seamless USDT-to-INR conversions at the best market rates. Enjoy fast processing, secure payouts, and dependable support. Sell your crypto instantly with a platform built for speed, safety, and convenience.",
    site: "@AngelX",
    images: ["https://angelex.co/images/logo-icon.png"],
  },
};

export default function ExchangeLayout({ children }) {
  return (
    <>
     
      {children}
    </>
  );
}
