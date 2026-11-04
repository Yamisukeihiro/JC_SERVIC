import React, { useState } from 'react';
import { MessageCircle, Clock, Smartphone, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { BrandIconBadge } from './ServiceIcons';
import { useApp } from '../context/AppContext';

export const ContactSection: React.FC = () => {
  const { showToast, isDarkMode } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      showToast('Votre message a été transmis avec succès !');

      const text = encodeURIComponent(
        `Bonjour J-C PREMIUM HOLDING,\nNom : ${formData.name}\nContact : ${formData.contact}\nObjet : ${formData.subject}\nMessage : ${formData.message}`
      );
      window.open(`https://wa.me/22660084067?text=${text}`, '_blank');
    }, 600);
  };

  return (
    <section id="contact" className="py-14 sm:py-20 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span
            className="text-xs font-black uppercase tracking-widest block mb-1"
            style={{ color: '#FF7A30' }}
          >
            Assistance & Support 24/7
          </span>
          <h2
            className="text-2xl sm:text-4xl font-black tracking-tight"
            style={{ color: isDarkMode ? '#F5EBDD' : '#2B2A2A' }}
          >
            Contactez Notre Équipe
          </h2>
          <p
            className="text-sm font-medium mt-2"
            style={{ color: isDarkMode ? '#C4B9AA' : '#696360' }}
          >
            Pour toute question ou commande spécifique, discutez en direct avec nous sur WhatsApp ou envoyez votre message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Colonne Coordonnées */}
          <div
            className="lg:col-span-5 rounded-3xl border p-7 sm:p-8 space-y-6 shadow-md"
            style={{
              backgroundColor: isDarkMode ? '#343333' : '#FFFFFF',
              borderColor: isDarkMode ? 'rgba(245, 235, 221, 0.15)' : 'rgba(43, 42, 42, 0.12)',
            }}
          >
            <h3
              className="text-lg font-black"
              style={{ color: isDarkMode ? '#F5EBDD' : '#2B2A2A' }}
            >
              Coordonnées Directes
            </h3>

            {/* WhatsApp */}
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-md text-white"
                style={{ backgroundColor: '#25D366' }}
              >
                <MessageCircle className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <strong
                  className="text-sm font-black block"
                  style={{ color: isDarkMode ? '#F5EBDD' : '#2B2A2A' }}
                >
                  WhatsApp Officiel
                </strong>
                <p
                  className="text-xs font-mono font-bold"
                  style={{ color: isDarkMode ? '#C4B9AA' : '#696360' }}
                >
                  +226 60 08 40 67
                </p>
                <a
                  href="https://wa.me/22660084067?text=Bonjour%20J-C%20PREMIUM%20HOLDING%2C%20j%27ai%20une%20question."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-black hover:underline pt-1"
                  style={{ color: '#FF7A30' }}
                >
                  Démarrer la discussion →
                </a>
              </div>
            </div>

            {/* Horaires */}
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-md text-white"
                style={{ backgroundColor: '#465C88' }}
              >
                <Clock className="w-6 h-6" />
              </div>
              <div className="space-y-0.5">
                <strong
                  className="text-sm font-black block"
                  style={{ color: isDarkMode ? '#F5EBDD' : '#2B2A2A' }}
                >
                  Horaires d'intervention
                </strong>
                <p
                  className="text-xs font-medium"
                  style={{ color: isDarkMode ? '#C4B9AA' : '#696360' }}
                >
                  7 jours sur 7 : 08h00 – 23h00 (GMT)
                </p>
                <p className="text-[11px] text-slate-400">
                  Temps moyen de réponse : 10 minutes
                </p>
              </div>
            </div>

            {/* Moyens de règlement */}
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-md text-white"
                style={{ backgroundColor: '#FF7A30' }}
              >
                <Smartphone className="w-6 h-6" />
              </div>
              <div className="space-y-2 flex-1">
                <strong
                  className="text-sm font-black block"
                  style={{ color: isDarkMode ? '#F5EBDD' : '#2B2A2A' }}
                >
                  Règlements acceptés
                </strong>
                <p
                  className="text-xs font-medium"
                  style={{ color: isDarkMode ? '#C4B9AA' : '#696360' }}
                >
                  Wave Mobile Money, Orange Money, Moov Money, MTN
                </p>
                <div className="flex items-center gap-2 pt-1">
                  <BrandIconBadge iconKey="wave" size="sm" />
                  <BrandIconBadge iconKey="orange" size="sm" />
                  <BrandIconBadge iconKey="moov" size="sm" />
                  <BrandIconBadge iconKey="mtn" size="sm" />
                </div>
              </div>
            </div>

            <div
              className="pt-4 border-t flex items-center gap-2 text-xs font-bold"
              style={{
                borderColor: isDarkMode ? 'rgba(245, 235, 221, 0.1)' : 'rgba(43, 42, 42, 0.1)',
                color: '#465C88',
              }}
            >
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Garantie de remplacement immédiat 7j/7</span>
            </div>
          </div>

          {/* Colonne Formulaire */}
          <div
            className="lg:col-span-7 rounded-3xl border p-7 sm:p-8 shadow-md"
            style={{
              backgroundColor: isDarkMode ? '#343333' : '#FFFFFF',
              borderColor: isDarkMode ? 'rgba(245, 235, 221, 0.15)' : 'rgba(43, 42, 42, 0.12)',
            }}
          >
            <h3
              className="text-lg font-black mb-2"
              style={{ color: isDarkMode ? '#F5EBDD' : '#2B2A2A' }}
            >
              Écrire au support
            </h3>
            <p
              className="text-xs font-medium mb-6"
              style={{ color: isDarkMode ? '#C4B9AA' : '#696360' }}
            >
              Remplissez ce formulaire pour être contacté rapidement sur WhatsApp ou par email.
            </p>

            {isSubmitted ? (
              <div className="py-8 text-center space-y-3">
                <div
                  className="w-14 h-14 mx-auto rounded-full flex items-center justify-center text-white"
                  style={{ backgroundColor: '#FF7A30' }}
                >
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4
                  className="text-base font-black"
                  style={{ color: isDarkMode ? '#F5EBDD' : '#2B2A2A' }}
                >
                  Message transmis avec succès !
                </h4>
                <p
                  className="text-xs font-medium max-w-sm mx-auto"
                  style={{ color: isDarkMode ? '#C4B9AA' : '#696360' }}
                >
                  Merci {formData.name}. Un conseiller examine votre demande et vous répondra sur WhatsApp sous peu.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', contact: '', subject: '', message: '' });
                  }}
                  className="text-xs font-bold hover:underline"
                  style={{ color: '#FF7A30' }}
                >
                  Envoyer un nouveau message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label
                      className="text-xs font-black"
                      style={{ color: isDarkMode ? '#F5EBDD' : '#2B2A2A' }}
                    >
                      Votre nom ou prénom *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ex: Stéphane"
                      className="w-full text-xs px-4 py-3 rounded-xl border focus:outline-none transition-colors"
                      style={{
                        backgroundColor: isDarkMode ? '#2B2A2A' : '#FAF3EB',
                        borderColor: isDarkMode ? 'rgba(245, 235, 221, 0.15)' : 'rgba(43, 42, 42, 0.15)',
                        color: isDarkMode ? '#F5EBDD' : '#2B2A2A',
                      }}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      className="text-xs font-black"
                      style={{ color: isDarkMode ? '#F5EBDD' : '#2B2A2A' }}
                    >
                      Numéro WhatsApp ou Email *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      placeholder="Ex: +226 XX XX XX XX"
                      className="w-full text-xs px-4 py-3 rounded-xl border focus:outline-none transition-colors"
                      style={{
                        backgroundColor: isDarkMode ? '#2B2A2A' : '#FAF3EB',
                        borderColor: isDarkMode ? 'rgba(245, 235, 221, 0.15)' : 'rgba(43, 42, 42, 0.15)',
                        color: isDarkMode ? '#F5EBDD' : '#2B2A2A',
                      }}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    className="text-xs font-black"
                    style={{ color: isDarkMode ? '#F5EBDD' : '#2B2A2A' }}
                  >
                    Objet de la demande
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Ex: Information Canva Pro, ChatGPT ou Pack Cinéma"
                    className="w-full text-xs px-4 py-3 rounded-xl border focus:outline-none transition-colors"
                    style={{
                      backgroundColor: isDarkMode ? '#2B2A2A' : '#FAF3EB',
                      borderColor: isDarkMode ? 'rgba(245, 235, 221, 0.15)' : 'rgba(43, 42, 42, 0.15)',
                      color: isDarkMode ? '#F5EBDD' : '#2B2A2A',
                    }}
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    className="text-xs font-black"
                    style={{ color: isDarkMode ? '#F5EBDD' : '#2B2A2A' }}
                  >
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Expliquez ce que vous souhaitez commander ou savoir..."
                    className="w-full text-xs px-4 py-3 rounded-xl border focus:outline-none transition-colors resize-none"
                    style={{
                      backgroundColor: isDarkMode ? '#2B2A2A' : '#FAF3EB',
                      borderColor: isDarkMode ? 'rgba(245, 235, 221, 0.15)' : 'rgba(43, 42, 42, 0.15)',
                      color: isDarkMode ? '#F5EBDD' : '#2B2A2A',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-black text-xs text-white shadow-md transition-all active:scale-95 disabled:opacity-60 cursor-pointer hover:opacity-95"
                  style={{ backgroundColor: '#FF7A30' }}
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? 'Transmission en cours...' : 'Envoyer ma demande'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
