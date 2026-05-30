import { useState } from 'react';
import { Mail, Check, AlertCircle } from 'lucide-react';
import { trackFormSubmit } from '../services/ga4Events';

const SUPABASE_URL = 'https://buendqgmwpxdixwvlkhd.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1ZW5kcWdtd3B4ZGl4d3Zsa2hkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjczNjEzNzUsImV4cCI6MjA4MjkzNzM3NX0.oKSivOi-JhHZhM9Cp8W-uofbK_-I7slOPgTWtWLpysI';
const SUPABASE_FUNCTION_URL = `${SUPABASE_URL}/functions/v1/send-welcome-email`;

const BUSINESS_TYPES = [
  'Restaurant',
  'Bar',
  'Café/Cafetería',
  'Takeout',
  'Food Truck',
  'Comida Rápida',
  'Pizzería',
  'Panadería',
  'Pastelería',
  'Otro'
];

export function SignupForm() {
  const [formData, setFormData] = useState({
    email: '',
    first_name: '',
    last_name: '',
    company: '',
    business_type: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      if (!formData.business_type) {
        setStatus('error');
        setErrorMsg('Por favor selecciona un tipo de negocio');
        return;
      }

      // Insert into Supabase
      const insertResponse = await fetch(`${SUPABASE_URL}/rest/v1/landing_signups`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${SUPABASE_KEY}`,
          'apikey': SUPABASE_KEY
        },
        body: JSON.stringify({
          email: formData.email,
          first_name: formData.first_name,
          last_name: formData.last_name,
          company: formData.company,
          business_type: formData.business_type
        })
      });

      if (!insertResponse.ok) {
        const error = await insertResponse.json();
        throw new Error(error.message || 'Error al registrar');
      }

      // Trigger welcome email
      const emailResponse = await fetch(`${SUPABASE_URL}/functions/v1/send-welcome-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${SUPABASE_KEY}`
        },
        body: JSON.stringify({
          email: formData.email,
          first_name: formData.first_name
        })
      });

      if (!emailResponse.ok) {
        console.warn('Email envío fallido, pero registro fue exitoso');
      }

      setStatus('success');
      trackFormSubmit('demo_request_form');
      setFormData({ email: '', first_name: '', last_name: '', company: '', business_type: '' });

      // Reset after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setErrorMsg(error instanceof Error ? error.message : 'Algo salió mal');
    }
  };

  return (
    <section className="py-8 px-6 bg-gradient-to-b from-primary to-primary/90 overflow-hidden relative">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="font-display text-2xl md:text-3xl text-white mb-2 drop-shadow-md">
            Solicita tu demo gratuita
          </h2>
          <p className="text-white/80 text-sm md:text-base">
            Acceso instantáneo + email de bienvenida con todo lo que necesitas.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 shadow-2xl max-w-lg mx-auto">
          <div className="space-y-2 mb-4">
            <input
              type="email"
              name="email"
              placeholder="Tu email *"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-outline-variant rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary text-on-surface"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <input
                type="text"
                name="first_name"
                placeholder="Nombre *"
                required
                value={formData.first_name}
                onChange={handleChange}
                className="px-3 py-2 border border-outline-variant rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary text-on-surface"
              />
              <input
                type="text"
                name="last_name"
                placeholder="Apellido *"
                required
                value={formData.last_name}
                onChange={handleChange}
                className="px-3 py-2 border border-outline-variant rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary text-on-surface"
              />
            </div>
            <select
              name="business_type"
              value={formData.business_type}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-outline-variant rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary text-on-surface bg-white"
            >
              <option value="">Tipo de negocio *</option>
              {BUSINESS_TYPES.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-primary text-white px-4 py-2.5 rounded font-semibold text-sm shadow-lg hover:shadow-xl active:scale-95 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {status === 'loading' && <span className="animate-spin">⏳</span>}
            {status === 'success' && <Check className="w-5 h-5" />}
            {status === 'success' ? '¡Registrado!' : 'Solicitar Demo'}
          </button>

          {status === 'success' && (
            <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded flex gap-2 text-sm">
              <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-green-900">¡Gracias!</p>
                <p className="text-xs text-green-800">Revisa tu email en los próximos minutos.</p>
              </div>
            </div>
          )}

          {status === 'error' && (
            <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded flex gap-2 text-sm">
              <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-red-900">Error</p>
                <p className="text-xs text-red-800">{errorMsg}</p>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
