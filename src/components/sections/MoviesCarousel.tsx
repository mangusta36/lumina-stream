"use client";
import { motion } from "framer-motion";

const movies = [
  { id: 1, img: "/movie1..webp" }, // Zdt l-noqta l-khra hit 3ndek smitha movie1..webp
  { id: 2, img: "/movie2.webp" },
  { id: 3, img: "/movie3.webp" },
  { id: 4, img: "/movie4.jpeg" },
  { id: 5, img: "/movie5.webp" },
  { id: 6, img: "/movie6.jpeg" }, // Sedina l-guillemet hna
  { id: 7, img: "/movie7.jpeg" },
  { id: 8, img: "/movie8.jpeg" },
];

// كنضوبلو القائمة باش تبان الحركة مالانهائية (Infinite)
const duplicatedMovies = [...movies, ...movies, ...movies];

export default function MoviesCarousel() {
  return (
    <section className="py-24 bg-black overflow-hidden relative">
      {/* الضوء البنفسجي وراء العنوان */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/10 blur-[130px] rounded-full -z-0" />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10 mb-20">
        <h2 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter italic uppercase">
          Movies on Demand, <br />
          <span className="text-cyan-500 italic">Sports, and Much More!</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
          Access a massive library of the latest blockbuster movies and live sports events in 4K quality.
        </p>
      </div>

      {/* الكاروسيل (الصور الـ 8 اللي كتحرك لليمن) */}
      <div className="relative flex overflow-hidden py-10">
        <motion.div
          className="flex gap-8 flex-nowrap"
          initial={{ x: "-50%" }} 
          animate={{ x: "0%" }}    
          transition={{
            duration: 35, 
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedMovies.map((movie, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-[260px] md:w-[320px] aspect-[2/3] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-gray-900 group"
            >
              <img 
                src={movie.img} 
                alt={`Movie Poster ${movie.id}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              {/* طبقة خفيفة فوق الصور باش يبانو "Premium" */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </motion.div>

        {/* ضلال خفيف فالجناب (Faded edges) باش الصور ميبانوش كيتقطعو فالجناب */}
        <div className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-black via-black/50 to-transparent z-10" />
        <div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-black via-black/50 to-transparent z-10" />
      </div>
    </section>
  );
}
