import React from 'react'

export default function Footer(){
  return (
    <footer className="py-8 bg-gray-100">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-semibold text-auraRed">Aura Frozen Coconut</div>
        <div className="text-sm text-gray-600">© Aura Frozen Coconut</div>
        <div className="flex gap-4">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  )
}
