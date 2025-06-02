'use client';

// import { useAuth } from '@/context/AuthContext';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function PanelPage() {
  //   const { user } = useAuth();
  const router = useRouter();

  //   useEffect(() => {
  //     if (!user) {
  //       router.push('/login');
  //     }
  //   }, [user, router]);

  //   if (!user) return null;

  return (
    <div className="max-w-3xl mx-auto p-6 mt-20">
      <h1 className="text-3xl font-bold mb-6">Panel de Usuario</h1>
      <p className="text-lg">¡Bienvenido, {}!</p>
      {/* Acá podés agregar más contenido del panel */}
    </div>
  );
}
