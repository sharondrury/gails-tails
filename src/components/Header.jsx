import config from "./config.json";

const { links } = config;

export default function Header() {
  return (
    <>
      <header className="p-4">
        <nav id="#header">
          <ul className="flex gap-6">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-black hover:text-blue-600 transition-colors"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
