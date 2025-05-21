import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const links = [
  {
    href: "https://facebook.com",
    icon: <FaFacebook />,
  },
  {
    href: "https://twitter.com",
    icon: <FaTwitter />,
  },
  {
    href: "https://instagram.com",
    icon: <FaInstagram />,
  },
  {
    href: "https://github.com",
    icon: <FaGithub />,
  },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-s-charcoal py-4 text-s-white-50">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm md:text-left">
          Company 2025. All rights reserved
        </p>

        <div className="flex justify-center gap-4 md:justify-start">
          {links.map((link) => (
            <a
              key={link}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-s-white-50 transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
