'use client'

import { useState, useEffect } from 'react'
export const dynamic = 'force-dynamic'
export const runtime = 'edge'

// Card data - you can customize these messages
const CARDS = [
  {
    id: 1,
    title: 'Our second valentine\'s Day',
    content: 'Every moment with you feels like a dream come true. Your smile lights up my darkest days, and your laughter is my favorite melody. You make everything better just by being you.'
  }
]

// Photo album data - replace these with your actual photo URLs
const PHOTOS = [
  { id: 1, url: '/1.jpeg', caption: '🌹' },
  { id: 2, url: '/2.jpeg', caption: '🌹' },
  { id: 3, url: '/3.jpeg', caption: '🌹' },
  { id: 4, url: '/4.jpeg', caption: '🌹' },
  { id: 5, url: '/5.jpeg', caption: '🌹' },
  { id: 6, url: '/6.jpeg', caption: '🌹' },
]

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [isValentine, setIsValentine] = useState(false)
  const [expandedCard, setExpandedCard] = useState<number | null>(null)
  const [showAlbum, setShowAlbum] = useState(false)
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
  setMounted(true)
}, [])


  useEffect(() => {
    // Create floating petals
    const createPetal = () => {
      const petal = document.createElement('div')
      petal.className = 'petal'
      petal.style.left = Math.random() * 100 + 'vw'
      petal.style.animationDuration = (Math.random() * 4 + 6) + 's'
      petal.style.animationDelay = Math.random() * 3 + 's'
      petal.style.width = (Math.random() * 8 + 6) + 'px'
      petal.style.height = petal.style.width
      petal.style.animation = `petalFall ${petal.style.animationDuration} linear infinite`
      document.body.appendChild(petal)

      setTimeout(() => petal.remove(), 12000)
    }

    const petalInterval = setInterval(createPetal, 800)

    return () => clearInterval(petalInterval)
  }, [])

  useEffect(() => {
    // Calculate initial state on client side only
    const targetDate = Date.UTC(2026, 1, 14, 0, 0, 0) // Feb 14, 2026, 00:00 UTC
    const now = new Date().getTime()
    const difference = targetDate - now

    // Check immediately if it's already Valentine's Day
    if (difference <= 0) {
      setIsValentine(true)
    }

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference <= 0) {
        setIsValentine(true)
        clearInterval(interval)
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  if (!mounted) {
    // Show nothing during SSR/build - only render on client
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-pulse text-valentine-deep">Loading...</div>
        </div>
      </main>
    )
  }

  if (!isValentine) {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      
      {/* ============================================ */}
      {/* BACKGROUND IMAGE LAYER - 15% opacity */}
      {/* ============================================ */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://png.pngtree.com/background/20250103/original/pngtree-valentines-day-background-with-red-and-pink-rose-flowers-valentine-s-picture-image_15824242.jpg)',
          // 👆 CHANGE THIS: Replace with your own image URL or '/images/yourphoto.jpg'
          
          backgroundSize: 'cover',     // Makes image cover entire area
          backgroundPosition: 'center', // Centers the image
          opacity: 0.35                // 👈 CHANGE THIS: 0.1 = subtle, 0.3 = visible
        }}
      ></div>
      
      {/* ============================================ */}
      {/* GRADIENT OVERLAY - Helps text stand out */}
      {/* ============================================ */}
      <div className="absolute inset-0 bg-gradient-to-b from-valentine-cream/50 via-transparent to-valentine-petal/50 z-0"></div>
      {/* 👆 OPTIONAL: Remove this line if you don't want the gradient */}
      
      {/* ============================================ */}
      {/* COUNTDOWN CONTENT - Always on top (z-10) */}
      {/* ============================================ */}
      <div className="text-center space-y-8 animate-fade-in relative z-10">
        <h1 className="font-display text-5xl md:text-7xl text-valentine-deep mb-4 italic">
          Counting Down to Love
        </h1>
        <p className="font-body text-xl md:text-2xl text-valentine-deep/80 italic">
          Something special is waiting for you...
        </p>
        
        <div className="flex gap-4 md:gap-8 justify-center mt-12">
          {Object.entries(timeLeft).map(([unit, value], index) => (
            <div 
              key={unit}
              className="countdown-glow bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg min-w-[100px] md:min-w-[120px]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="font-display text-4xl md:text-6xl text-valentine-deep font-bold">
                {String(value).padStart(2, '0')}
              </div>
              <div className="font-body text-sm md:text-base text-valentine-deep/70 mt-2 capitalize">
                {unit}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

  return (
    <main className="min-h-screen p-4 md:p-8 relative">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://png.pngtree.com/background/20250103/original/pngtree-valentines-day-background-with-red-and-pink-rose-flowers-valentine-s-picture-image_15824242.jpg)',
          // 👆 CHANGE THIS: Replace with your own image URL or '/images/yourphoto.jpg'
          
          backgroundSize: 'cover',     // Makes image cover entire area
          backgroundPosition: 'center', // Centers the image
          opacity: 0.35                // 👈 CHANGE THIS: 0.1 = subtle, 0.3 = visible
        }}
      ></div>
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Header */}
        <header className="text-center space-y-4 animate-slide-up py-8">
          <h1 className="font-display text-5xl md:text-7xl text-valentine-deep italic">
            Happy Valentine's Day
          </h1>
          <p className="font-body text-xl md:text-2xl text-valentine-deep/80 italic">
            To the most wonderful person in my life
          </p>
        </header>

        {/* Main Content: Flowers Left, Album Right */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          
          {/* LEFT SIDE - Bouquet of Flowers */}
          <div className="flex flex-col items-center space-y-6">
            <h2 className="font-display text-3xl md:text-4xl text-valentine-deep text-center mb-16 italic">
              Love Letters
            </h2>
            <div className="relative w-full max-w-md aspect-square">
              {/* Bouquet Container */}
              <div className="absolute inset-0 flex items-end justify-center pb-8">
                <div className="relative w-full h-full flex items-end justify-center">
                  {/* Vase */}
                  
                  {/* Flowers arranged in bouquet */}
                  {CARDS.map((card, index) => {
                    const positions = [
                      { bottom: '0%', left: '5%', rotate: '-0deg', delay: '0s' },
                    ]
                    const pos = positions[index]
                    
                    return (
                      <button
                        key={card.id}
                        onClick={() => setExpandedCard(card.id)}
                        className="absolute cursor-pointer transition-all duration-300 hover:scale-125 hover:z-20 animate-float z-10"
                        style={{
                          ...pos,
                          animationDelay: pos.delay,
                          transform: `rotate(${pos.rotate})`,
                        }}
                      >
                        <img 
                          src="/gift.png" 
                          alt="Rose"
                          className="w-50 h-50 md:w-50 md:h-50 filter drop-shadow-lg"
                        />
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Photo Album */}
          <div className="flex flex-col items-center space-y-6">
            <h2 className="font-display text-3xl md:text-4xl text-valentine-deep text-center mb-0 italic">
              Our Memories
            </h2>
            <div className="relative w-full max-w-md">
              {/* Album Cover */}
              <button
                onClick={() => setShowAlbum(true)}
                className="absolute cursor-pointer transition-all duration-300 hover:scale-125 hover:z-20 animate-float z-10"
              >
                <img 
                  src="/album.png" 
                  alt="Rose"
                  className="w-50 h-50 md:w-50 md:h-50 filter drop-shadow-lg"
                />
              </button>
              
            </div>
          </div>
        </div>

        {/* Card Modal - Pops up when flower is clicked */}
        {expandedCard !== null && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setExpandedCard(null)}
          >
            {/* Fireworks Container */}
            <div className="fireworks-container">
              <div className="firework" style={{ left: '20%', animationDelay: '0s' }}></div>
              <div className="firework" style={{ left: '40%', animationDelay: '0.5s' }}></div>
              <div className="firework" style={{ left: '60%', animationDelay: '1s' }}></div>
              <div className="firework" style={{ left: '80%', animationDelay: '1.5s' }}></div>
              <div className="firework" style={{ left: '30%', animationDelay: '0.75s' }}></div>
              <div className="firework" style={{ left: '70%', animationDelay: '1.25s' }}></div>
            </div>

            <div 
              className=" backdrop-blur-sm rounded-3xl p-8 md:p-12 max-w-2xl w-full shadow-2xl border-4 border-valentine-rose/30 animate-slide-up relative"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setExpandedCard(null)}
                className="absolute top-4 right-4 text-valentine-deep hover:text-valentine-rose text-3xl transition-colors z-10"
              >
                ✕
              </button>
              
              <div className="text-center mb-6">
                {/* Rose Image with Glow Effect */}
                <div className="relative inline-block mb-4">
                  <div className="absolute inset-0 bg-valentine-rose/30 blur-2xl rounded-full animate-pulse"></div>
                  <img 
                    src="/rose.png" 
                    alt="Rose"
                    className="w-40 h-40 md:w-40 md:h-40 mx-auto relative z-10 animate-float filter drop-shadow-2xl"
                  />
                </div>
                
                <h2 className="font-display text-3xl md:text-2xl text-valentine-deep mb-4 italic">
                  {CARDS.find(c => c.id === expandedCard)?.title}
                </h2>
              </div> 
            </div>
          </div>
        )}

        {/* Photo Album Book Modal */}
        {showAlbum && (
          <div
            className="fixed inset-0 bg-valentine-rose/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setShowAlbum(false)}
          >
            <div className="relative max-w-6xl w-full h-[80vh] animate-slide-up" onClick={e => e.stopPropagation()}>
              {/* Close button */}
              <button
                onClick={() => setShowAlbum(false)}
                className="absolute -top-12 right-0 text-white text-2xl hover:text-valentine-rose transition-colors z-10"
              >
                ✕
              </button>

              {/* Book-style album */}
              <div className="relative w-full h-full bg-valentine-cream rounded-2xl shadow-2xl overflow-hidden">
                {/* Book spine in center */}
                <div className="absolute left-1/2 top-0 bottom-0 w-8 -ml-4 bg-gradient-to-r from-valentine-deep/20 via-valentine-deep/40 to-valentine-deep/20 z-10"></div>
                
                <div className="grid grid-cols-2 h-full">
                  {/* Left page */}
                  <div className="p-8 md:p-12 overflow-y-auto">
                    <h3 className="font-display text-3xl text-valentine-deep mb-6 text-center">Journey And</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {PHOTOS.slice(0, 3).map((photo, index) => (
                        <div
                          key={photo.id}
                          className="cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:scale-105"
                          onClick={() => setSelectedPhoto(photo.id)}
                        >
                          <img
                            src={photo.url}
                            alt={photo.caption}
                            className="w-full aspect-[4/3] object-cover"
                          />
                          <div className="bg-white p-3">
                            <p className="font-body text-valentine-deep text-center italic">{photo.caption}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right page */}
                  <div className="p-8 md:p-12 overflow-y-auto border-l-2 border-valentine-rose/10">
                    <h3 className="font-display text-3xl text-valentine-deep mb-6 text-center">More Memories</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {PHOTOS.slice(3, 6).map((photo, index) => (
                        <div
                          key={photo.id}
                          className="cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:scale-105"
                          onClick={() => setSelectedPhoto(photo.id)}
                        >
                          <img
                            src={photo.url}
                            alt={photo.caption}
                            className="w-full aspect-[4/3] object-cover"
                          />
                          <div className="bg-white p-3">
                            <p className="font-body text-valentine-deep text-center italic">{photo.caption}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Page decoration */}
                <div className="absolute top-4 left-4 text-valentine-deep/20 font-body text-sm">Page 1</div>
                <div className="absolute top-4 right-4 text-valentine-deep/20 font-body text-sm">Page 2</div>
              </div>
            </div>
          </div>
        )}

        {/* Photo Zoom Modal */}
        {selectedPhoto !== null && (
          <div
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[60] flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedPhoto(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh] animate-slide-up" onClick={e => e.stopPropagation()}>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute -top-12 right-0 text-white text-4xl hover:text-valentine-rose transition-colors"
              >
                ✕
              </button>
              <img
                src={PHOTOS.find(p => p.id === selectedPhoto)?.url}
                alt={PHOTOS.find(p => p.id === selectedPhoto)?.caption}
                className="rounded-2xl shadow-2xl max-h-[80vh] w-auto mx-auto"
              />
              <p className="font-body text-white text-center text-xl mt-4">
                {PHOTOS.find(p => p.id === selectedPhoto)?.caption}
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
