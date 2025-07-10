export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between p-4">
        <a href="#homepage">
          <img
            src="/src/assets/logoOther.svg"
            alt="Logo"
            className="w-10 h-10"
          />
        </a>
        <nav>
          <ul className="flex gap-3 justify-end">
            <li>
              <a
                href="#homepage"
                className="hover:text-blue-600 transition-colors"
              >
                Homepage
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-blue-600 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="hover:text-blue-600 transition-colors"
              >
                Price list
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
