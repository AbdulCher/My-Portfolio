import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";


export default function Icons() {
    const icons = [
    { icon: <FaGithub />, link: "https://github.com" },
    { icon: <FaLinkedin />, link: "https://linkedin.com" },
    { icon: <FaEnvelope />, link: "mailto:contact@tonmail.com" },
    { icon: <FaInstagram />, link: "https://instagram.com" },
    { icon: <FaTwitter />, link: "https://twitter.com" },
  ];
  return(
    
      <div className="flex flex-row items-center justify-center gap-8 pt-6">
        {icons.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            aria-label={`Lien vers ${item.link}`}
            className="text-xl md:text-2xl xl:text-5xl lg:text-4xl text-[#27818f]"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{
              scale: 1.3,
              rotate: 10,
              transition: { duration: 0.25 },
            }}
          >
            {item.icon}
          </motion.a>
        ))}
      </div>

  )
    
}