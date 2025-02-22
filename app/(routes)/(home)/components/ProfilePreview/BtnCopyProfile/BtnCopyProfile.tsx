import { Button } from "@/components/ui/button"
import { useUserInfo } from "@/hooks/useUser"
import { useEffect, useState } from "react"

export function BtnCopyProfile() {
  const [isCopyProfile, setIsCopyProfile] = useState(false)
  const [origin, setOrigin] = useState('')
  const { user } = useUserInfo()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setOrigin(window.location.origin)
    }
  }, [])

  if (!user) return null

  const copyLink = async () => {
    try {
      if (typeof window !== 'undefined') {
        const url = `${origin}/${user.username}`
        await navigator.clipboard.writeText(url)
        setIsCopyProfile(true)

        setTimeout(() => {
          setIsCopyProfile(false)
        }, 2000)
      }
    } catch (error) {
      console.error('Error copying link', error)
      alert('Could not copy the link. Try again.')
    }
  }

  return (
    <div className="pl-6 mt-6">
      <div className="border py-2 rounded-full flex justify-between items-center">
        <span className="pl-4">
          {window.location.origin}/<span className="font-semibold">{user.username}</span>
        </span>
        <Button className="bg-[#d2e823] py-1 px-2 text-black font-semibold hover:bg-[#d2e823] rounded-full"
        onClick={copyLink}
        disabled={isCopyProfile}
        >{isCopyProfile ? 'Copied' : 'Copy'}</Button>
      </div>
    </div>
  )
}