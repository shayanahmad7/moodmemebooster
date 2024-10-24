import React, { useState, useEffect } from 'react'
import { Button } from "./components/ui/button"
import { Card, CardContent } from "./components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./components/ui/carousel"
import { BookmarkPlus, Share2 } from 'lucide-react'

// Define the structure of a meme object
type Meme = {
  url: string;
  title: string;
}

export default function MemeMoodBooster() {
  // State to store the selected mood
  const [mood, setMood] = useState<string>('')
  // State to store the fetched memes
  const [memes, setMemes] = useState<Meme[]>([])
  // State to track loading status
  const [loading, setLoading] = useState<boolean>(false)

  // List of moods for the user to choose from
  const moods = [
    'Happy', 'Sad', 'Excited', 'Bored', 'Angry', 'Relaxed', 'Anxious', 'Confused'
  ]

  // Effect hook to fetch memes when mood changes
  useEffect(() => {
    if (mood) {
      fetchMemes()
    }
  }, [mood])

  // Function to fetch memes from the API
  const fetchMemes = async () => {
    setLoading(true)
    try {
      // In a real app, you might want to use the mood to filter memes
      const response = await fetch(`https://meme-api.com/gimme/wholesomememes/5`)
      const data = await response.json()
      setMemes(data.memes)
    } catch (error) {
      console.error('Error fetching memes:', error)
      // In a production app, you'd want to show an error message to the user
    } finally {
      setLoading(false)
    }
  }

  // Function to handle sharing a meme
  const handleShare = (meme: Meme) => {
    if (navigator.share) {
      navigator.share({
        title: meme.title,
        url: meme.url
      }).then(() => console.log('Shared successfully'))
        .catch((error) => console.log('Error sharing:', error))
    } else {
      console.log('Web Share API not supported')
      // In a production app, you might want to provide a fallback sharing method
    }
  }

  // Function to handle saving a meme
  const handleSave = (meme: Meme) => {
    // In a real app, this would save to local storage or a backend
    console.log('Saved meme:', meme)
    // You might want to implement actual saving functionality and provide user feedback
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 to-indigo-600 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white/90 backdrop-blur-sm">
        <CardContent className="p-6">
          <h1 className="text-3xl font-bold text-center mb-6 text-purple-800">Meme Mood Booster</h1>
          
          {/* Mood selection dropdown */}
          <Select onValueChange={(value: string) => setMood(value)}>
            <SelectTrigger className="w-full mb-4">
              <SelectValue placeholder="How are you feeling?" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              {moods.map((m) => (
                <SelectItem key={m} value={m.toLowerCase()}>{m}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Loading state */}
          {loading ? (
            <div className="text-center py-10">Loading memes...</div>
          ) : memes.length > 0 ? (
            // Meme carousel
            <Carousel className="w-full max-w-xs mx-auto">
              <CarouselContent>
                {memes.map((meme, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card className="bg-white">
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <img src={meme.url} alt={meme.title} className="max-w-full max-h-full object-contain" />
                        </CardContent>
                      </Card>
                      <div className="flex justify-between mt-2">
                        <Button variant="outline" size="icon" onClick={() => handleSave(meme)}>
                          <BookmarkPlus className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon" onClick={() => handleShare(meme)}>
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          ) : mood && (
            // No memes found state
            <div className="text-center py-10">No memes found. Try another mood!</div>
          )}

          {/* Button to fetch more memes */}
          {mood && (
            <Button className="w-full mt-4 bg-black text-white hover:bg-gray-800" onClick={fetchMemes}>
              Get More Memes
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  )
}