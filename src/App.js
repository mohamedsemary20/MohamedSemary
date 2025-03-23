import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaServer, FaDatabase, FaCloud } from 'react-icons/fa';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary via-primary to-tertiary text-textPrimary">
      {/* Navbar */}
      <nav className="fixed w-full bg-primary/80 backdrop-blur-lg z-50 border-b border-secondary/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-secondary to-blue-400 bg-clip-text text-transparent"
          >
            MS
          </motion.h1>
          <div className="flex space-x-8">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.1 }}
                className="relative group"
              >
                <span className="text-sm font-medium">{item}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 pt-24">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center relative overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <span className="text-secondary font-mono">مرحباً، أنا</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-6xl font-bold mb-6 bg-gradient-to-r from-secondary to-blue-400 bg-clip-text text-transparent"
            >
              محمد عبد المنعم سماري
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl font-bold mb-6 text-textSecondary"
            >
              Full-Stack Developer | .NET (C#) Specialist
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-textSecondary mb-8 max-w-2xl"
            >
              شغوف ببناء تطبيقات ويب قابلة للتطوير وأداء عالي باستخدام .NET
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex space-x-6"
            >
              <a href="https://github.com/mohamedsemary20" target="_blank" rel="noopener noreferrer" 
                className="text-2xl hover:text-secondary transition-colors hover:scale-110 transform duration-300">
                <FaGithub />
              </a>
              <a href="#" className="text-2xl hover:text-secondary transition-colors hover:scale-110 transform duration-300">
                <FaLinkedin />
              </a>
              <a href="mailto:your.email@example.com" className="text-2xl hover:text-secondary transition-colors hover:scale-110 transform duration-300">
                <FaEnvelope />
              </a>
            </motion.div>
          </motion.div>
          
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-secondary/10 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-blue-400/10 rounded-full filter blur-3xl"></div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-secondary to-blue-400 bg-clip-text text-transparent">
              من أنا
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-textSecondary leading-relaxed">
                  مطور Full-Stack متخصص في .NET (C#) مع شغف لبناء تطبيقات ويب قابلة للتطوير وأداء عالي.
                </p>
                <p className="text-textSecondary leading-relaxed">
                  أتعلم حالياً تصميم الأنظمة، تحسين الأداء، وتحسين مهاراتي في الواجهة الأمامية.
                </p>
                <p className="text-textSecondary leading-relaxed">
                  حقيقة ممتعة: أبرمج نهاراً وأستكشف التمثيل ليلاً - مزج المنطق والإبداع بطرق غير متوقعة! 🎭
                </p>
              </div>
              <div className="bg-tertiary/50 p-8 rounded-2xl backdrop-blur-sm border border-secondary/20">
                <h3 className="text-xl font-bold mb-6 text-secondary">المهارات التقنية</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <FaCode className="text-secondary" />
                    <span>C# / .NET</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaServer className="text-secondary" />
                    <span>NodeJS</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaDatabase className="text-secondary" />
                    <span>SQL Server</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaCloud className="text-secondary" />
                    <span>Cloud Services</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-secondary to-blue-400 bg-clip-text text-transparent">
              تواصل معي
            </h2>
            <p className="text-textSecondary mb-12">
              أبحث حالياً عن فرص جديدة. سواء كان لديك سؤال أو تريد فقط أن تقول مرحباً، 
              سأحاول الرد عليك بأسرع ما يمكن!
            </p>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:your.email@example.com" 
              className="inline-block px-8 py-4 bg-secondary/10 border-2 border-secondary text-secondary rounded-lg hover:bg-secondary/20 transition-colors"
            >
              أرسل رسالة
            </motion.a>
          </motion.div>
        </section>
      </main>

      <footer className="py-8 text-center text-textSecondary border-t border-secondary/20">
        <p>© {new Date().getFullYear()} محمد عبد المنعم سماري. جميع الحقوق محفوظة.</p>
      </footer>
    </div>
  );
}

export default App; 