import type React from "react"

interface MusicSectionProps {
  data: {
    isLoading: boolean
    error: any
    musicData: any[] // Replace 'any' with the actual type of your music data
  }
}

const MusicSection: React.FC<MusicSectionProps> = ({ data }) => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center text-[#abb2bf] mb-8">Music</h2>

        {data.isLoading ? (
          <div className="text-center py-8">
            <div className="inline-block h-12 w-12 relative">
              <div className="absolute inset-0 rounded-full border-2 border-t-[#7aa2f7] border-r-[#7aa2f7] border-b-[#3d59a1] border-l-[#3d59a1] animate-spin"></div>
              <div
                className="absolute inset-2 rounded-full border-2 border-t-[#bb9af7] border-r-[#bb9af7] border-b-[#3d59a1] border-l-[#3d59a1] animate-spin"
                style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
              ></div>
              <div
                className="absolute inset-4 rounded-full border-2 border-t-[#7dcfff] border-r-[#7dcfff] border-b-[#3d59a1] border-l-[#3d59a1] animate-spin"
                style={{ animationDuration: "2s" }}
              ></div>
            </div>
            <p className="mt-4 text-[#a9b1d6]">Loading music data...</p>
          </div>
        ) : data.error ? (
          <div className="text-center text-red-500 py-8">
            Error: {data.error.message || "Failed to load music data."}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.musicData.map((musicItem, index) => (
              <div key={index} className="bg-[#282c34] rounded-lg shadow-md p-4">
                <h3 className="text-xl font-semibold text-[#c6c6c6]">{musicItem.title}</h3>
                <p className="text-[#98c379]">Artist: {musicItem.artist}</p>
                {/* Add more details as needed */}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default MusicSection

