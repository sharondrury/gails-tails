const Footer = () => {
  return (
    <div className="bg-[#D9D9D9] text-center p-6 text-gray-700">
      <p className="mb-2">
        &copy; {new Date().getFullYear()} Gail's Tails. All rights reserved.
      </p>
      <p>
        Designed and developed by{" "}
        <a
          href="https://sharondrury.github.io/waffle-n-toast"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Sharon Drury
        </a>
      </p>
    </div>
  );
}

export default Footer;