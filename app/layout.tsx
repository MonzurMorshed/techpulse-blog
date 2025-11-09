import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import ErrorBoundary from "./components/ErrorBoundary";
import Header from "./components/Layout/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TechPulse - Source for Latest Tech Articles",
  description: "Read the latest articles on technology, programming, and software development.",
  keywords: [
    "blog",
    "technology",
    "programming",
    "software development",
    "tech articles",
    "coding",
    "web development",
    "mobile development",
    "AI",
    "machine learning",
    "cloud computing",
    "cybersecurity",
  ],
  authors: [{ name: "TechPulse Team", url: "https://techpulse.example.com" }],
  openGraph: {
    title: "Blog - Source for Latest Tech Articles",
    description: "Read the latest articles on technology, programming, and software development.",
    url: "https://techpulse.example.com",
    siteName: "TechPulse",
    images: [
      {
        url: "https://techpulse.example.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TechPulse Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechPulse - Source for Latest Tech Articles",
    description: "Read the latest articles on technology, programming, and software development.",
    images: ["https://techpulse.example.com/twitter-image.jpg"],
    creator: "@TechPulse",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  /*
  facebook: {
    appId: "123456789012345",
  },
  */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
        <Script
          id="adsense"
          strategy="afterInteractive"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=YOUR_ADSENSE_CLIENT_ID"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gray-50 text-gray-900`}>
        <Header />
        <main className="max-w-5xl mx-auto p-6 h-full">
          {/* <ErrorBoundary> */}
          {children}
          {/* </ErrorBoundary> */}
          <>
            {/* Optional call-to-action / newsletter section */}
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h4 className="text-xl font-semibold mb-2">Subscribe to Our Newsletter</h4>
              <p className="mb-4">Get notified when we publish new articles.</p>
              <form className="flex flex-col sm:flex-row justify-center gap-2">
                <input type="email" placeholder="Your email" className="p-2 border rounded w-full sm:w-auto" />
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Subscribe</button>
              </form>
            </div>
          </>
        </main>
        <footer className="max-w-4xl mx-auto p-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} TechPulse. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
