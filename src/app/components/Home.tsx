import { useState, useEffect, useRef } from 'react';

// Asset paths
const image_78dde3b42900b224f6c3b336f9206edea935f26b = '/assets/gallery-1.png';
const image_2027a60629ba4b35826c8955d3093a3ee97bff89 = '/assets/gallery-2.png';
const image_4cf9e0e3ac2cd5b86d76b3219b268bdf468e53af = '/assets/gallery-3.png';
const image_05bb9db8f082d9839e99cad1a93bdd8818a79f67 = '/assets/gallery-4.png';
const image_3feb12ec293f0c6a5b02b53bde4d1f360474b603 = '/assets/gallery-5.png';
const image_05f8943f6cc1cb1040fb70a7c35ca74cec3b0150 = '/assets/gallery-6.png';

const eyeLogo = '/assets/eye-logo.png';
const folderIcon = '/assets/folder-icon.png';
const fileIcon = '/assets/file-icon.png';
const landingButtonLabel = ['E', 'N', 'T', 'E', 'R', null, 'Y', 'O', 'U', 'T', 'O', 'P', 'I', 'A'];

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isFolderOpen, setIsFolderOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [showFolderPopup, setShowFolderPopup] = useState(false);
  const [folderPassword, setFolderPassword] = useState('');
  const [isFolderAuthenticated, setIsFolderAuthenticated] = useState(false);
  const [showFolderError, setShowFolderError] = useState(false);
  const [showSecondFolderPopup, setShowSecondFolderPopup] = useState(false);
  const [secondFolderPassword, setSecondFolderPassword] = useState('');
  const [isSecondFolderAuthenticated, setIsSecondFolderAuthenticated] = useState(false);
  const [showSecondFolderError, setShowSecondFolderError] = useState(false);
  const [isMusicOn, setIsMusicOn] = useState(false);
  const [musicStarted, setMusicStarted] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio element
  useEffect(() => {
    audioRef.current = new Audio('/assets/background-music.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 1.0;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Attempt to start music immediately on mount
  useEffect(() => {
    if (!audioRef.current || isAuthenticated || musicStarted) return;

    // Add click listener to start music on first interaction
    const handleFirstInteraction = () => {
      if (!musicStarted && audioRef.current) {
        audioRef.current.play()
          .then(() => {
            setMusicStarted(true);
            setIsMusicOn(true); // Update button to show pause symbol
          })
          .catch(err => console.log('Audio play failed:', err));
      }
    };

    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('keydown', handleFirstInteraction);

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
    };
  }, [isAuthenticated, musicStarted]);

  // Handle music playback
  useEffect(() => {
    if (!audioRef.current) return;

    if (isMusicOn && !isAuthenticated) {
      audioRef.current.play().catch(err => console.log('Audio play failed:', err));
    } else {
      audioRef.current.pause();
    }
  }, [isMusicOn, isAuthenticated]);

  // Stop music when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      setIsMusicOn(false);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  }, [isAuthenticated]);

  // Array of unique images for each file
  const fileImages = [
    image_78dde3b42900b224f6c3b336f9206edea935f26b, // File_01 - Cat mask image (provided by user)
    image_2027a60629ba4b35826c8955d3093a3ee97bff89, // File_02 - Cat mask image (provided by user)
    image_4cf9e0e3ac2cd5b86d76b3219b268bdf468e53af, // File_03 - Group photo with animal masks (provided by user)
    image_05bb9db8f082d9839e99cad1a93bdd8818a79f67, // File_04 - What's Water? fishbowl (provided by user)
    image_3feb12ec293f0c6a5b02b53bde4d1f360474b603, // File_05 - Water bowl "they say the waters different but it all tastes the same" (provided by user)
    image_05f8943f6cc1cb1040fb70a7c35ca74cec3b0150, // File_06 - Vintage cat and dog masks photo (provided by user)
  ];

  const galleryImages = [
    'File_01',
    'File_02',
    'File_03',
    'File_04',
    'File_05',
    'File_06',
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
    setIsAuthenticated(true);
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
    // If second folder is authenticated, show a complete blank screen
    if (isSecondFolderAuthenticated) {
      return (
        <div className="fixed inset-0 bg-[#faf9f7]" style={{ fontFamily: "'Cormorant Garamond', serif" }}></div>
      );
    }

    return (
      <div 
        className="fixed inset-0 bg-[#faf9f7] overflow-hidden"
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
              src={folderIcon}
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
                      setSelectedImage(fileImages[index]);
                      setSelectedImageIndex(index);
                    }
                  }}
                  className="flex flex-col items-center cursor-pointer group subtle-wave"
                >
                  <div className="w-6 h-8 flex items-center justify-center mb-2 opacity-60">
                    <img 
                      src={fileIcon} 
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
                  src={folderIcon}
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

        <style>{`
          .subtle-wave {
            animation: subtleWave 32s ease-in-out infinite;
            transform-origin: center;
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
        `}</style>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf9f7] flex items-center justify-center p-6 relative" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
      {/* Music Toggle Button - Top Right */}
      <button
        onClick={() => setIsMusicOn(!isMusicOn)}
        className="absolute top-6 right-6 text-[#3a3a3a] hover:text-[#1a1a1a] transition-colors duration-300 subtle-wave flex items-center justify-center"
        style={{ 
          width: '24px',
          height: '24px',
        }}
        aria-label="Toggle music"
      >
        {isMusicOn ? (
          // Pause symbol - two thick vertical bars
          <div className="flex items-center justify-center gap-[3px]">
            <div className="w-[3px] h-[14px] bg-[#3a3a3a]" style={{ transition: 'background-color 0.3s' }}></div>
            <div className="w-[3px] h-[14px] bg-[#3a3a3a]" style={{ transition: 'background-color 0.3s' }}></div>
          </div>
        ) : (
          // Play symbol - right-pointing triangle
          <div 
            className="w-0 h-0"
            style={{
              borderLeft: '10px solid #3a3a3a',
              borderTop: '7px solid transparent',
              borderBottom: '7px solid transparent',
              transition: 'border-left-color 0.3s'
            }}
          ></div>
        )}
      </button>

      <div className="landing-rotation w-full max-w-xs">
        {/* Wobbling Eye Logo */}
        <div className="mb-10 flex justify-center subtle-wave">
          <img
            src={eyeLogo}
            alt="Eye"
            className="wobble-eye w-32 h-auto opacity-30"
          />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="subtle-wave">
          <button
            type="submit"
            aria-label="Enter Youtopia"
            className="w-full bg-[#1a1a1a] text-[#888888] py-2 text-[10px] hover:bg-[#2a2a2a] transition-all duration-300"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            <span className="landing-button-label" aria-hidden="true">
              {landingButtonLabel.map((character, index) =>
                character ? (
                  <span key={`${character}-${index}`}>{character}</span>
                ) : (
                  <span key="word-break" className="landing-button-word-break" />
                ),
              )}
            </span>
          </button>
        </form>

      </div>

      <style>{`
        html, body, #root {
          background-color: #faf9f7 !important;
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

        .landing-rotation {
          transform: rotate(90deg);
          transform-origin: center;
        }

        .landing-button-label {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
        }

        .landing-button-label > span:not(.landing-button-word-break) {
          display: inline-flex;
          transform: rotate(-90deg);
        }

        .landing-button-word-break {
          width: 1rem;
        }

        @media (max-width: 400px), (max-height: 400px) {
          .landing-rotation {
            transform: rotate(90deg) scale(0.82);
          }
        }
      `}</style>
    </div>
  );
}
