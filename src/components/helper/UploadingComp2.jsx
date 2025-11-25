import { useState, useRef } from 'react';

export default function UploadingComp2() {
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);
  const frontInputRef = useRef(null);
  const backInputRef = useRef(null);

  const handleFrontImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFrontImage(imageUrl);
    }
  };

  const handleBackImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setBackImage(imageUrl);
    }
  };

  const handleRemoveFrontImage = () => {
    setFrontImage(null);
    if (frontInputRef.current) {
      frontInputRef.current.value = '';
    }
  };

  const handleRemoveBackImage = () => {
    setBackImage(null);
    if (backInputRef.current) {
      backInputRef.current.value = '';
    }
  };

  return (
    <div className="flex  md:flex-row items-center justify-center bg-gray-900 p-6">
      {/* ID karta old tomoni */}
      <main className="relative z-10 w-full max-w-md">
        <label className="block text-sm font-semibold text-white mb-3">
          ID karta old tomoni <span className="text-red-400">*</span>
        </label>

        {frontImage ? (
          <div className="relative">
            <img
              src={frontImage}
              alt="ID karta old tomoni"
              className="w-full h-64 object-cover rounded-lg border-2 border-gray-300"
            />
            <button 
              onClick={handleRemoveFrontImage}
              className="absolute bottom-2 right-2 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full text-xs font-medium transition duration-200 flex items-center shadow-lg"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
              </svg>
            </button>
          </div>
        ) : (
          <label className="group relative block cursor-pointer rounded-lg border-2 border-dashed border-gray-300 bg-white/95 p-8 hover:shadow-lg transition-shadow duration-200">
            <input
              ref={frontInputRef}
              type="file"
              accept="image/png, image/jpeg, image/jpg, image/webp, image/heic"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={handleFrontImageChange}
              aria-label="ID karta old tomoni"
            />

            <div className="flex flex-col items-center gap-4 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-14 w-14 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 15a4 4 0 004 4h10a4 4 0 004-4 4 4 0 00-4-4H7a4 4 0 00-4 4z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 10l5-5m0 0l5 5m-5-5v12"
                />
              </svg>

              <div className="text-lg font-medium text-gray-700 group-hover:text-gray-900">
                Rasm yuklang
              </div>

              <p className="text-sm text-gray-400">
                PNG, JPG, JPEG, WEBP va HEIC ruxsat etilgan.
              </p>
            </div>

            <span className="pointer-events-none absolute inset-0 rounded-lg ring-2 ring-transparent group-focus-within:ring-blue-300" />
          </label>
        )}
      </main>

      {/* ID karta orqa tomoni */}
      <main className="relative z-10 w-full max-w-md">
        <label className="block text-sm font-semibold text-white mb-3">
          ID karta orqa tomoni <span className="text-red-400">*</span>
        </label>

        {backImage ? (
          <div className="relative">
            <img
              src={backImage}
              alt="ID karta orqa tomoni"
              className="w-full h-64 object-cover rounded-lg border-2 border-gray-300"
            />
            <button 
              onClick={handleRemoveBackImage}
              className="absolute bottom-2 right-2 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full text-xs font-medium transition duration-200 flex items-center shadow-lg"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
              </svg>
            </button>
          </div>
        ) : (
          <label className="group relative block cursor-pointer rounded-lg border-2 border-dashed border-gray-300 bg-white/95 p-8 hover:shadow-lg transition-shadow duration-200">
            <input
              ref={backInputRef}
              type="file"
              accept="image/png, image/jpeg, image/jpg, image/webp, image/heic"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={handleBackImageChange}
              aria-label="ID karta orqa tomoni"
            />

            <div className="flex flex-col items-center gap-4 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-14 w-14 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 15a4 4 0 004 4h10a4 4 0 004-4 4 4 0 00-4-4H7a4 4 0 00-4 4z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 10l5-5m0 0l5 5m-5-5v12"
                />
              </svg>

              <div className="text-lg font-medium text-gray-700 group-hover:text-gray-900">
                Rasm yuklang
              </div>

              <p className="text-sm text-gray-400">
                PNG, JPG, JPEG, WEBP va HEIC ruxsat etilgan.
              </p>
            </div>

            <span className="pointer-events-none absolute inset-0 rounded-lg ring-2 ring-transparent group-focus-within:ring-blue-300" />
          </label>
        )}
      </main>
    </div>
  );
}