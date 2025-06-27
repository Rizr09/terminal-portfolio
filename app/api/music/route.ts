import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const type = searchParams.get('type')
  
  const apiKey = process.env.LAST_FM
  
  if (!apiKey) {
    return NextResponse.json({ error: 'API key not configured' }, { status: 500 })
  }
  
  let url: string
  
  switch (type) {
    case 'recent':
      url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=rizr09&api_key=${apiKey}&format=json&limit=5`
      break
    case 'weekly':
      url = `https://ws.audioscrobbler.com/2.0/?method=user.getweeklytrackchart&user=rizr09&api_key=${apiKey}&format=json`
      break
    case 'top':
      url = `https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=rizr09&period=1month&api_key=${apiKey}&format=json&limit=5`
      break
    default:
      return NextResponse.json({ error: 'Invalid type parameter' }, { status: 400 })
  }
  
  try {
    const response = await fetch(url)
    
    if (!response.ok) {
      throw new Error(`Last.fm API error: ${response.status}`)
    }
    
    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching music data:', error)
    return NextResponse.json({ error: 'Failed to fetch music data' }, { status: 500 })
  }
}
