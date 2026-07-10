"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Industry = {
  cpl: number;
  closeRate: number; // % de leads que se vuelven cliente
  avgTicket: number; // valor de una compra
  freq: number; // compras por año
  years: number; // años de relación
  label: string;
};

const INDUSTRIES: Record<string, Industry> = {
  services: { cpl: 350, closeRate: 20, avgTicket: 25000, freq: 1, years: 3, label: "Servicios Profesionales" },
  ecommerce: { cpl: 180, closeRate: 3, avgTicket: 1200, freq: 4, years: 3, label: "E-commerce / Retail" },
  manufacturing: { cpl: 500, closeRate: 15, avgTicket: 80000, freq: 1, years: 5, label: "Manufactura / Industrial" },
  healthcare: { cpl: 400, closeRate: 12, avgTicket: 15000, freq: 2, years: 4, label: "Salud" },
  finance: { cpl: 450, closeRate: 18, avgTicket: 50000, freq: 1, years: 5, label: "Financiero" },
};

const money = (n: number) => "$" + Math.round(n).toLocaleString();

export function ROICalculator() {
  const [industry, setIndustry] = useState("services");
  const [adBudget, setAdBudget] = useState(30000);
  const [agencyCost, setAgencyCost] = useState(15000);
  const [avgTicket, setAvgTicket] = useState(INDUSTRIES.services.avgTicket);
  const [freq, setFreq] = useState(INDUSTRIES.services.freq);
  const [years, setYears] = useState(INDUSTRIES.services.years);

  const applyIndustry = (key: string) => {
    const m = INDUSTRIES[key];
    setIndustry(key);
    setAvgTicket(m.avgTicket);
    setFreq(m.freq);
    setYears(m.years);
  };

  const m = INDUSTRIES[industry];
  const leads = Math.max(1, Math.round(adBudget / m.cpl));
  const clients = Math.max(1, Math.round(leads * (m.closeRate / 100)));
  const acqInvest = adBudget + agencyCost;
  const cac = acqInvest / clients;
  const cltv = avgTicket * freq * years;
  const ratio = cltv / cac;
  const roas = (clients * avgTicket) / adBudget;

  const health =
    ratio < 1
      ? { label: "En pérdida", color: "#c0392b", note: "Gastas más en adquirir de lo que el cliente deja. Insostenible." }
      : ratio < 3
        ? { label: "Por mejorar", color: "#b7791f", note: "Rentable, pero debajo de la regla sana de 3:1. Hay margen." }
        : { label: "Saludable", color: "#6aae3a", note: "Cada cliente vale al menos 3 veces lo que cuesta adquirirlo." };

  return (
    <div className="bg-surface border border-border p-8">
      <h3 className="text-lg font-semibold text-primary mb-1">Adquisición de clientes: CAC vs CLTV</h3>
      <p className="text-sm text-text-muted mb-2">
        Cuánto te cuesta adquirir un cliente (publicidad más agencia, sin el costo de tu producto) contra cuánto deja ese cliente con el tiempo.
      </p>
      <p className="text-xs text-text-muted/60 italic mb-8">
        * Los parámetros por industria son referencias editables. Ajústalos a tus números reales.
      </p>

      <div className="grid gap-10 md:grid-cols-2">
        {/* Controles */}
        <div className="space-y-6">
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-primary mb-3 block">Industria</label>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(INDUSTRIES).map(([key, val]) => (
                <button
                  key={key}
                  onClick={() => applyIndustry(key)}
                  className={`px-3 py-2.5 text-xs text-left border transition-all ${
                    industry === key
                      ? "bg-primary text-white border-primary"
                      : "bg-surface text-primary border-border hover:border-primary"
                  }`}
                >
                  {val.label}
                </button>
              ))}
            </div>
          </div>

          <SliderRow label="Inversión en publicidad / mes" value={adBudget} setValue={setAdBudget} min={5000} max={100000} step={1000} />
          <SliderRow label="Costo de agencia o consultoría / mes" value={agencyCost} setValue={setAgencyCost} min={0} max={80000} step={1000} />

          <div className="p-4 bg-accent-light border border-accent/20">
            <p className="text-xs text-text-muted uppercase tracking-wider mb-3">Valor del cliente (edítalo)</p>
            <div className="grid grid-cols-3 gap-3">
              <NumberField label="Ticket promedio" prefix="$" value={avgTicket} setValue={setAvgTicket} step={500} />
              <NumberField label="Compras / año" value={freq} setValue={setFreq} step={1} min={1} />
              <NumberField label="Años de relación" value={years} setValue={setYears} step={1} min={1} />
            </div>
          </div>
        </div>

        {/* Resultados */}
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-4">
            <MetricCard label="CAC · costo por cliente" value={money(cac)} hint="(Publicidad + agencia) ÷ clientes" />
            <MetricCard label="CLTV · valor de vida" value={money(cltv)} hint="Ticket × compras/año × años" />
          </div>

          <div className="border-2 p-5 text-center" style={{ borderColor: health.color }}>
            <p className="text-xs text-text-muted uppercase tracking-wider mb-1">Relación CLTV : CAC</p>
            <motion.p
              key={ratio.toFixed(1)}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="font-heading text-4xl font-bold text-primary"
            >
              {ratio.toFixed(1)} : 1
            </motion.p>
            <p className="mt-1 text-sm font-semibold" style={{ color: health.color }}>{health.label}</p>
            <p className="mt-1 text-xs text-text-muted leading-relaxed">{health.note}</p>
          </div>

          <div className="border border-border bg-primary/[0.03] p-4">
            <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">De dónde salen los números</p>
            <ul className="space-y-1.5 text-xs text-text-muted">
              <li>Leads = publicidad ÷ CPL = {money(adBudget)} ÷ {money(m.cpl)} = <b className="text-primary">{leads}</b> / mes</li>
              <li>Clientes = leads × cierre ({m.closeRate}%) = <b className="text-primary">{clients}</b> / mes</li>
              <li>CAC = (publicidad + agencia) ÷ clientes = {money(acqInvest)} ÷ {clients} = <b className="text-primary">{money(cac)}</b></li>
              <li>CLTV = ticket × compras/año × años = {money(avgTicket)} × {freq} × {years} = <b className="text-primary">{money(cltv)}</b></li>
              <li>ROAS 1ª compra = {money(clients * avgTicket)} ÷ {money(adBudget)} = <b className="text-primary">{roas.toFixed(1)}x</b></li>
            </ul>
            <p className="mt-3 text-[11px] text-text-muted/70 leading-relaxed">
              El CAC no incluye el costo de tu producto o servicio (COGS); solo lo que inviertes en atraer y convertir. La regla sana: el CLTV debe valer al menos 3 veces el CAC.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SliderRow({
  label,
  value,
  setValue,
  min,
  max,
  step,
}: {
  label: string;
  value: number;
  setValue: (n: number) => void;
  min: number;
  max: number;
  step: number;
}) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <label className="text-xs font-semibold uppercase tracking-wider text-primary">{label}</label>
        <span className="text-sm font-bold text-primary">{money(value)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full h-1.5 bg-border rounded-none appearance-none cursor-pointer accent-primary"
      />
      <div className="flex justify-between text-xs text-text-muted mt-1">
        <span>{money(min)}</span>
        <span>{money(max)}</span>
      </div>
    </div>
  );
}

function NumberField({
  label,
  value,
  setValue,
  step,
  min = 0,
  prefix = "",
}: {
  label: string;
  value: number;
  setValue: (n: number) => void;
  step: number;
  min?: number;
  prefix?: string;
}) {
  return (
    <div>
      <div className="flex items-center border border-border bg-surface">
        {prefix && <span className="pl-2 text-xs text-text-muted">{prefix}</span>}
        <input
          type="number"
          value={value}
          min={min}
          step={step}
          onChange={(e) => setValue(Math.max(min, Number(e.target.value) || 0))}
          className="w-full px-2 py-2 text-sm font-bold text-primary bg-transparent outline-none [appearance:textfield]"
        />
      </div>
      <p className="text-[10px] text-text-muted mt-1">{label}</p>
    </div>
  );
}

function MetricCard({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <div className="border border-border p-4">
      <p className="text-xs text-text-muted uppercase tracking-wider mb-1">{label}</p>
      <motion.p
        key={value}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="font-heading text-2xl font-bold text-primary"
      >
        {value}
      </motion.p>
      <p className="text-[10px] text-text-muted mt-1">{hint}</p>
    </div>
  );
}
