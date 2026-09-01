import "./globals.css";

export const metadata = {
  title: "Jayesh Joshi",
  description: "Crafted by Jayesh Joshi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
