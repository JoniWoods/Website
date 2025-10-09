
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StructuredData } from "../components/structured-data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://joniwoods.com'),
  title: {
    default: "Joni Woods - Burned, Blocked, and Better Than Ever",
    template: "%s | Joni Woods"
  },
  description: "A raw, faith-rooted memoir of divorce, self-discovery, and the healing that begins when you stop pretending you're fine.",
  keywords: "Joni Woods, healing, divorce recovery, self-discovery, relationship coach, emotional intelligence, life coach, author, transformation, self-awareness, personal development, corporate culture strategy, speaking, workshops",
  authors: [{ name: "Joni Woods", url: "https://joniwoods.com" }],
  creator: "Joni Woods",
  publisher: "Joni Woods",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: 'width=device-width, initial-scale=1',
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  openGraph: {
    title: "Joni Woods - Burned, Blocked, and Better Than Ever",
    description: "Transform your pain into power. Break generational patterns. Create the future you deserve.",
    url: "https://joniwoods.com",
    siteName: "Joni Woods",
    images: [
      {
        url: "/images/Joni_Woods_Author_Portrait_Optimized.jpg",
        width: 1200,
        height: 630,
        alt: "Joni Woods - Certified Life Coach and Author",
      },
      {
        url: "/images/Woods_FrontCover_3D.png", 
        width: 800,
        height: 1200,
        alt: "Burned, Blocked, and Better Than Ever book cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joni Woods - Burned, Blocked, and Better Than Ever",
    description: "Transform your pain into power. Break generational patterns. Create the future you deserve.",
    images: ["/images/Joni_Woods_Author_Portrait_Optimized.jpg"],
    creator: "@joniwoods730",
    site: "@joniwoods730",
  },
  alternates: {
    canonical: "https://joniwoods.com",
  },
  category: 'Personal Development',
  classification: 'Life Coaching, Personal Development, Self-Help',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Additional SEO Meta Tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#8B0000" />
        <meta name="application-name" content="Joni Woods" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Joni Woods" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-15GL881LLP"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-15GL881LLP', {
                page_title: 'Joni Woods - Life Coach & Author',
                page_location: 'https://joniwoods.com'
              });
            `,
          }}
        />
        <StructuredData />
        <style>
          {`
            /* Ensure all sections with non-white backgrounds are full width */
            section {
              width: 100%;
              margin-left: auto;
              margin-right: auto;
            }
            section:not([style*='background-color: #ffffff']) {
              width: 100%;
            }
          `}
        </style>
      </head>
      <body className={inter.className}>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Disable browser scroll restoration
              if ('scrollRestoration' in history) {
                history.scrollRestoration = 'manual';
              }
              
              // Force scroll to top immediately
              window.scrollTo(0, 0);
              
              // Ensure scroll to top after page fully loads
              window.addEventListener('load', function() {
                setTimeout(function() {
                  window.scrollTo(0, 0);
                }, 0);
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
