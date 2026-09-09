import Link from "next/link";
import Footer from "./footer";

export default function PageShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[var(--color-primary-900)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pt-8">
        <Link
          href="/"
          className="inline-flex items-center text-[var(--color-primary-400)] text-sm hover:text-[var(--color-primary-200)] transition-colors duration-200"
        >
          ← Voltar ao início
        </Link>
      </div>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
