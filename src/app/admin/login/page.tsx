'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleLogin = async () => {
    if (password === 'admin') {
      await fetch('/api/login', { method: 'POST' })
      router.push('/admin')
    } else {
      alert('Verkeerd wachtwoord')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-6 border rounded w-80 space-y-4">
        <h1 className="text-xl font-bold">Admin login</h1>

        <input
          type="password"
          placeholder="Wachtwoord"
          className="border p-2 w-full"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="bg-black text-white px-4 py-2 w-full"
        >
          Inloggen
        </button>
      </div>
    </div>
  )
}
