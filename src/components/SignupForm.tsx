import { useState } from 'react';
import { Mail, Check, AlertCircle } from 'lucide-react';

const SUPABASE_URL = 'https://buendqgmwpxdixwvlkhd.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1ZW5kcWdtd3B4ZGl4d3Zsa2hkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjczNjEzNzUsImV4cCI6MjA4MjkzNzM3NX0.oKSivOi-JhHZhM9Cp8W-uofbK_-I7slOPgTWtWLpysI';
const SUPABASE_FUNCTION_URL = `${SUPABASE_URL}/functions/v1/send-welcome-email`;

export function SignupForm() {
  const [formData, setFormData] = useState({
    email: '',
    first_name: '',
    last_name: '',
    company: ''
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
          company: formData.company
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
      setFormData({ email: '', first_name: '', last_name: '', company: '' });

      // Reset after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setErrorMsg(error instanceof Error ? error.message : 'Algo salió mal');
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-primary to-primary/90 overflow-hidden relative">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl text-white mb-4 drop-shadow-md">
            Solicita tu demo gratuita
          </h2>
          <p className="text-white/80 text-lg">
            Recibe acceso instantáneo a la plataforma + tu email de bienvenida con todo lo que necesitas saber.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="email"
              name="email"
              placeholder="Tu email *"
              required
              value={formData.email}
              onChange={handleChange}
              className="px-4 py-3 border border-outline-variant rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-on-surface"
            />
            <input
              type="text"
              name="first_name"
              placeholder="Nombre *"
              required
              value={formData.first_name}
              onChange={handleChange}
              className="px-4 py-3 border border-outline-variant rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-on-surface"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <input
              type="text"
              name="last_name"
              placeholder="Apellido *"
              required
              value={formData.last_name}
              onChange={handleChange}
              className="px-4 py-3 border border-outline-variant rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-on-surface"
            />
            <input
              type="text"
              name="company"
              placeholder="Empresa (opcional)"
              value={formData.company}
              onChange={handleChange}
              className="px-4 py-3 border border-outline-variant rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-on-surface"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-primary text-white px-6 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl active:scale-95 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {status === 'loading' && <span className="animate-spin">⏳</span>}
            {status === 'success' && <Check className="w-5 h-5" />}
            {status === 'success' ? '¡Registrado!' : 'Solicitar Demo'}
          </button>

          {status === 'success' && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg flex gap-3">
              <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-green-900">¡Gracias!</p>
                <p className="text-sm text-green-800">Revisa tu email en los próximos minutos para tu guía de bienvenida.</p>
              </div>
            </div>
          )}

          {status === 'error' && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-red-900">Error</p>
                <p className="text-sm text-red-800">{errorMsg}</p>
              </div>
            </div>
          )}

          <p className="text-xs text-on-surface-variant text-center mt-4">
            Nunca compartimos tu información. Mira nuestra <a href="#" className="underline hover:text-primary">política de privacidad</a>.
          </p>
        </form>
      </div>
    </section>
  );
}
