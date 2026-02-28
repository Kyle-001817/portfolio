import { motion } from 'motion/react';
import { Briefcase, Calendar } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      role: "Ingénieur d'études en développement web",
      company: "Vivetic Group",
      period: "Juin 2024 - Présent",
      description: "Développement et maintenance d'applications web professionnelles",
      current: true,
    },
    {
      role: "Stagiaire Développeur",
      company: "Andri'Corps",
      period: "6 mois",
      description: "Développement d'application de gestion de construction des bâtiments",
      current: false,
    },
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Expérience Professionnelle
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-16 rounded-full" />
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, rotateY: -10 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.02,
                rotateY: 3,
                transition: { duration: 0.3 }
              }}
              style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all shadow-lg hover:shadow-cyan-500/20">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-blue-500/0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity" />
                
                {exp.current && (
                  <div className="absolute -top-3 -right-3 px-4 py-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full text-xs font-semibold shadow-lg">
                    En cours
                  </div>
                )}

                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl shadow-lg shadow-cyan-500/30">
                      <Briefcase size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                      <p className="text-cyan-400 font-semibold text-lg">{exp.company}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-slate-400 mb-4">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>

                  <p className="text-slate-300 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
