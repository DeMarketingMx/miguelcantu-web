import Link from "next/link";

const links = [
  { href: "/sobre-mi", label: "Sobre mi" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-6 px-6 py-12 md:flex-row md:justify-between">
        <Link
          href="/"
          className="font-heading text-lg font-bold text-white no-underline"
        >
          Miguel Cantu
        </Link>

        <div className="flex gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-white/70 no-underline transition-opacity hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <p className="text-sm text-white/50">
          &copy; {new Date().getFullYear()} Miguel Cantu
        </p>
      </div>
    </footer>
  );
}
