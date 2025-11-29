import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Icons() {
  const icons = [
    { icon: <FaGithub />, link: "https://github.com" },
    { icon: <FaLinkedin />, link: "https://linkedin.com" },
    { icon: <FaEnvelope />, link: "mailto:abdul13un@gmail.com" },
    { icon: <FaInstagram />, link: "https://instagram.com" },
    { icon: <FaTwitter />, link: "https://twitter.com" },
  ];

  return (
    <div className="flex flex-row items-center justify-center gap-8 pt-6">
      {icons.map((item, i) => (
        <a
          key={i}
          href={item.link}
          aria-label={`Lien vers ${item.link}`}

          className="
            text-xl md:text-2xl lg:text-4xl xl:text-5xl text-[#27818f]
            opacity-0
            animate-fade-in
            transition-transform duration-300
            hover:scale-125 hover:rotate-6
          "
          style={{ animationDelay: `${i * 150}ms` }}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}
