import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function UploadBox({ selectedImage, setSelectedImage }) {
  const [previewUrl, setPreviewUrl] = useState(null);
  const inputRef = useRef(null);

  const handleChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file); // User state yangilanadi
      setPreviewUrl(URL.createObjectURL(file)); // preview uchun local URL
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null); // User state tozalanadi
    setPreviewUrl(null);
    if (inputRef.current) inputRef.current.value = "";
  };
const {t} = useTranslation()
  return (
    <div className="flex items-center justify-center bg-gray-900 p-6">
      <main className="relative z-10 w-full max-w-md">
        <label className="block text-sm font-semibold text-white mb-3">
          {t("shaxsiyrasm")}<span className="text-red-400">*</span>
        </label>

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
              O'chirish
            </button>
          </div>
        ) : (
          <label className="group relative block cursor-pointer rounded-lg border-2 border-dashed border-gray-300 bg-white/95 p-8 hover:shadow-lg transition-shadow duration-200">
            <input
              ref={inputRef}
              type="file"
              accept="image/png, image/jpeg, image/jpg, image/webp, image/heic"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={handleChange}
            />
            <div className="flex flex-col items-center gap-4 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-14 w-14 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
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