'use client'

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function LinkProfile() {
  const [isCopiedLink, setIsCopiedLink] = useState(false)
  const [origin, setOrigin] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setOrigin(window.location.origin)
    }
  }, [])

  const copyLink = async () => {
    try {
      if (typeof window !== 'undefined') {
        const url = `${origin}/nvrztest`
        await navigator.clipboard.writeText(url)
        setIsCopiedLink(true)

        // Resetea el estado después de 3 segundos
        setTimeout(() => {
          setIsCopiedLink(false)
        }, 3000)
      }
    } catch(error) {
      console.error('Error copying link', error)
      alert('No se pudo copiar el enlace. inténtelo de nuevo.')
    }
  }

  // const copyLink = () => {
  //   const url = `${window.location.origin}/nvrztest`
  //   navigator.clipboard.writeText(url)

  //   setIsCopiedLink(true)
  // }

  return (
    <div className="bg-indigo-100 rounded-3xl">
      <div className="flex flex-col justify-center text-center py-4 px-4 items-center gap-2 md:flex-row md:justify-between md:text-left">
        <span className="text-sm">
          <span>🔥 Your nvrzTreeClone is live: </span> {origin}
          / @nvrzTest
        </span>

        <Button 
          variant='outline'
          className="rounded-full px-4 bg-white font-semibold text-xs md:text-[16px]"
          onClick={copyLink}
          disabled={isCopiedLink}
        >
          {isCopiedLink ? 'Copied!' : 'Copy your nvrzTree URL'}
      </Button>
      </div>
    </div>
  )
}