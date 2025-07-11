"use client"

import { useState, useEffect } from "react"
import { Music, Clock, BarChart, ListMusic, Disc, ExternalLink } from "lucide-react"

interface Track {
  name: string
  artist: {
    "#text": string
  }
  url: string
  image: Array<{
    size: string
    "#text": string
  }>
  date?: {
    "#text": string
    uts?: string
  }
  "@attr"?: {
    nowplaying?: string
    rank?: string
  }
  playcount?: string
}

interface LastFmData {
  recentTracks: Track[]
  weeklyTracks: Track[]
  topTracks: Track[]
  isLoading: boolean
  error: string | null
}

export function MusicSection() {
  const [data, setData] = useState<LastFmData>({
    recentTracks: [],
    weeklyTracks: [],
    topTracks: [],
    isLoading: true,
    error: null,
  })
  const [activeTab, setActiveTab] = useState<"recent" | "weekly" | "top">("recent")
  const [loadingText, setLoadingText] = useState("Loading music data")

  // Terminal-style loading animation
  useEffect(() => {
    if (data.isLoading) {
      const loadingInterval = setInterval(() => {
        setLoadingText((prev) => {
          if (prev.endsWith("...")) return "Loading music data"
          return prev + "."
        })
      }, 500)

      return () => clearInterval(loadingInterval)
    }
  }, [data.isLoading])

  useEffect(() => {
    const fetchMusicData = async () => {
      try {
        // Fetch recent tracks
        const recentTracksResponse = await fetch('/api/music?type=recent')
        const recentTracksData = await recentTracksResponse.json()
  
        // Fetch weekly track chart
        const weeklyTracksResponse = await fetch('/api/music?type=weekly')
        const weeklyTracksData = await weeklyTracksResponse.json()
  
        // Fetch top tracks
        const topTracksResponse = await fetch('/api/music?type=top')
        const topTracksData = await topTracksResponse.json()

        setData({
          recentTracks: recentTracksData.recenttracks?.track || [],
          weeklyTracks: weeklyTracksData.weeklytrackchart?.track || [],
          topTracks: topTracksData.toptracks?.track || [],
          isLoading: false,
          error: null,
        })
      } catch (error) {
        setData((prev) => ({
          ...prev,
          isLoading: false,
          error: "Failed to fetch music data. Please try again later.",
        }))
        console.error("Error fetching music data:", error)
      }
    }

    fetchMusicData()
  }, [])

  // Function to format date with GMT+7 adjustment
  const formatDate = (dateString: string) => {
    if (!dateString) return ""

    // Parse the date string
    const date = new Date(dateString)

    // Add 7 hours for GMT+7
    date.setHours(date.getHours() + 7)

    // Format the date
    const day = String(date.getDate()).padStart(2, "0")
    const month = date.toLocaleString("en-US", { month: "short" })
    const year = date.getFullYear()
    const hours = String(date.getHours()).padStart(2, "0")
    const minutes = String(date.getMinutes()).padStart(2, "0")

    return `${day} ${month} ${year}, ${hours}:${minutes}`
  }

  const renderNowPlaying = () => {
    const nowPlaying = data.recentTracks.find((track) => track["@attr"]?.nowplaying === "true")

    if (!nowPlaying) {
      return (
        <div className="bg-[#1a1b26] p-4 rounded-lg border border-[#3d59a1] mb-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="relative flex-shrink-0">
              <Disc className="h-5 w-5 text-[#565f89]" />
            </div>
            <h3 className="text-[#7dcfff] font-medium">Spotify Status</h3>
          </div>

          <div className="flex items-center">
            <div className="bg-[#24283b] px-3 py-2 rounded-md text-[#a9b1d6]">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-[#565f89] rounded-full mr-2"></span>
                Currently offline
              </span>
            </div>
          </div>
        </div>
      )
    }

    const image = nowPlaying.image.find((img) => img.size === "large") || nowPlaying.image[0]

    return (
      <div className="bg-[#1a1b26] p-4 rounded-lg border border-[#3d59a1] mb-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="relative flex-shrink-0">
            <div className="w-2 h-2 bg-[#9ece6a] rounded-full absolute -top-1 -left-1 animate-pulse"></div>
            <Disc className="h-5 w-5 text-[#7aa2f7] animate-spin" style={{ animationDuration: "3s" }} />
          </div>
          <h3 className="text-[#7dcfff] font-medium">Now Playing</h3>
        </div>

        <div className="flex items-center gap-4">
          {image["#text"] && (
            <img
              src={image["#text"] || "/placeholder.svg"}
              alt={`${nowPlaying.name} album art`}
              className="w-16 h-16 rounded-md object-cover border border-[#3d59a1]"
            />
          )}
          <div>
            <p className="text-[#bb9af7] font-medium">{nowPlaying.name}</p>
            <p className="text-[#7aa2f7] text-sm">{nowPlaying.artist["#text"]}</p>
            <a
              href={nowPlaying.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs flex items-center mt-1 text-[#a9b1d6] hover:text-[#7aa2f7] transition-colors"
            >
              <ExternalLink className="h-3 w-3 mr-1" />
              <span>View on Last.fm</span>
            </a>
          </div>
        </div>
      </div>
    )
  }

  const renderTabs = () => {
    return (
      <div className="flex space-x-1 mb-4 bg-[#1a1b26] p-1 rounded-lg border border-[#3d59a1]">
        <button
          type="button"
          tabIndex={-1}
          onClick={() => setActiveTab("recent")}
          className={`flex items-center px-3 py-1.5 rounded text-sm ${
            activeTab === "recent" ? "bg-[#3d59a1] text-white" : "text-[#7aa2f7] hover:bg-[#24283b] transition-colors"
          }`}
        >
          <Clock className="h-3.5 w-3.5 mr-1.5" />
          Recent
        </button>
        <button
          type="button"
          tabIndex={-1}
          onClick={() => setActiveTab("weekly")}
          className={`flex items-center px-3 py-1.5 rounded text-sm ${
            activeTab === "weekly" ? "bg-[#3d59a1] text-white" : "text-[#7aa2f7] hover:bg-[#24283b] transition-colors"
          }`}
        >
          <BarChart className="h-3.5 w-3.5 mr-1.5" />
          Weekly
        </button>
        <button
          type="button"
          tabIndex={-1}
          onClick={() => setActiveTab("top")}
          className={`flex items-center px-3 py-1.5 rounded text-sm ${
            activeTab === "top" ? "bg-[#3d59a1] text-white" : "text-[#7aa2f7] hover:bg-[#24283b] transition-colors"
          }`}
        >
          <ListMusic className="h-3.5 w-3.5 mr-1.5" />
          Top
        </button>
      </div>
    )
  }

  const renderTrackList = () => {
    let tracks: Track[] = []
    let title = ""
    let icon = null

    switch (activeTab) {
      case "recent":
        // Filter out the now playing track
        tracks = data.recentTracks.filter((track) => !track["@attr"]?.nowplaying)
        title = "Recently Played"
        icon = <Clock className="h-4 w-4 mr-2 text-[#7aa2f7]" />
        break
      case "weekly":
        tracks = data.weeklyTracks.slice(0, 5)
        title = "Weekly Chart"
        icon = <BarChart className="h-4 w-4 mr-2 text-[#7aa2f7]" />
        break
      case "top":
        tracks = data.topTracks
        title = "Top Tracks This Month"
        icon = <ListMusic className="h-4 w-4 mr-2 text-[#7aa2f7]" />
        break
    }

    return (
      <div>
        <h3 className="text-[#7dcfff] flex items-center mb-3">
          {icon}
          {title}
        </h3>

        <div className="space-y-2">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="bg-[#24283b] hover:bg-[#1a1b26] transition-colors p-3 rounded-lg border border-[#3d59a1] flex items-center"
            >
              <div className="mr-3 text-[#7aa2f7] font-mono w-5 text-center">{track["@attr"]?.rank || index + 1}</div>

              <div className="flex-grow">
                <p className="text-[#a9b1d6]">{track.name}</p>
                <p className="text-[#7aa2f7] text-sm">{track.artist["#text"]}</p>
                {activeTab === "recent" && track.date && (
                  <p className="text-[#565f89] text-xs mt-0.5">{formatDate(track.date["#text"])}</p>
                )}
                {activeTab === "top" && track.playcount && (
                  <p className="text-[#565f89] text-xs mt-0.5">{track.playcount} plays</p>
                )}
              </div>

              <a
                href={track.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7aa2f7] hover:text-[#bb9af7] transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4 animate-fadeIn">
      <h2 className="text-xl font-bold text-[#bb9af7] flex items-center">
        <Music className="mr-2 h-5 w-5 text-[#7aa2f7]" />
        All About My Music
      </h2>

      {data.isLoading ? (
        <div className="flex items-center justify-center py-8">
          <div className="bg-[#1a1b26] border border-[#3d59a1] rounded-lg p-6 w-full max-w-md">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-[#7aa2f7] rounded-full animate-pulse mr-3"></div>
              <div className="font-mono text-[#7aa2f7]">{loadingText}</div>
              <div className="ml-1 font-mono text-[#7aa2f7] animate-blink">_</div>
            </div>

            <div className="space-y-2 font-mono text-sm">
              <div className="flex justify-between items-center">
                <span className="text-[#7aa2f7]">Connecting to Last.fm API...</span>
                <span className="text-[#9ece6a]">OK</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#7aa2f7]">Fetching recent tracks...</span>
                <span className="text-[#9ece6a]">OK</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#7aa2f7]">Fetching weekly chart...</span>
                <span className="text-[#9ece6a]">OK</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#7aa2f7]">Fetching top tracks...</span>
                <span className="text-[#bb9af7]">IN PROGRESS</span>
              </div>
            </div>
          </div>
        </div>
      ) : data.error ? (
        <div className="bg-[#1a1b26] border border-[#f7768e] text-[#f7768e] p-4 rounded-lg">{data.error}</div>
      ) : (
        <>
          {renderNowPlaying()}
          {renderTabs()}
          {renderTrackList()}

          <div className="mt-4 text-[#a9b1d6] text-sm flex items-center">
            <p>
              Music data powered by{" "}
              <a
                href="https://www.last.fm/user/rizr09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7aa2f7] hover:underline"
              >
                Last.fm
              </a>
              <a
                href="https://open.spotify.com/user/fc8y4939uhihepg1ey5bvvvs6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1DB954] hover:underline flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 mr-1 inline fill-current"
                >
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
                Connect on Spotify
              </a>
            </p>
          </div>
        </>
      )}

      <div className="border-t border-[#3d59a1] pt-2 text-[#7aa2f7] text-sm">
        <p>
          Type <span className="text-[#bb9af7]">projects</span> to view my projects or{" "}
          <span className="text-[#bb9af7]">contact</span> to get in touch.
        </p>
      </div>
    </div>
  )
}

