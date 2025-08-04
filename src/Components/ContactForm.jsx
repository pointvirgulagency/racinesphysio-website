"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

export default function ContactSection() {
  const [activeForm, setActiveForm] = useState("general"); // "general" or "recruitment"
  const [formData, setFormData] = useState({
    general: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    recruitment: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      cv: null,
      coverLetter: null,
      message: "",
    },
  });
  const [cvFileName, setCvFileName] = useState("");
  const [coverLetterFileName, setCoverLetterFileName] = useState("");

  // New state for handling submission status
  const [submissionStatus, setSubmissionStatus] = useState({
    state: "idle", // idle, sending, success, error
    message: "",
  });

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleFormChange = formType => {
    setActiveForm(formType);
    // Reset status when switching forms
    setSubmissionStatus({ state: "idle", message: "" });
  };

  const handleInputChange = (e, formType) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [formType]: {
        ...formData[formType],
        [name]: value,
      },
    });
  };

  const handleFileChange = (e, fileType) => {
    const file = e.target.files[0];
    if (!file) return;

    setFormData({
      ...formData,
      recruitment: {
        ...formData.recruitment,
        [fileType]: file,
      },
    });

    if (fileType === "cv") {
      setCvFileName(file.name);
    } else if (fileType === "coverLetter") {
      setCoverLetterFileName(file.name);
    }
  };

  // Updated handleSubmit function to use our own API endpoint
  const handleSubmit = async (e, formType) => {
    e.preventDefault();
    setSubmissionStatus({ state: "sending", message: "Envoi en cours..." });

    // The API endpoint we created
    const apiEndpoint = "/api/send-email";

    const formDataToSend = new FormData();
    const data =
      formType === "general" ? formData.general : formData.recruitment;

    // Append all form fields to the FormData object
    for (const key in data) {
      // Ensure we don't append null file inputs
      if (data[key] !== null) {
        formDataToSend.append(key, data[key]);
      }
    }

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        body: formDataToSend,
        // No 'Content-Type' header needed; the browser sets it for FormData
      });

      if (response.ok) {
        setSubmissionStatus({
          state: "success",
          message: "Message envoyé avec succès! Nous vous répondrons bientôt.",
        });
        // Reset form after successful submission
        if (formType === "general") {
          setFormData({
            ...formData,
            general: { name: "", email: "", subject: "", message: "" },
          });
        } else {
          setFormData({
            ...formData,
            recruitment: {
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              cv: null,
              coverLetter: null,
              message: "",
            },
          });
          setCvFileName("");
          setCoverLetterFileName("");
          // Reset file input fields in the form element
          e.target.reset();
        }
      } else {
        const result = await response.json();
        const errorMessage =
          result.message || "Une erreur est survenue lors de l'envoi.";
        throw new Error(errorMessage);
      }
    } catch (error) {
      setSubmissionStatus({
        state: "error",
        message: `Erreur: ${error.message}`,
      });
    }
  };

  // Helper component for status messages
  const StatusMessage = () => {
    if (submissionStatus.state === "idle") return null;

    const colors = {
      sending: "bg-blue-100 text-blue-800",
      success: "bg-green-100 text-green-800",
      error: "bg-red-100 text-red-800",
    };

    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`p-3 rounded-2xl text-center text-sm mb-4 ${
          colors[submissionStatus.state]
        }`}
      >
        {submissionStatus.message}
      </motion.div>
    );
  };

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden -mb-80">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#1E3A3A"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#1E3A3A] rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#1E3A3A] rounded-full opacity-10 blur-3xl"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Form Type Selector */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ y: -3 }}
              whileTap={{ y: 0 }}
              onClick={() => handleFormChange("general")}
              className={`px-6 py-3 rounded-full text-lg font-medium transition-all ${
                activeForm === "general"
                  ? "bg-[#1E3A3A] text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Formulaire général de contact
            </motion.button>

            <motion.button
              whileHover={{ y: -3 }}
              whileTap={{ y: 0 }}
              onClick={() => handleFormChange("recruitment")}
              className={`px-6 py-3 rounded-full text-lg font-medium transition-all ${
                activeForm === "recruitment"
                  ? "bg-main text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Formulaire de recrutement
            </motion.button>
          </div>
        </motion.div>
        {/* Form Container */}
        <motion.div
          className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-5">
            {/* Form Info Sidebar */}
            <div className="bg-main text-white p-8 md:col-span-2">
              <h3 className="text-2xl font-bold mb-5 xl1440:mt-20 mt-8">
                Comment pouvons-nous vous aider?
              </h3>
              <p className="mb-10 text-gray-300">
                {activeForm === "general"
                  ? "Utilisez ce formulaire pour nous poser une question, demander des informations, ou prendre rendez-vous."
                  : "Vous souhaitez rejoindre notre équipe? Envoyez-nous votre candidature via ce formulaire."}
              </p>

              <div className="mt-10">
                <h4 className="font-medium mb-2 text-second">
                  Horaires d'ouverture
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex justify-between">
                    <span>Lundi :</span>
                    <span>Fermé</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Mardi :</span>
                    <span>Fermé</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Mercredi :</span>
                    <span>9h00 - 20h00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Jeudi :</span>
                    <span>9h00 - 20h00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Vendredi :</span>
                    <span>9h00 - 20h00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Samedi :</span>
                    <span>9h00 - 20h00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Dimanche :</span>
                    <span>9h00 - 20h00</span>
                  </li>
                </ul>
              </div>

              <div className="mt-10">
                <h4 className="font-medium mb-2 text-second">
                  Réseaux sociaux
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/cabinetracines20"
                    className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#003c2a] transition-colors"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/cabinet.racines/"
                    className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#1E3A3A] transition-colors"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Form Content */}
            <div className="p-8 md:col-span-3">
              <AnimatePresence mode="wait">
                {activeForm === "general" ? (
                  <motion.form
                    key="generalForm"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={e => handleSubmit(e, "general")}
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-bold text-main mb-6">
                      Formulaire général de contact
                    </h3>

                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Nom complet <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.general.name}
                        onChange={e => handleInputChange(e, "general")}
                        required
                        className="w-full px-4 py-3 rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#58B195] transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.general.email}
                        onChange={e => handleInputChange(e, "general")}
                        required
                        className="w-full px-4 py-3 rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#58B195] transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Objet <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.general.subject}
                        onChange={e => handleInputChange(e, "general")}
                        required
                        className="w-full px-4 py-3 rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#58B195] transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.general.message}
                        onChange={e => handleInputChange(e, "general")}
                        required
                        className="w-full px-4 py-3 rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#58B195] transition-all"
                      ></textarea>
                    </div>

                    <div>
                      <StatusMessage />
                      <motion.button
                        whileHover={{ y: -2 }}
                        whileTap={{ y: 0 }}
                        type="submit"
                        disabled={submissionStatus.state === "sending"}
                        className="w-full py-3 px-6 bg-[#1E3A3A] text-white rounded-3xl font-medium transition-all hover:bg-[#004d36] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#003c2a] disabled:bg-gray-400 disabled:cursor-not-allowed"
                      >
                        {submissionStatus.state === "sending"
                          ? "Envoi en cours..."
                          : "Envoyer le message"}
                      </motion.button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.form
                    key="recruitmentForm"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={e => handleSubmit(e, "recruitment")}
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-bold text-main mb-6">
                      Formulaire de recrutement
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Prénom <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.recruitment.firstName}
                          onChange={e => handleInputChange(e, "recruitment")}
                          required
                          className="w-full px-4 py-3 rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#58B195] transition-all"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Nom <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.recruitment.lastName}
                          onChange={e => handleInputChange(e, "recruitment")}
                          required
                          className="w-full px-4 py-3 rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#58B195] transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="recruitEmail"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="recruitEmail"
                          name="email"
                          value={formData.recruitment.email}
                          onChange={e => handleInputChange(e, "recruitment")}
                          required
                          className="w-full px-4 py-3 rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#58B195] transition-all"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Téléphone <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.recruitment.phone}
                          onChange={e => handleInputChange(e, "recruitment")}
                          required
                          className="w-full px-4 py-3 rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#58B195] transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        CV <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="file"
                          id="cv"
                          name="cv"
                          accept=".pdf,.doc,.docx"
                          className="hidden"
                          onChange={e => handleFileChange(e, "cv")}
                          required
                        />
                        <label
                          htmlFor="cv"
                          className="flex items-center justify-between w-full px-4 py-3 rounded-3xl border border-gray-300 cursor-pointer hover:bg-gray-50 transition-colors text-gray-700"
                        >
                          <span className="truncate">
                            {cvFileName ||
                              "Choisir un fichier (PDF, DOC, DOCX)"}
                          </span>
                          <svg
                            className="h-5 w-5 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                            />
                          </svg>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Lettre de motivation
                      </label>
                      <div className="relative">
                        <input
                          type="file"
                          id="coverLetter"
                          name="coverLetter"
                          accept=".pdf,.doc,.docx"
                          className="hidden"
                          onChange={e => handleFileChange(e, "coverLetter")}
                        />
                        <label
                          htmlFor="coverLetter"
                          className="flex items-center justify-between w-full px-4 py-3 rounded-3xl border border-gray-300 cursor-pointer hover:bg-gray-50 transition-colors text-gray-700"
                        >
                          <span className="truncate">
                            {coverLetterFileName ||
                              "Choisir un fichier (PDF, DOC, DOCX)"}
                          </span>
                          <svg
                            className="h-5 w-5 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                            />
                          </svg>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="recruitMessage"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Message personnalisé
                      </label>
                      <textarea
                        id="recruitMessage"
                        name="message"
                        rows="4"
                        value={formData.recruitment.message}
                        onChange={e => handleInputChange(e, "recruitment")}
                        className="w-full px-4 py-3 rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#58B195] transition-all"
                        placeholder="Décrivez brièvement votre parcours et vos motivations..."
                      ></textarea>
                    </div>

                    <div>
                      <StatusMessage />
                      <motion.button
                        whileHover={{ y: -2 }}
                        whileTap={{ y: 0 }}
                        type="submit"
                        disabled={submissionStatus.state === "sending"}
                        className="w-full py-3 px-6 bg-main text-white rounded-3xl font-medium transition-all hover:bg-[#004d36] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#003c2a] disabled:bg-gray-400 disabled:cursor-not-allowed"
                      >
                        {submissionStatus.state === "sending"
                          ? "Envoi en cours..."
                          : "Envoyer ma candidature"}
                      </motion.button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
