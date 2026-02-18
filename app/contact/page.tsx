"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-12">
      {/* Header Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative rounded-[36px] bg-gradient-to-br from-[#ffc857]/10 via-[#ff5e7d]/10 to-[#6b7bff]/10 border border-white/20 backdrop-blur-md p-6 sm:p-8 md:p-10 overflow-hidden"
      >
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-[#ffc857] to-[#ff5e7d] opacity-10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gradient-to-tr from-[#6b7bff] to-[#00c6ae] opacity-10 blur-3xl" />
        
        <div className="relative">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#ffc857] to-[#ff5e7d] shadow-[0_8px_16px_-4px_rgba(255,200,87,0.4)]">
                <Icon icon="mdi:send" className="text-xl text-white" aria-hidden />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] bg-gradient-to-r from-[#ffc857] to-[#ff5e7d] bg-clip-text text-transparent">
                Contact
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-white/60 bg-white/10 backdrop-blur px-3 py-1.5 rounded-full">
              <Icon icon="mdi:sparkles" className="text-[#ffc857]" aria-hidden />
              Let's Collaborate
            </div>
          </div>

          <h1 className="text-display text-4xl sm:text-5xl font-black leading-tight text-[#1c142c]">
            Mari <span className="bg-gradient-to-r from-[#ffc857] to-[#ff5e7d] bg-clip-text text-transparent">Kolaborasi</span> dan Mulai Project Baru
          </h1>
          <p className="mt-5 max-w-2xl text-base text-[#4a3a6a] leading-relaxed">
            Kirim <span className="font-semibold text-[#ff5e7d]">brief singkat</span> agar saya dapat menyiapkan ide, mood, dan timeline yang tepat untuk project Anda.
          </p>
        </div>
      </motion.section>

      {/* Main Content Grid */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]"
      >
        {/* Form Section */}
        <div className="space-y-6">
          <form className="rounded-3xl bg-gradient-to-br from-white/50 to-white/30 backdrop-blur border border-white/20 p-6 sm:p-8 shadow-[0_20px_35px_-20px_rgba(28,20,44,0.5)]">
            <div className="mb-6">
              <h2 className="text-display text-2xl font-black text-[#1c142c]">Kirim Pesan</h2>
              <p className="text-sm text-[#4a3a6a] mt-1">Isi form di bawah dan saya akan segera menghubungi Anda</p>
            </div>

            <div className="space-y-5">
              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-[#1c142c] mb-2" htmlFor="name">
                  <Icon icon="mdi:account" className="text-base text-[#6b7bff]" aria-hidden />
                  Nama Lengkap
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Masukkan nama lengkap Anda"
                  className="w-full rounded-xl border-2 border-white/40 bg-white/60 backdrop-blur px-4 py-3 text-sm text-[#1c142c] placeholder:text-[#4a3a6a]/50 focus:outline-none focus:ring-2 focus:ring-[#6b7bff] focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-[#1c142c] mb-2" htmlFor="email">
                  <Icon icon="mdi:email-outline" className="text-base text-[#00c6ae]" aria-hidden />
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="contoh: akun@email.com"
                  className="w-full rounded-xl border-2 border-white/40 bg-white/60 backdrop-blur px-4 py-3 text-sm text-[#1c142c] placeholder:text-[#4a3a6a]/50 focus:outline-none focus:ring-2 focus:ring-[#00c6ae] focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-[#1c142c] mb-2" htmlFor="phone">
                  <Icon icon="mdi:phone" className="text-base text-[#ffc857]" aria-hidden />
                  Nomor Telepon
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+62 812 3456 7890"
                  className="w-full rounded-xl border-2 border-white/40 bg-white/60 backdrop-blur px-4 py-3 text-sm text-[#1c142c] placeholder:text-[#4a3a6a]/50 focus:outline-none focus:ring-2 focus:ring-[#ffc857] focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label
                  className="flex items-center gap-2 text-sm font-bold text-[#1c142c] mb-2"
                  htmlFor="message"
                >
                  <Icon icon="mdi:message-text-outline" className="text-base text-[#ff5e7d]" aria-hidden />
                  Pesan / Brief Project
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Ceritakan tentang project Anda, kebutuhan, timeline, dan budget estimasi..."
                  className="w-full rounded-xl border-2 border-white/40 bg-white/60 backdrop-blur px-4 py-3 text-sm text-[#1c142c] placeholder:text-[#4a3a6a]/50 focus:outline-none focus:ring-2 focus:ring-[#ff5e7d] focus:border-transparent transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-[#6b7bff] to-[#00c6ae] px-6 py-4 text-sm font-bold text-white shadow-[0_15px_30px_-15px_rgba(107,123,255,0.5)] transition-all hover:shadow-[0_20px_40px_-15px_rgba(107,123,255,0.7)] hover:scale-105 active:scale-95"
              >
                <span className="flex items-center justify-center gap-2">
                  <Icon icon="mdi:send" className="text-lg" aria-hidden />
                  Kirim Pesan Sekarang
                </span>
              </button>
            </div>
          </form>

          {/* Social Media Links */}
          <div className="rounded-3xl bg-gradient-to-br from-[#1c142c] to-[#3a2860] p-6 sm:p-8 shadow-[0_20px_35px_-20px_rgba(28,20,44,0.7)]">
            <h3 className="text-display text-2xl font-black text-white mb-4">Social Media</h3>
            <p className="text-sm text-white/70 mb-6">Follow dan connect dengan saya di platform lain</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { icon: "mdi:instagram", label: "Instagram", color: "from-[#f43f5e] to-[#f97316]", link: "https://www.instagram.com/bismin__" },
                { icon: "mdi:linkedin", label: "LinkedIn", color: "from-[#0ea5e9] to-[#06b6d4]", link: "https://www.linkedin.com/in/bismin-ibrahim-662361177/" },
                { icon: "mdi:github", label: "GitHub", color: "from-[#6b7bff] to-[#8b5cf6]", link: "https://github.com/bismin98" },
                { icon: "mdi:behance", label: "Behance", color: "from-[#3b82f6] to-[#6366f1]", link: "#" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.link}
                  className={`rounded-2xl bg-gradient-to-br ${social.color} p-4 text-center shadow-[0_10px_20px_-10px_rgba(28,20,44,0.5)] transition-all hover:scale-110 hover:shadow-[0_15px_30px_-10px_rgba(28,20,44,0.7)]`}
                >
                  <Icon icon={social.icon} className="text-3xl text-white mx-auto mb-2" aria-hidden />
                  <p className="text-xs font-bold text-white">{social.label}</p>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Info Sidebar */}
        <div className="space-y-6">
          {/* Contact Details */}
          <div className="rounded-3xl bg-gradient-to-br from-[#ff5e7d] to-[#ffc857] p-6 sm:p-8 shadow-[0_20px_35px_-20px_rgba(255,94,125,0.5)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur">
                <Icon icon="mdi:information" className="text-xl text-white" aria-hidden />
              </div>
              <h3 className="text-display text-2xl font-black text-white">
                Info Kontak
              </h3>
            </div>
            <p className="text-sm text-white/90 mb-6">
              Respon cepat dalam 24 jam untuk semua inquiry
            </p>
            <div className="space-y-4">
              <a href="mailto:bismin.ibrahim@gmail.com" className="flex items-start gap-3 p-4 rounded-xl bg-white/20 backdrop-blur transition-all hover:bg-white/30">
                <Icon icon="mdi:email-outline" className="text-xl text-white flex-shrink-0 mt-0.5" aria-hidden />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-white/70">Email</p>
                  <p className="text-sm font-bold text-white">bismin.ibrahim@gmail.com</p>
                </div>
              </a>
              <a href="https://wa.me/6285205088544" className="flex items-start gap-3 p-4 rounded-xl bg-white/20 backdrop-blur transition-all hover:bg-white/30">
                <Icon icon="mdi:whatsapp" className="text-xl text-white flex-shrink-0 mt-0.5" aria-hidden />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-white/70">WhatsApp</p>
                  <p className="text-sm font-bold text-white">+62 852 0508 8544</p>
                </div>
              </a>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/20 backdrop-blur">
                <Icon icon="mdi:map-marker" className="text-xl text-white flex-shrink-0 mt-0.5" aria-hidden />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-white/70">Location</p>
                  <p className="text-sm font-bold text-white">Jl. Besaki VII, No.BG30, Balikpapan Regency, Kota Balikpapan, Kalimantan Timur, Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="rounded-3xl bg-gradient-to-br from-[#6b7bff] to-[#00c6ae] p-6 sm:p-8 shadow-[0_20px_35px_-20px_rgba(107,123,255,0.5)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur">
                <Icon icon="mdi:clock-outline" className="text-xl text-white" aria-hidden />
              </div>
              <h3 className="text-display text-2xl font-black text-white">
                Jam Kerja
              </h3>
            </div>
            <div className="space-y-3">
              {[
                { day: "Senin - Jumat", time: "09.00 - 18.00 WIB", active: true },
                { day: "Sabtu", time: "10.00 - 15.00 WIB", active: true },
                { day: "Minggu", time: "Off / On Call", active: false },
              ].map((schedule) => (
                <div key={schedule.day} className="flex items-center justify-between p-4 rounded-xl bg-white/20 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <div className={`h-2 w-2 rounded-full ${schedule.active ? 'bg-green-400' : 'bg-white/40'}`} />
                    <p className="text-sm font-bold text-white">{schedule.day}</p>
                  </div>
                  <p className="text-xs font-semibold text-white/80">{schedule.time}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Response */}
          <div className="rounded-3xl bg-gradient-to-br from-[#10b981] to-[#059669] p-6 shadow-[0_20px_35px_-20px_rgba(16,185,129,0.5)]">
            <div className="flex items-start gap-3">
              <Icon icon="mdi:lightning-bolt" className="text-2xl text-white flex-shrink-0" aria-hidden />
              <div>
                <h4 className="text-sm font-black text-white mb-1">Fast Response</h4>
                <p className="text-xs text-white/80">Rata-rata respon dalam 2-4 jam di hari kerja</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
