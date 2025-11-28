import { motion } from "framer-motion";
import { useState } from "react";

import Icons from "../components/Icons";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [triggerText, setTriggerText] = useState(false);
  

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  }

  return (
    <section
      id="contact"
      className="
        relative snap-start 
        bg-[#001524] text-[#ece5dd] 
        flex flex-col items-center 
        justify-center px-8 lg:px-20 py-36"
    >
      <h2 className="text-[#ece5dd] mb-8 text-xl 
            md:text-2xl xl:text-3xl lg:text-4xl 
            font-semibold">Contact</h2>

     <p>Une question ou une idée? Utilisez ce formulaire ou les réseaux sociaux👇.</p>
        
        
      <div className="w-full max-w-3xl flex flex-col items-center gap-16">
        <motion.div
          
          className="bg-[#001524] border border-[#001524] p-8 rounded-xl shadow-lg w-full"
        >
          {!sent ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Votre nom"
                className="shadow-inner p-3 rounded bg-[#001524] border border-[#ece5dd]"
                required
              />

              <input
                type="email"
                placeholder="Votre email"
                className="p-3 rounded text-[#] bg-[#001524] border border-[#ece5dd]"
                required
              />

              <textarea
                placeholder="Votre message..."
                className="p-3 rounded bg-[#001524] border border-[#ece5dd] h-32"
                required
              />

              <button
                type="submit"
                className="bg-[#27818f] hover:bg-[#ff7d00] text-[#ece5dd] font-bold py-3 rounded transition"
              >
                Envoyer
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 2 }}
              className="bg-[#001d3d] text-center text-2xl py-8"
            >
              🎉 Message envoyé avec succès !
            </motion.div>
          )}
        </motion.div>

        <Icons />
        
      </div>
    </section>
  );
}
