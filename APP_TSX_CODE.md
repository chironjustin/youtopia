# src/app/App.tsx - Complete Code

Copy this EXACT code into `src/app/App.tsx`:

```typescript
import { useState, useEffect } from 'react';

export default function App() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isFolderOpen, setIsFolderOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [showError, setShowError] = useState(false);
  const [showFolderPopup, setShowFolderPopup] = useState(false);
  const [folderPassword, setFolderPassword] = useState('');
  const [isFolderAuthenticated, setIsFolderAuthenticated] = useState(false);
  const [showFolderError, setShowFolderError] = useState(false);
  const [showSecondFolderPopup, setShowSecondFolderPopup] = useState(false);
  const [secondFolderPassword, setSecondFolderPassword] = useState('');
  const [isSecondFolderAuthenticated, setIsSecondFolderAuthenticated] = useState(false);
  const [showSecondFolderError, setShowSecondFolderError] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Countdown timer effect
  useEffect(() => {
    const targetDate = new Date('2026-03-09T22:30:00+01:00'); // CET is UTC+1
    let interval: ReturnType<typeof setInterval>;
    
    const updateTimer = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        // Keep timer at zero once countdown is complete
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
      }
    };
    
    updateTimer();
    interval = setInterval(updateTimer, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const galleryImages = [
    'https://images.unsplash.com/photo-1764037047349-d83e6c181ae7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxteXN0ZXJpb3VzJTIwZGFyayUyMG9jY3VsdHxlbnwxfHx8fDE3NzExOTM5NjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1763198217184-54225eee9851?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxteXN0aWNhbCUyMHN5bWJvbHMlMjBldGhlcmVhbHxlbnwxfHx8fDE3NzExOTM5NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1532191568455-f90e2806b900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhcmslMjBtaW5pbWFsfGVufDF8fHx8MTc3MTE5Mzk2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/flagged/photo-1554176332-3d12cebb0089?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZXJpZSUyMG5hdHVyZSUyMGZvZ3xlbnwxfHx8fDE3NzExOTM5NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1762101467728-b15f7b30b16f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2N1bHQlMjB2aW50YWdlfGVufDF8fHx8MTc3MTE5Mzk2N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1636850871282-30464d157c6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxteXN0ZXJpb3VzJTIwcG9ydHJhaXQlMjBkYXJrfGVufDF8fHx8MTc3MTE5Mzk2N3ww&ixlib=rb-4.1.0&q=80&w=1080',
  ];

  // Define 6 different positions for images
  const imagePositions = [
    { top: '120px', left: '200px' },       // Position 1 - Top left
    { top: '140px', right: '100px' },      // Position 2 - Top right
    { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }, // Position 3 - Center
    { bottom: '120px', left: '180px' },    // Position 4 - Bottom left
    { bottom: '100px', right: '150px' },   // Position 5 - Bottom right
    { top: '280px', right: '200px' },      // Position 6 - Middle right
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'meow') {
      setIsAuthenticated(true);
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 1500);
    }
  };

  const handleFolderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (folderPassword === 'rawrxd') {
      setIsFolderAuthenticated(true);
      setShowFolderPopup(false);
      setIsFolderOpen(true);
    } else {
      setShowFolderError(true);
      setTimeout(() => setShowFolderError(false), 1500);
    }
  };

  const handleSecondFolderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (secondFolderPassword === '') {
      setIsSecondFolderAuthenticated(true);
      setShowSecondFolderPopup(false);
    } else {
      setShowSecondFolderError(true);
      setTimeout(() => setShowSecondFolderError(false), 1500);
    }
  };

  if (isAuthenticated) {
    // If second folder is authenticated, show complete black screen
    if (isSecondFolderAuthenticated) {
      return (
        <div className="fixed inset-0 bg-black" style={{ fontFamily: "'Cormorant Garamond', serif" }}></div>
      );
    }

    return (
      <div 
        className="fixed inset-0 bg-black overflow-hidden" 
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
        onClick={() => {
          setSelectedImage(null);
          setSelectedImageIndex(null);
        }}
      >
        {/* Folder Icon - Header Left Position - Only show if not authenticated */}
        {!isFolderAuthenticated && (
          <div className="absolute top-20 left-8 md:left-auto md:ml-[444px]">
            <img 
              src="/images/folder-icon.png"
              alt="Folder"
              onClick={(e) => {
                e.stopPropagation();
                setShowFolderPopup(true);
              }}
              className="w-20 md:w-30 h-auto cursor-pointer transition-transform duration-300"
            />
          </div>
        )}

        {/* Timeline of File Icons */}
        {isFolderOpen && (
          <div className="absolute top-[170px] left-8 bottom-8 z-50">
            <div className="flex flex-col gap-6 overflow-y-auto h-full pb-4">
              {galleryImages.map((img, index) => (
                <div
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    // If any image is selected, close it first
                    if (selectedImage !== null) {
                      setSelectedImage(null);
                      setSelectedImageIndex(null);
                    } else {
                      // Otherwise, open this image
                      setSelectedImage(img);
                      setSelectedImageIndex(index);
                    }
                  }}
                  className="flex flex-col items-center cursor-pointer group subtle-wave"
                >
                  <div className="w-6 h-8 flex items-center justify-center mb-2 opacity-60">
                    <img 
                      src="/images/file-icon.png"
                      alt={`File ${index + 1}`}
                      className="w-full h-auto"
                    />
                  </div>
                  <span className="text-[9px] tracking-[0.15em] text-[#666666]">
                    FILE_{String(index + 1).padStart(2, '0')}.IMG
                  </span>
                </div>
              ))}
              
              {/* Second Folder Icon */}
              <div 
                className="flex flex-col items-center cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowSecondFolderPopup(true);
                }}
              >
                <img 
                  src="/images/folder-icon.png"
                  alt="Folder"
                  className="w-16 h-auto opacity-60"
                />
              </div>
            </div>
          </div>
        )}

        {/* Image Viewer Modal */}
        {selectedImage && selectedImageIndex !== null && (
          <div 
            className="absolute z-10"
            style={imagePositions[selectedImageIndex % imagePositions.length]}
          >
            <div className="relative max-w-[280px] w-full subtle-wave">
              <img 
                src={selectedImage} 
                alt="Selected"
                className="w-full max-h-[400px] object-contain border-2 border-[#333333]"
              />
            </div>
          </div>
        )}

        {/* Folder Password Popup */}
        {showFolderPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[100]">
            <div className="w-full max-w-xs">
              <form onSubmit={handleFolderSubmit} className="space-y-4">
                <input
                  type="password"
                  value={folderPassword}
                  onChange={(e) => setFolderPassword(e.target.value)}
                  placeholder="•••••••"
                  autoFocus
                  className="w-full bg-transparent border-b border-[#666666] px-0 py-2 text-center text-xs tracking-[0.15em] placeholder:text-[#444444] text-[#888888] focus:outline-none focus:border-[#888888] transition-colors"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                />
              </form>

              {/* Folder Error Message - Fixed Space */}
              <div className="h-8 mt-4 flex items-center justify-center">
                {showFolderError && (
                  <div className="text-center text-[#666666] text-xs tracking-[0.2em] font-light">
                    Try again.
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Second Folder Password Popup */}
        {showSecondFolderPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[100]">
            <div className="w-full max-w-xs">
              <form onSubmit={handleSecondFolderSubmit} className="space-y-4">
                <input
                  type="password"
                  value={secondFolderPassword}
                  onChange={(e) => setSecondFolderPassword(e.target.value)}
                  placeholder="•••••••"
                  autoFocus
                  className="w-full bg-transparent border-b border-[#666666] px-0 py-2 text-center text-xs tracking-[0.15em] placeholder:text-[#444444] text-[#888888] focus:outline-none focus:border-[#888888] transition-colors"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                />
              </form>

              {/* Folder Error Message - Fixed Space */}
              <div className="h-8 mt-4 flex items-center justify-center">
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#888888] flex items-center justify-center p-6 relative" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
      <div className="w-full max-w-xs">
        {/* Wobbling Eye Logo */}
        <div className="mb-10 flex justify-center subtle-wave">
          <img 
            src="/images/eye-logo.png"
            alt="Eye" 
            className="wobble-eye w-32 h-auto opacity-30"
          />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5 subtle-wave">
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="•••••••"
              className="w-full bg-transparent border-b border-[#3a3a3a] px-0 py-2 text-center text-xs tracking-[0.15em] placeholder:text-[#5a5a5a] text-[#1a1a1a] focus:outline-none focus:border-[#2a2a2a] transition-colors"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#1a1a1a] text-[#888888] py-2 text-[10px] tracking-[0.3em] hover:bg-[#2a2a2a] transition-all duration-300"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            ENTER THE ZOO
          </button>
        </form>

        {/* Error Message - Fixed Space */}
        <div className="h-8 mt-4 flex items-center justify-center">
          {showError && (
            <div className="text-center text-[#3a3a3a] text-xs tracking-[0.2em] font-light">
              Try again.
            </div>
          )}
        </div>

        {/* Countdown Timer - Between Enter Button and Image */}
        <div className="mt-4 text-center">
          <div className="text-[#2a2a2a] text-sm tracking-[0.2em] font-light" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            {String(timeLeft.days).padStart(2, '0')}:{String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
          </div>
        </div>

        {/* Gathering Image - Between Enter Button and Waitlist */}
        <div className="mt-4 mb-4 flex justify-center">
          <img 
            src="/images/gathering.png"
            alt="Gathering" 
            className="w-40 h-auto"
          />
        </div>
      </div>

      <style>{`
        html, body, #root {
          background-color: #888888 !important;
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
        }
        
        @keyframes wave {
          0% { transform: scaleX(1) scaleY(1); }
          8% { transform: scaleX(1.0648) scaleY(0.9496); }
          15% { transform: scaleX(1.1656) scaleY(0.9136); }
          24% { transform: scaleX(0.8992) scaleY(1.1224); }
          33% { transform: scaleX(1.2088) scaleY(0.8776); }
          42% { transform: scaleX(0.9208) scaleY(1.1512); }
          51% { transform: scaleX(1.1368) scaleY(0.9064); }
          60% { transform: scaleX(0.9352) scaleY(1.1008); }
          69% { transform: scaleX(1.0792) scaleY(0.9568); }
          78% { transform: scaleX(0.9712) scaleY(1.036); }
          87% { transform: scaleX(1.036) scaleY(0.9856); }
          93% { transform: scaleX(0.9928) scaleY(1.0096); }
          100% { transform: scaleX(1) scaleY(1); }
        }
        
        @keyframes subtleWave {
          0% { transform: scaleX(1) scaleY(1); }
          11% { transform: scaleX(0.97912) scaleY(1.00864); }
          19% { transform: scaleX(1.00648) scaleY(0.9964); }
          28% { transform: scaleX(1.03312) scaleY(0.98416); }
          37% { transform: scaleX(0.97552) scaleY(1.01512); }
          46% { transform: scaleX(1.03744) scaleY(0.98056); }
          55% { transform: scaleX(0.98344) scaleY(1.0108); }
          64% { transform: scaleX(1.01728) scaleY(0.99136); }
          73% { transform: scaleX(0.98992) scaleY(1.00576); }
          82% { transform: scaleX(1.00936) scaleY(0.99496); }
          91% { transform: scaleX(0.99608) scaleY(1.00224); }
          100% { transform: scaleX(1) scaleY(1); }
        }
        
        .wobble-eye {
          animation: wave 28s ease-in-out infinite;
          transform-origin: center;
        }
        
        .subtle-wave {
          animation: subtleWave 32s ease-in-out infinite;
          transform-origin: center;
        }
      `}</style>
    </div>
  );
}
```

---

## ✅ That's it!

This is your complete `App.tsx` file with updated image imports that use `/images/` instead of `figma:asset`.

**Remember:**
- Place this code in: `src/app/App.tsx`
- Make sure your 4 images are in: `public/images/`
- Image names: `eye-logo.png`, `folder-icon.png`, `file-icon.png`, `gathering.png`
