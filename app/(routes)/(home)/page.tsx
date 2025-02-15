'use client'

import { TreePalm } from "lucide-react";
import { LinkProfile } from "./components/LinkProfile/LinkProfile";
import { useUser } from "@clerk/nextjs";
import { Link, User } from "@prisma/client";
import { useEffect, useState } from "react";
import { LoaderProfile } from "@/components/Shared";
import { StepConfigUserProvider } from "@/contexts";
import { HandleSteps } from "./components";

export default function HomePage() {
  const { user } = useUser()
  const [isFirstVisit, setIsFirstVisit] = useState(false)
  const [reload, setReaload] = useState(false)
  const [infoUser, setInfoUser] = useState<(User & { links: Link[]}) | null>(null)

  useEffect(() => {
    const checkFirstLogin = async () => {
      const response = await fetch("/api/info-user")
      const data = await response.json()
      setInfoUser(data)
      setIsFirstVisit(data.firstLogin)
    }

    checkFirstLogin()

    if (reload) {
      checkFirstLogin()
      setReaload(false)
    }
  }, [user?.id, reload, user])

  if(!user || !infoUser) {
    return <LoaderProfile />
  }

  if (isFirstVisit) {
    return (
      <StepConfigUserProvider>
        <HandleSteps onReload={setReaload} />
      </StepConfigUserProvider>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-[60%_auto] gap-4 px-4">
      <div>
        {/* link profile */}
        <LinkProfile />

        {/* profile info */}
        <div>
          <p>Profile info...</p>
        </div>

        <div className="mt-20 flex flex-col items-center">
          <div className="py-10 text-center justify-center flex flex-col items-center text-gray-400 font-semibold">
            <TreePalm className="h-20 w-20" strokeWidth={1} />
            <p className="font-thin">Show the world who you are.</p>
            <p className="font-thin">Add a link to get started.</p>
          </div>
        </div>
      </div>

      {/* Profile preview */}
      <div>
        <p>Profile preview...</p>
      </div>
    </div>
  )
}