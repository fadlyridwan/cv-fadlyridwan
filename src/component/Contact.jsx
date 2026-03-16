import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsappSquare,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="w-full bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Contact Me</h2>
          <p className="text-gray-400 mt-3">
            Feel free to reach out if you want to collaborate or just say hello
            👋
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Let's Connect</h3>
            <p className="text-gray-400">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-2xl text-blue-400" />
                <span>muhamadfadlyridwan@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <FaGithub className="text-2xl text-gray-300" />
                <span>github.com/fadlyridwan</span>
              </div>

              <div className="flex items-center gap-4">
                <FaWhatsapp className="text-2xl text-blue-500" />
                <span>0813-6385-7272 / 0857-1052-5225</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
