import { useState, useRef } from 'react';

export default function UploadBox() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const inputRef = useRef(null);

  const handleChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      
      // Rasmni preview qilish uchun URL yaratish
      const imageUrl = URL.createObjectURL(file);
      setPreviewUrl(imageUrl);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setPreviewUrl(null);
    
    // Input qiymatini tozalash
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-900 p-6">
      <main className="relative z-10 w-full max-w-md">
        <label className="block text-sm font-semibold text-white mb-3">
          Shaxsiy rasmingiz <span className="text-red-400">*</span>
        </label>

        {/* Rasm preview qismi */}
        {previewUrl ? (
         <div className="relative">
  <img
    src={previewUrl}
    alt="Yuklangan rasm"
    className="w-full h-64 object-cover rounded-lg border-2 border-gray-300"
  />
  <button 
    onClick={handleRemoveImage}
    className="absolute bottom-2 right-2 bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-xs font-medium transition duration-200 flex items-center"
  >
    <svg className="w-10 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
    </svg>
  </button>
</div>
        ) : (
          // Rasm yuklash qismi
          <label className="group relative block cursor-pointer rounded-lg border-2 border-dashed border-gray-300 bg-white/95 p-8 hover:shadow-lg transition-shadow duration-200">
            <input
              ref={inputRef}
              type="file"
              accept="image/png, image/jpeg, image/jpg, image/webp, image/heic"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={handleChange}
              aria-label="Rasm yuklash"
            />

            <div className="flex flex-col items-center gap-4 text-center">
              {/* Upload icon */}
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

        {/* Yuklangan rasm haqida ma'lumot */}
        {selectedImage && (
          <div className="mt-3 text-center">
            <p className="text-sm text-white">
              Yuklangan: <span className="font-medium">{selectedImage.name}</span>
            </p>
            <p className="text-xs text-gray-400">
              Hajmi: {(selectedImage.size / 1024 / 1024).toFixed(2)} MB
            </p>
          </div>
        )}
      </main>
    </div>
  );
}