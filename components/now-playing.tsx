export function NowPlaying() {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-[#1a1b26] p-2 rounded-t-lg border-b-0 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-2 h-2 bg-[#9ece6a] rounded-full mr-2 animate-pulse"></div>
          <span className="text-[#7aa2f7] text-sm font-medium">Now Playing</span>
        </div>
        <span className="text-[#a9b1d6] text-xs">Spotify</span>
      </div>
      <iframe
        src="https://spotify-github-profile.kittinanx.com/api/view?uid=fc8y4939uhihepg1ey5bvvvs6&cover_image=true&theme=natemoo-re&show_offline=true&bar_color_cover=true"
        width="100%"
        height="80"
        className="border-0 overflow-hidden rounded-b-lg bg-[#1a1b26] border-t-0"
        title="Spotify Now Playing"
        style={{ maxWidth: "100%" }}
      />
    </div>
  )
}

