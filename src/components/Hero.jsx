import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Sparkles, ShieldCheck, Award, Compass, Plane } from 'lucide-react';

export default function Hero() {
  const canvasRef = useRef(null);
  const cardRef = useRef(null);

  // 3D Gyroscope Mouse Tilt Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);
  const badgeTranslateX = useTransform(mouseXSpring, [-0.5, 0.5], [-12, 12]);
  const badgeTranslateY = useTransform(mouseYSpring, [-0.5, 0.5], [-12, 12]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.clientWidth);
    let height = (canvas.height = canvas.parentElement.clientHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Flight Beacons
    const beacons = [
      { name: 'Munich 🇩🇪', lat: 0.4, lon: 0.2 },
      { name: 'Vancouver 🇨🇦', lat: -0.3, lon: 1.2 },
      { name: 'London 🇬🇧', lat: 0.5, lon: -0.4 },
      { name: 'Sydney 🇦🇺', lat: -0.6, lon: -1.8 },
      { name: 'Boston 🇺🇸', lat: 0.2, lon: 2.1 }
    ];

    // Constellation Particles
    const particles = Array.from({ length: 75 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 2 + 1
    }));

    let globeRotation = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // DYNAMIC GLOBE CENTER POS: Calculate directly from cardRef bounding rect
      let globeCenterX = width * 0.75;
      let globeCenterY = height * 0.5;
      const isDesktop = width >= 1024;
      const globeRadius = isDesktop ? 360 : Math.min(width, height) * 0.6;

      if (cardRef.current && canvas) {
        const cardRect = cardRef.current.getBoundingClientRect();
        const canvasRect = canvas.getBoundingClientRect();
        globeCenterX = cardRect.left + cardRect.width / 2 - canvasRect.left;
        globeCenterY = cardRect.top + cardRect.height / 2 - canvasRect.top;
      }

      // Render 3D Rotating Globe Wireframe Ring
      globeRotation += 0.0035;

      ctx.save();
      ctx.translate(globeCenterX, globeCenterY);

      // Latitude Rings
      for (let lat = -Math.PI / 2 + 0.3; lat < Math.PI / 2; lat += Math.PI / 6) {
        const r = globeRadius * Math.cos(lat);
        const yPos = globeRadius * Math.sin(lat);

        ctx.beginPath();
        ctx.ellipse(0, yPos, r, r * 0.35, 0, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(37, 99, 235, 0.16)';
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }

      // Longitude Rings (Rotating)
      for (let lon = 0; lon < Math.PI; lon += Math.PI / 6) {
        const currentAngle = lon + globeRotation;
        const rx = Math.abs(globeRadius * Math.cos(currentAngle));

        ctx.beginPath();
        ctx.ellipse(0, 0, rx, globeRadius, 0, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(79, 70, 229, 0.14)';
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }

      // Draw Outer Rim Glow Ring
      ctx.beginPath();
      ctx.arc(0, 0, globeRadius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(37, 99, 235, 0.32)';
      ctx.lineWidth = 2.2;
      ctx.stroke();

      // Pulsing Beacon Nodes on Globe
      beacons.forEach((b) => {
        const angle = b.lon + globeRotation;
        const bx = globeRadius * Math.cos(b.lat) * Math.sin(angle);
        const by = -globeRadius * Math.sin(b.lat);
        const visible = Math.cos(angle) > -0.2;

        if (visible) {
          ctx.beginPath();
          ctx.arc(bx, by, 5.5, 0, Math.PI * 2);
          ctx.fillStyle = '#2563EB';
          ctx.shadowColor = '#2563EB';
          ctx.shadowBlur = 14;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      ctx.restore();

      // Particle Mesh Connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 135) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(37, 99, 235, ${0.15 * (1 - dist / 135)})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(37, 99, 235, 0.35)';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-[92vh] pt-8 pb-20 flex items-center overflow-hidden bg-gradient-to-b from-blue-50/70 via-indigo-50/20 to-white">

      {/* Background 3D Globe Canvas */}
      <div className="absolute inset-0 max-h-full w-full overflow-hidden pointer-events-none z-0">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>

      {/* Aurora Light Spotlights */}
      <div className="absolute top-1/4 left-1/6 w-[650px] h-[650px] bg-blue-400/15 rounded-full blur-[140px] pointer-events-none aurora-blob-1" />
      <div className="absolute bottom-1/4 right-1/6 w-[650px] h-[650px] bg-indigo-400/15 rounded-full blur-[140px] pointer-events-none aurora-blob-2" />

      {/* Enforced max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 for perfect widescreen alignment */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Left Column: Hero Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 space-y-6 text-left"
        >

          <div className="badge-tag">
            <Sparkles size={14} className="text-blue-600 animate-spin" />
            <span>Study Abroad Consultancy • Hyderabad</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.08] font-display text-slate-900">
            Architecting Your <br />
            <span className="heading-brand-gradient">Global Education.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-normal">
            Elevating ambitious students into top global universities. Expert admissions, zero-tuition pathways in Germany & France, scholarships, and 98% visa approval.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a href="#wizard" className="btn-primary text-base px-8 py-4 shadow-lg shadow-blue-600/20">
              <Sparkles size={18} />
              <span>Evaluate Admit & Scholarship</span>
            </a>
            <a href="#budget-calculator" className="btn-outline text-base px-8 py-4">
              <Compass size={18} />
              <span>Explore Cost Calculator</span>
            </a>
          </div>

          {/* Departure Flight Ticket Pills — Desktop only; mobile version appears below card */}
          <div className="hidden lg:block pt-8 border-t border-slate-200/80 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <Plane size={14} className="text-blue-600" />
              <span>Live Departure Hubs</span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <motion.div whileHover={{ scale: 1.05 }} className="px-3.5 py-2 rounded-2xl bg-white border border-slate-200 shadow-sm text-xs font-bold text-slate-800 flex items-center gap-2 font-mono">
                <span className="text-blue-600">HYD ✈️ MUC</span>
                <span className="text-[10px] text-emerald-700 font-extrabold bg-emerald-50 px-2 py-0.5 rounded-md font-sans">Germany €0 Tuition</span>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} className="px-3.5 py-2 rounded-2xl bg-white border border-slate-200 shadow-sm text-xs font-bold text-slate-800 flex items-center gap-2 font-mono">
                <span className="text-blue-600">HYD ✈️ YVR</span>
                <span className="text-[10px] text-blue-700 font-extrabold bg-blue-50 px-2 py-0.5 rounded-md font-sans">Canada 3Y PGWP</span>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} className="px-3.5 py-2 rounded-2xl bg-white border border-slate-200 shadow-sm text-xs font-bold text-slate-800 flex items-center gap-2 font-mono">
                <span className="text-blue-600">HYD ✈️ LHR</span>
                <span className="text-[10px] text-purple-700 font-extrabold bg-purple-50 px-2 py-0.5 rounded-md font-sans">UK 1Y Master's</span>
              </motion.div>
            </div>
          </div>

        </motion.div>

        {/* Right Column: Visual Photo Card Aligned DEAD CENTER on Globe with 3D Tilt */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative perspective-1000 mx-auto w-full max-w-md lg:max-w-none lg:mx-0 "
        >
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d'
            }}
            className="relative glass-panel-glow p-5 space-y-4 bg-white/90 backdrop-blur-2xl border border-slate-200 shadow-2xl rounded-3xl cursor-grab active:cursor-grabbing hover:border-blue-400 transition-colors duration-300"
          >

            {/* Visual Student Frame */}
            <div className="relative rounded-2xl overflow-hidden h-76 sm:h-60 border border-slate-200 shadow-inner">
              <img
                src="/assets/students-hero.png"
                alt="International Students"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                <div className="bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-emerald-500/30 text-emerald-700 text-xs font-extrabold flex items-center gap-1.5 shadow-md">
                  <ShieldCheck size={16} className="text-emerald-600" />
                  <span>98% Visa Success Verified</span>
                </div>
              </div>
            </div>

            {/* Metric Matrix */}
            <div className="grid grid-cols-2 gap-3 text-center pt-1">
              <div className="p-3.5 rounded-2xl bg-blue-50/80 border border-blue-100 shadow-xs">
                <div className="text-2xl font-extrabold text-blue-600 font-display">100+</div>
                <div className="text-[10px] text-slate-600 uppercase font-bold tracking-wider mt-0.5">Guided Students</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-indigo-50/80 border border-indigo-100 shadow-xs">
                <div className="text-2xl font-extrabold text-indigo-600 font-display">500+</div>
                <div className="text-[10px] text-slate-600 uppercase font-bold tracking-wider mt-0.5">Partner Univs</div>
              </div>
            </div>

            {/* Interactive 3D Floating Parallax Badge */}
            <motion.div
              style={{
                x: badgeTranslateX,
                y: badgeTranslateY,
                translateZ: 40
              }}
              className="absolute -top-4 sm:-top-8 right-1 sm:-right-6 bg-white p-2.5 sm:p-4 rounded-2xl border border-slate-200 shadow-2xl flex items-center gap-2 sm:gap-3 animate-float-slow z-20"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                <Award size={20} />
              </div>
              <div>
                <div className="text-xs font-extrabold text-slate-900">Top Rated Consultancy</div>
                <div className="text-[10px] text-amber-600 font-bold">4.9 ★★★★★ (87 Reviews)</div>
              </div>
            </motion.div>

          </motion.div>
        </motion.div>

        {/* Live Departure Hubs — Mobile only, appears after the card */}
        <div className="lg:hidden pt-6 border-t border-slate-200/80 space-y-3 w-full max-w-md mx-auto">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <Plane size={14} className="text-blue-600" />
            <span>Live Departure Hubs</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <motion.div whileHover={{ scale: 1.05 }} className="px-3.5 py-2 rounded-2xl bg-white border border-slate-200 shadow-sm text-xs font-bold text-slate-800 flex items-center gap-2 font-mono">
              <span className="text-blue-600">HYD ✈️ MUC</span>
              <span className="text-[10px] text-emerald-700 font-extrabold bg-emerald-50 px-2 py-0.5 rounded-md font-sans">Germany €0 Tuition</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="px-3.5 py-2 rounded-2xl bg-white border border-slate-200 shadow-sm text-xs font-bold text-slate-800 flex items-center gap-2 font-mono">
              <span className="text-blue-600">HYD ✈️ YVR</span>
              <span className="text-[10px] text-blue-700 font-extrabold bg-blue-50 px-2 py-0.5 rounded-md font-sans">Canada 3Y PGWP</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="px-3.5 py-2 rounded-2xl bg-white border border-slate-200 shadow-sm text-xs font-bold text-slate-800 flex items-center gap-2 font-mono">
              <span className="text-blue-600">HYD ✈️ LHR</span>
              <span className="text-[10px] text-purple-700 font-extrabold bg-purple-50 px-2 py-0.5 rounded-md font-sans">UK 1Y Master's</span>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
