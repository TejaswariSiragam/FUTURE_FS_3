import "./globals.css";

export const metadata = {
  title: "YouTube Clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

