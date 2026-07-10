"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Customer = {
  id: number;
  name: string;
  lastPurchase: string;
  frequency: number;
  totalSpent: number;
  rScore: number;
  fScore: number;
  mScore: number;
  segment: string;
};

const sampleData: Customer[] = [
  { id: 1, name: "Empresa Alpha", lastPurchase: "Hace 5 días", frequency: 12, totalSpent: 185000, rScore: 5, fScore: 5, mScore: 5, segment: "Champions" },
  { id: 2, name: "Corp Beta", lastPurchase: "Hace 10 días", frequency: 8, totalSpent: 120000, rScore: 4, fScore: 4, mScore: 4, segment: "Loyal" },
  { id: 3, name: "Grupo Gamma", lastPurchase: "Hace 3 días", frequency: 2, totalSpent: 95000, rScore: 5, fScore: 2, mScore: 3, segment: "New Customers" },
  { id: 4, name: "Delta SA", lastPurchase: "Hace 45 días", frequency: 15, totalSpent: 220000, rScore: 2, fScore: 5, mScore: 5, segment: "At Risk" },
  { id: 5, name: "Epsilon Inc", lastPurchase: "Hace 90 días", frequency: 3, totalSpent: 45000, rScore: 1, fScore: 2, mScore: 2, segment: "Hibernating" },
  { id: 6, name: "Zeta Corp", lastPurchase: "Hace 7 días", frequency: 10, totalSpent: 160000, rScore: 5, fScore: 4, mScore: 5, segment: "Champions" },
  { id: 7, name: "Eta Group", lastPurchase: "Hace 30 días", frequency: 6, totalSpent: 80000, rScore: 3, fScore: 3, mScore: 3, segment: "Need Attention" },
  { id: 8, name: "Theta Ltd", lastPurchase: "Hace 60 días", frequency: 1, totalSpent: 25000, rScore: 1, fScore: 1, mScore: 1, segment: "Lost" },
  { id: 9, name: "Iota SA", lastPurchase: "Hace 15 días", frequency: 7, totalSpent: 110000, rScore: 4, fScore: 3, mScore: 4, segment: "Potential Loyal" },
  { id: 10, name: "Kappa Inc", lastPurchase: "Hace 2 días", frequency: 4, totalSpent: 72000, rScore: 5, fScore: 3, mScore: 3, segment: "Promising" },
];

const segmentColors: Record<string, string> = {
  Champions: "bg-accent text-primary",
  Loyal: "bg-accent/80 text-primary",
  "Potential Loyal": "bg-accent/60 text-primary",
  "New Customers": "bg-blue-400 text-white",
  Promising: "bg-blue-300 text-navy",
  "Need Attention": "bg-yellow-400 text-navy",
  "At Risk": "bg-orange-500 text-white",
  Hibernating: "bg-red-300 text-navy",
  Lost: "bg-red-600 text-white",
};

export function RFMDemo() {
  const [segmented, setSegmented] = useState(false);
  const [filter, setFilter] = useState<string | null>(null);

  const segments = [...new Set(sampleData.map((d) => d.segment))];
  const filtered = filter ? sampleData.filter((d) => d.segment === filter) : sampleData;

  const segmentCounts = segments.map((s) => ({
    segment: s,
    count: sampleData.filter((d) => d.segment === s).length,
  }));

  return (
    <div className="bg-surface border border-border p-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h3 className="text-lg font-semibold text-primary mb-1">Segmentación RFM en Vivo</h3>
          <p className="text-sm text-text-muted">Recencia, Frecuencia y Valor Monetario de tus clientes.</p>
        </div>
        <button
          onClick={() => { setSegmented(!segmented); setFilter(null); }}
          className={`btn text-xs py-2.5 px-5 ${segmented ? "btn-outline" : "btn-primary"}`}
        >
          {segmented ? "Ver Datos Crudos" : "Segmentar con IA"}
        </button>
      </div>

      {/* Segment filters */}
      {segmented && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap gap-2 mb-6"
        >
          <button
            onClick={() => setFilter(null)}
            className={`px-3 py-1.5 text-xs font-semibold border transition-all ${
              !filter ? "bg-primary text-white border-primary" : "bg-surface text-primary border-border"
            }`}
          >
            Todos ({sampleData.length})
          </button>
          {segmentCounts.map((sc) => (
            <button
              key={sc.segment}
              onClick={() => setFilter(sc.segment)}
              className={`px-3 py-1.5 text-xs font-semibold border transition-all ${
                filter === sc.segment ? "bg-primary text-white border-primary" : "bg-surface text-primary border-border"
              }`}
            >
              {sc.segment} ({sc.count})
            </button>
          ))}
        </motion.div>
      )}

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-2 text-xs font-semibold uppercase tracking-wider text-text-muted">Cliente</th>
              <th className="text-left py-3 px-2 text-xs font-semibold uppercase tracking-wider text-text-muted">Última Compra</th>
              <th className="text-center py-3 px-2 text-xs font-semibold uppercase tracking-wider text-text-muted">Frecuencia</th>
              <th className="text-right py-3 px-2 text-xs font-semibold uppercase tracking-wider text-text-muted">Total $</th>
              {segmented && (
                <>
                  <th className="text-center py-3 px-2 text-xs font-semibold uppercase tracking-wider text-text-muted">R-F-M</th>
                  <th className="text-left py-3 px-2 text-xs font-semibold uppercase tracking-wider text-text-muted">Segmento</th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            <AnimatePresence mode="popLayout">
              {filtered.map((row) => (
                <motion.tr
                  key={row.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="border-b border-border/50 hover:bg-accent-light/30 transition-colors"
                >
                  <td className="py-3 px-2 font-semibold text-primary">{row.name}</td>
                  <td className="py-3 px-2 text-text-muted">{row.lastPurchase}</td>
                  <td className="py-3 px-2 text-center">{row.frequency}x</td>
                  <td className="py-3 px-2 text-right font-semibold">${row.totalSpent.toLocaleString()}</td>
                  {segmented && (
                    <>
                      <td className="py-3 px-2 text-center">
                        <span className="font-mono text-xs">{row.rScore}-{row.fScore}-{row.mScore}</span>
                      </td>
                      <td className="py-3 px-2">
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className={`inline-block px-2.5 py-1 text-xs font-semibold ${segmentColors[row.segment] || "bg-border text-primary"}`}
                        >
                          {row.segment}
                        </motion.span>
                      </td>
                    </>
                  )}
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>

      {segmented && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 p-4 bg-accent-light border border-accent/20"
        >
          <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Acción recomendada</p>
          <p className="text-sm text-primary">
            {filter === "Champions" && "Recompensa y programas de referidos. Son tus mejores clientes, haz que traigan más."}
            {filter === "At Risk" && "Campaña de reactivación urgente. Eran clientes valiosos que están dejando de comprar."}
            {filter === "Lost" && "Campaña de recuperación con oferta especial. Analiza por qué se fueron."}
            {filter === "New Customers" && "Programa de onboarding. Convierte la primera compra en hábito."}
            {!filter && "Haz clic en un segmento para ver la acción recomendada para cada grupo."}
            {filter && !["Champions", "At Risk", "Lost", "New Customers"].includes(filter) && `Estrategia personalizada para el segmento "${filter}" basada en su comportamiento de compra.`}
          </p>
        </motion.div>
      )}
    </div>
  );
}
