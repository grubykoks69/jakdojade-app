export const metadata = {
  title: "Jakdojade Pro",
  description: "Najlepsza apka transportowa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
