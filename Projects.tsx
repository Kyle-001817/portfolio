import { motion } from 'motion/react';
import { Code2, Database, Truck, FileText, Building2 } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: "Gestion de primes",
      description: "Système de gestion des primes pour optimiser le suivi et la distribution",
      icon: <Database size={28} />,
      color: "from-cyan-500 to-blue-600",
      tags: ["Gestion", "RH", "Finance"],
    },
    {
      title: "Gestion de transport",
      description: "Application de gestion de transport au sein de Vivetic Group",
      icon: <Truck size={28} />,
      color: "from-blue-500 to-indigo-600",
      tags: ["Logistique", "Transport", "Vivetic"],
    },
    {
      title: "Script de nettoyage et Archivage RH",
      description: "Automatisation du nettoyage et de l'archivage des données RH",
      icon: <FileText size={28} />,
      color: "from-purple-500 to-pink-600",
      tags: ["Automatisation", "RH", "Data"],
    },
    {
      title: "Gestion de construction",
      description: "Application full remote pour la gestion de construction des bâtiments",
      icon: <Building2 size={28} />,
      color: "from-emerald-500 to-teal-600",
      tags: ["Construction", "Remote", "Management"],
    },
  ];

  return (
    <section id="projets" className="py-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Code2 size={40} className="text-cyan-400" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Projets Réalisés
            </h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4 rounded-full" />
          <p className="text-slate-400 text-lg">Applications développées avec passion et expertise</p>
        </motion.div>

        {/* 3D Mirror Grid Layout */}
        <div className="grid md:grid-cols-2 gap-8 relative" style={{ perspective: '1500px' }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100, rotateX: -30 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                type: 'spring',
                stiffness: 100
              }}
              style={{ transformStyle: 'preserve-3d' }}
              className="relative group"
            >
              {/* Main Card */}
              <motion.div
                whileHover={{ 
                  rotateY: 8,
                  rotateX: 8,
                  scale: 1.05,
                  z: 50,
                  transition: { duration: 0.4 }
                }}
                className="relative bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-xl p-8 rounded-3xl border border-cyan-500/30 hover:border-cyan-500/60 transition-all shadow-2xl hover:shadow-cyan-500/30"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/10 to-blue-500/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                
                {/* 3D Icon */}
                <motion.div
                  whileHover={{ rotateY: 360, scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                  className={`relative z-10 w-20 h-20 mb-6 bg-gradient-to-br ${project.color} rounded-2xl shadow-2xl flex items-center justify-center`}
                  style={{ transform: 'translateZ(40px)' }}
                >
                  {project.icon}
                </motion.div>

                <div className="relative z-10" style={{ transform: 'translateZ(20px)' }}>
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/40 rounded-full text-cyan-400 text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Shimmer effect */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
                </div>
              </motion.div>

              {/* Mirror Reflection Effect */}
              <motion.div
                className="absolute top-full left-0 right-0 h-full pointer-events-none"
                style={{
                  transform: 'scaleY(-1)',
                  transformOrigin: 'top',
                  opacity: 0.15,
                }}
              >
                <div className={`bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-xl p-8 rounded-3xl border border-cyan-500/30`}>
                  <div className={`w-20 h-20 mb-6 bg-gradient-to-br ${project.color} rounded-2xl shadow-2xl flex items-center justify-center`}>
                    {project.icon}
                  </div>
                  <div className="h-24 bg-slate-700/30 rounded" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/0 via-slate-950/50 to-slate-950 rounded-3xl" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Animated Code Symbols */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
          {['</>', '{}', '[]', '()', '</>'].map((symbol, i) => (
            <motion.div
              key={i}
              className="absolute text-cyan-400 text-4xl font-mono"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              {symbol}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
