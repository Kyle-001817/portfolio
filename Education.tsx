import { motion } from 'motion/react';
import { GraduationCap, Award } from 'lucide-react';

export function Education() {
  const education = [
    {
      degree: "Licence spécialisée en développement d'applications",
      school: "ITUNIVERSITY",
      period: "2021-2024",
      field: "Programmation",
      icon: <GraduationCap size={24} />,
    },
    {
      degree: "Médecine humaine",
      school: "UNIVERSITÉ D'ANTANANARIVO",
      period: "2019-2021",
      field: "",
      icon: <GraduationCap size={24} />,
    },
    {
      degree: "Baccalauréat",
      school: "LYCÉE RASALAMA",
      period: "2018-2019",
      field: "Mention assez bien",
      icon: <Award size={24} />,
    },
  ];

  return (
    <section id="formation" className="py-20 px-6 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Formation
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-16 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{
                y: -10,
                rotateX: 5,
                rotateY: 5,
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
              className="group"
            >
              <div className="relative h-full bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl p-6 rounded-2xl border border-cyan-500/20 group-hover:border-cyan-500/50 transition-all shadow-lg hover:shadow-2xl hover:shadow-cyan-500/30">
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/5 to-blue-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* 3D Icon */}
                <motion.div
                  whileHover={{ rotateY: 360 }}
                  transition={{ duration: 0.6 }}
                  className="relative z-10 w-16 h-16 mb-6 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-lg shadow-cyan-500/40 flex items-center justify-center"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {edu.icon}
                </motion.div>

                <div className="relative z-10">
                  <div className="text-cyan-400 font-semibold text-sm mb-2">{edu.period}</div>
                  <h3 className="text-xl font-bold text-white mb-2 leading-tight">{edu.degree}</h3>
                  <p className="text-slate-300 font-medium mb-2">{edu.school}</p>
                  {edu.field && (
                    <div className="inline-block px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm mt-2">
                      {edu.field}
                    </div>
                  )}
                </div>

                {/* Corner decoration */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-cyan-500/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
