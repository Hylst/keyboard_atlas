import React, { useState } from 'react';

interface OnboardingProps {
  onComplete: () => void;
}

const steps = [
  {
    title: "Bienvenue sur Keyboard Atlas",
    subtitle: "Votre cerveau va adorer.",
    description: "Apprenez les raccourcis clavier de vos outils préférés de manière interactive. Ne cherchez plus vos raccourcis, maîtrisez-les.",
    icon: "⌨️",
    color: "from-indigo-500 to-violet-600"
  },
  {
    title: "Répétition Espacée (SRS)",
    subtitle: "Apprenez intelligemment.",
    description: "Marquez un raccourci comme 'Maîtrisé'. S'il nécessite une révision, Keyboard Atlas vous interrogera au moment parfait pour optimiser votre mémoire à long terme.",
    icon: "🧠",
    color: "from-emerald-500 to-teal-600"
  },
  {
    title: "Vitesse & Réflexes",
    subtitle: "Prêt(e) à battre des records ?",
    description: "Testez votre vitesse pure dans le mode Arcade ou le mini-jeu Typage Rapide. Votre progression, vos favoris, tout reste stocké 100% hors-ligne dans votre navigateur.",
    icon: "🕹️",
    color: "from-amber-500 to-orange-600"
  }
];

const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      onComplete();
    }
  };

  const current = steps[currentStep];

  return (
    <div className="fixed inset-0 z-[200] bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
      <div 
        className="w-full max-w-lg bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col relative animate-slide-up"
      >
        {/* Decorative background */}
        <div className={`absolute top-0 left-0 w-full h-48 bg-gradient-to-br ${current.color} opacity-10 transition-colors duration-500`}></div>
        
        <div className="p-10 relative z-10 flex flex-col items-center text-center">
          <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${current.color} flex items-center justify-center text-5xl shadow-xl mb-8 transform transition-transform duration-500 hover:scale-110`}>
            {current.icon}
          </div>
          
          <h2 className="text-3xl font-black text-slate-900 mb-2 leading-tight">
            {current.title}
          </h2>
          <p className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-6">
            {current.subtitle}
          </p>
          <p className="text-slate-600 leading-relaxed mb-10 min-h-[4rem]">
            {current.description}
          </p>

          <div className="w-full flex items-center justify-between">
            {/* Dots */}
            <div className="flex gap-2">
              {steps.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-2 rounded-full transition-all duration-300 ${idx === currentStep ? 'w-8 bg-indigo-600' : 'w-2 bg-slate-200'}`}
                />
              ))}
            </div>
            
            {/* Action */}
            <button
              onClick={nextStep}
              className={`px-8 py-3 rounded-xl text-white font-bold tracking-wide transition-all ${
                currentStep === steps.length - 1 
                  ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 shadow-emerald-500/30 shadow-lg'
                  : 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-500/20 shadow-md'
              }`}
            >
              {currentStep === steps.length - 1 ? "C'est parti !" : "Suivant"}
            </button>
          </div>
        </div>
        
        {/* Skip button for early steps */}
        {currentStep < steps.length - 1 && (
          <button 
            onClick={onComplete}
            className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 text-xs font-bold tracking-widest uppercase transition-colors z-20"
          >
            Passer
          </button>
        )}
      </div>
    </div>
  );
};

export default Onboarding;
