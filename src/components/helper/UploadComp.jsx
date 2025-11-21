export default function UploadBox() {
 

  return (
    <div className="flex items-center justify-center bg-gray-900 p-6">
      {/* Background pattern */}
      <div
        aria-hidden
        className="absolute inset-0 bg-center bg-repeat opacity-30"
        // style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
      />

      <main className="relative z-10 w-full max-w-md">
        <label className="block text-sm font-semibold text-white mb-3">
          Shaxsiy rasmingiz <span className="text-red-400">*</span>
        </label>

        <label className="group relative block cursor-pointer rounded-lg border-2 border-dashed border-gray-300 bg-white/95 p-8 hover:shadow-lg transition-shadow duration-200">
          <input
            // ref={inputRef}
            type="file"
            accept="image/png, image/jpeg, image/jpg, image/webp, image/heic"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            // onChange={handleChange}
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

        {/* Preview va tugmalar */}
          {/* <div className="mt-4 rounded-md overflow-hidden border border-gray-200 bg-white"> */}
            {/* <img  alt="preview" className="w-full h-auto object-cover" /> */}
            {/* <div className="flex gap-2 p-2 justify-end bg-gray-50">
              
            </div> */}
          {/* </div> */}
        
      </main>
    </div>
  );
}
