import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { 
  Mail, Send, CheckCircle2, 
  AlertCircle, Sparkles, MapPin, Phone, MessageSquare 
} from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './Icons';
import { personalInfo } from '../data/profile';

export const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please provide a subject.';
    if (!formData.message.trim()) newErrors.message = 'Please write a message.';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    
    try {
      // NOTE: You will need to replace these with your actual EmailJS IDs!
      await emailjs.sendForm(
        'YOUR_SERVICE_ID', 
        'YOUR_TEMPLATE_ID', 
        formRef.current, 
        'YOUR_PUBLIC_KEY'
      );
      
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert("Oops! There was a problem submitting your form. Please try again or email directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white dark:bg-neutral-900/40 border-t border-neutral-200/60 dark:border-neutral-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 text-xs font-semibold tracking-wider uppercase mb-3 border border-rose-200 dark:border-rose-900/60">
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Let's Work Together
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-base sm:text-lg mt-3">
            I am open to OJT/internship opportunities, collaborations, freelance projects, and professional connections. Feel free to reach out directly or send a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Details Left Column */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-5">
              <h3 className="font-bold text-lg text-neutral-900 dark:text-white">
                Contact Information
              </h3>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400">Direct Email</div>
                  <a 
                    href={`mailto:${personalInfo.contact.email}`}
                    className="text-sm font-semibold text-neutral-900 dark:text-white hover:text-rose-700 dark:hover:text-rose-400 transition-colors"
                  >
                    {personalInfo.contact.email}
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-400 shrink-0">
                  <LinkedInIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400">LinkedIn Network</div>
                  <a 
                    href={personalInfo.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-neutral-900 dark:text-white hover:text-rose-700 dark:hover:text-rose-400 transition-colors"
                  >
                    linkedin.com/in/mikaelalantafe
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-400 shrink-0">
                  <GitHubIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400">Code Repositories</div>
                  <a 
                    href={personalInfo.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-neutral-900 dark:text-white hover:text-rose-700 dark:hover:text-rose-400 transition-colors"
                  >
                    github.com/mikaelalantafe
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400">Base Location</div>
                  <div className="text-sm font-semibold text-neutral-900 dark:text-white">
                    {personalInfo.contact.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Recruiter / Internship Quick Note */}
            <div className="p-5 rounded-2xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200/80 dark:border-rose-900/40">
              <h4 className="font-bold text-sm text-rose-900 dark:text-rose-300 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-rose-700" />
                Internship / OJT Inquiries
              </h4>
              <p className="text-xs text-neutral-600 dark:text-neutral-300 mt-1.5 leading-relaxed">
                If your company has open OJT or internship slots in UI/UX Design, Front-End Development, Quality Assurance, or IT Support, I'd love to connect and provide university endorsement forms upon request.
              </p>
            </div>

          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-neutral-50 dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 p-6 sm:p-8 shadow-xs">
              
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md mx-auto">
                    Thank you for reaching out, Mikaela will review your message and reply as soon as possible.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-6 py-2.5 text-xs font-semibold rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-4">
                  <h3 className="font-bold text-lg text-neutral-900 dark:text-white mb-2">
                    Send a Direct Message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Maria Santos"
                        className={`w-full px-4 py-2.5 rounded-xl bg-white dark:bg-neutral-800 border text-sm text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-hidden focus:ring-2 focus:ring-rose-500 transition-colors ${
                          errors.name ? 'border-rose-500 ring-1 ring-rose-500' : 'border-neutral-200 dark:border-neutral-700'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@company.com"
                        className={`w-full px-4 py-2.5 rounded-xl bg-white dark:bg-neutral-800 border text-sm text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-hidden focus:ring-2 focus:ring-rose-500 transition-colors ${
                          errors.email ? 'border-rose-500 ring-1 ring-rose-500' : 'border-neutral-200 dark:border-neutral-700'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. OJT Opportunity / UI/UX Project Inquiry"
                      className={`w-full px-4 py-2.5 rounded-xl bg-white dark:bg-neutral-800 border text-sm text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-hidden focus:ring-2 focus:ring-rose-500 transition-colors ${
                        errors.subject ? 'border-rose-500 ring-1 ring-rose-500' : 'border-neutral-200 dark:border-neutral-700'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your team, project requirements, or opportunity..."
                      className={`w-full px-4 py-2.5 rounded-xl bg-white dark:bg-neutral-800 border text-sm text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-hidden focus:ring-2 focus:ring-rose-500 transition-colors resize-none ${
                        errors.message ? 'border-rose-500 ring-1 ring-rose-500' : 'border-neutral-200 dark:border-neutral-700'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-rose-700 hover:bg-rose-800 text-white font-semibold text-sm shadow-md shadow-rose-700/20 transition-all disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Sending Message...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
