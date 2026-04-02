"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function ROICalculator() {
  const [investment, setInvestment] = useState(30000);
  const [industry, setIndustry] = useState("services");

  const multipliers: Record<string, { cpl: number; closeRate: number; avgTicket: number; label: string }> = {
    services: { cpl: 350, closeRate: 20, avgTicket: 25000, label: "Servicios Profesionales" },
    ecommerce: { cpl: 180, closeRate: 3, avgTicket: 1200, label: "E-commerce / Retail" },
    manufacturing: { cpl: 500, closeRate: 15, avgTicket: 80000, label: "Manufactura / Industrial" },
    healthcare: { cpl: 400, closeRate: 12, avgTicket: 15000, label: "Salud" },
    finance: { cpl: 450, closeRate: 18, avgTicket: 50000, label: "Financiero" },
  };

  const m = multipliers[industry];
  const leads = Math.round(investment / m.cpl);
  const clients = Math.max(1, Math.round(leads * (m.closeRate / 100)));
  const revenue = clients * m.avgTicket;
  const roi = Math.round(((revenue - investment) / investment) * 100);

  return (
    <div className="bg-surface border border-border p-8">
      <h3 className="text-lg font-semibold text-primary mb-1">Calculadora de ROI en Marketing Digital</h3>
      <p className="text-sm text-text-muted mb-8">Estima el retorno de inversion basado en tu industria y presupuesto mensual.</p>

      <div className="grid gap-10 md:grid-cols-2">
        {/* Controls */}
        <div className="space-y-6">
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-primary mb-3 block">Industria</label>
            <div className="space-y-2">
              {Object.entries(multipliers).map(([key, val]) => (
                <button
                  key={key}
                  onClick={() => setIndustry(key)}
                  className={`block w-full text-left px-4 py-2.5 text-sm border transition-all ${
                    industry === key
                      ? "bg-accent text-white border-accent"
                      : "bg-surface text-primary border-border hover:border-accent"
                  }`}
                >
                  {val.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-primary">Inversion mensual (MXN)</label>
              <span className="text-sm font-bold text-accent">${investment.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min={5000}
              max={200000}
              step={5000}
              value={investment}
              onChange={(e) => setInvestment(Number(e.target.value))}
              className="w-full h-1.5 bg-border rounded-none appearance-none cursor-pointer accent-accent"
            />
            <div className="flex justify-between text-xs text-text-muted mt-1">
              <span>$5,000</span>
              <span>$200,000</span>
            </div>
          </div>

          <div className="p-4 bg-accent-light border border-accent/20">
            <p className="text-xs text-text-muted uppercase tracking-wider mb-2">Parametros de {m.label}</p>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div>
                <p className="text-base font-bold text-primary">${m.cpl.toLocaleString()}</p>
                <p className="text-[10px] text-text-muted">Costo por Lead</p>
              </div>
              <div>
                <p className="text-base font-bold text-primary">{m.closeRate}%</p>
                <p className="text-[10px] text-text-muted">Tasa de Cierre</p>
              </div>
              <div>
                <p className="text-base font-bold text-primary">${(m.avgTicket / 1000).toFixed(0)}k</p>
                <p className="text-[10px] text-text-muted">Ticket Promedio</p>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex items-end gap-6">
              <div>
                <p className="text-xs text-text-muted uppercase tracking-wider mb-1">Inversion</p>
                <p className="text-2xl font-heading font-bold text-primary">${investment.toLocaleString()}</p>
              </div>
              <div className="text-2xl text-text-muted font-light">→</div>
              <div>
                <p className="text-xs text-text-muted uppercase tracking-wider mb-1">Revenue estimado</p>
                <p className="text-2xl font-heading font-bold text-accent">${revenue.toLocaleString()}</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="border border-border p-4 text-center">
                <motion.p
                  key={leads}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-2xl font-heading font-bold text-primary"
                >
                  {leads}
                </motion.p>
                <p className="text-xs text-text-muted mt-1">Leads estimados</p>
              </div>
              <div className="border border-border p-4 text-center">
                <motion.p
                  key={clients}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-2xl font-heading font-bold text-primary"
                >
                  {clients}
                </motion.p>
                <p className="text-xs text-text-muted mt-1">Clientes nuevos</p>
              </div>
              <div className="border border-accent p-4 text-center bg-accent-light">
                <motion.p
                  key={roi}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-2xl font-heading font-bold text-accent"
                >
                  {roi}%
                </motion.p>
                <p className="text-xs text-accent/70 mt-1">ROI estimado</p>
              </div>
            </div>

            {/* Visual bar */}
            <div>
              <div className="flex justify-between text-xs text-text-muted mb-2">
                <span>Inversion</span>
                <span>Revenue</span>
              </div>
              <div className="relative h-3 bg-border">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-primary/30"
                  animate={{ width: `${Math.min((investment / revenue) * 100, 100)}%` }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div
                  className="absolute inset-y-0 left-0 bg-accent"
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.5 }}
                  style={{ opacity: 0.2 }}
                />
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-accent-light border border-accent/20">
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">Proyeccion</p>
            <p className="text-sm text-primary">
              {roi > 200
                ? `Con una inversion de $${investment.toLocaleString()} mensuales en ${m.label.toLowerCase()}, el retorno estimado es de ${roi}%. Una estrategia bien ejecutada puede multiplicar esta inversion significativamente.`
                : roi > 50
                  ? `La inversion de $${investment.toLocaleString()} en ${m.label.toLowerCase()} genera un ROI estimado del ${roi}%. Optimizar la tasa de conversion puede mejorar estos resultados.`
                  : `Para ${m.label.toLowerCase()}, una inversion de $${investment.toLocaleString()} genera un retorno conservador. Aumentar el presupuesto o mejorar la conversion puede amplificar los resultados.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
