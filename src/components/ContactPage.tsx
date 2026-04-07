import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

const CONTACT_IMAGE = "https://storage.googleapis.com/dala-prod-public-storage/generated-images/76122caa-5b47-4e62-b479-06bc42d6786f/contact-support-hub-7012a13d-1775530589850.webp";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Form Validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      setIsSubmitting(false);
      return;
    }

    // Construct Mailto Link
    const mailtoLink = `mailto:info@belcash.com?subject=${encodeURIComponent(formData.subject || 'Contact from BelCash Website')}&body=${encodeURIComponent(`Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}`)}`;
    
    // Simulate API delay and then open mail client
    setTimeout(() => {
      window.location.href = mailtoLink;
      toast.success("Opening your email client to send the message...");
      setIsSubmitting(false);
      // Optional: Clear form
      // setFormData({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-6 uppercase tracking-widest">
            <Globe size={14} />
            <span>Global Support Network</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Get in Touch with our <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-600">
              Engineering Team.
            </span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
            Whether you're a bank looking for sovereign infrastructure or a merchant needing working capital, we're here to engineer your growth.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm p-8 md:p-10 rounded-[2rem]">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-slate-300 ml-1">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-slate-950 border-slate-800 focus:border-emerald-500 h-12 rounded-xl text-white"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-300 ml-1">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-slate-950 border-slate-800 focus:border-emerald-500 h-12 rounded-xl text-white"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-slate-300 ml-1">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="How can we help?"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-slate-950 border-slate-800 focus:border-emerald-500 h-12 rounded-xl text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-slate-300 ml-1">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project or inquiry..."
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-slate-950 border-slate-800 focus:border-emerald-500 min-h-[160px] rounded-xl resize-none text-white"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white h-14 rounded-xl font-bold text-lg shadow-lg shadow-emerald-900/20 transition-all flex items-center justify-center gap-2 group"
                >
                  {isSubmitting ? "Initializing..." : (
                    <>
                      Send Message
                      <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-12"
          >
            {/* Contact Details */}
            <div className="grid gap-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-emerald-900/30 rounded-2xl flex items-center justify-center text-emerald-400 shrink-0 border border-emerald-900/50">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl mb-1">Email Us</h4>
                  <p className="text-slate-400 mb-2">Our engineering support team is ready to assist.</p>
                  <a href="mailto:info@belcash.com" className="text-emerald-400 font-mono hover:underline">info@belcash.com</a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-indigo-900/30 rounded-2xl flex items-center justify-center text-indigo-400 shrink-0 border border-indigo-900/50">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl mb-1">Response Time</h4>
                  <p className="text-slate-400">Standard response within 24–48 engineering hours.</p>
                  <p className="text-xs text-slate-500 mt-1 uppercase tracking-widest font-mono">Mon-Fri: 09:00 - 18:00 (GMT+3)</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-emerald-900/30 rounded-2xl flex items-center justify-center text-emerald-400 shrink-0 border border-emerald-900/50">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl mb-1">Our Headquarters</h4>
                  <p className="text-slate-400">Addis Ababa, Ethiopia</p>
                  <p className="text-slate-400">The Heart of Pan-African Engineering.</p>
                </div>
              </div>
            </div>

            {/* Visual Card */}
            <div className="relative">
              <div className="absolute -inset-4 bg-emerald-500/10 rounded-[2.5rem] blur-3xl"></div>
              <div className="relative rounded-[2rem] overflow-hidden border border-slate-800 shadow-2xl group">
                <img 
                  src={CONTACT_IMAGE} 
                  alt="BelCash Support Hub" 
                  className="w-full aspect-video object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-6 left-6">
                  <p className="text-white font-bold text-lg">Global Operations Center</p>
                  <p className="text-emerald-400 text-xs font-mono uppercase">Status: Operational</p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="p-8 bg-slate-900/30 border border-slate-800 rounded-2xl">
              <h5 className="text-white font-bold mb-4 flex items-center gap-2">
                <MessageSquare size={18} className="text-emerald-500" />
                Quick Support Links
              </h5>
              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" className="border-slate-700 text-slate-400 hover:text-emerald-400 cursor-pointer transition-colors">Developer Docs</Badge>
                <Badge variant="outline" className="border-slate-700 text-slate-400 hover:text-emerald-400 cursor-pointer transition-colors">API Status</Badge>
                <Badge variant="outline" className="border-slate-700 text-slate-400 hover:text-emerald-400 cursor-pointer transition-colors">Merchant Portal</Badge>
                <Badge variant="outline" className="border-slate-700 text-slate-400 hover:text-emerald-400 cursor-pointer transition-colors">Whitepapers</Badge>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}