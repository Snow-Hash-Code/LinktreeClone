import { Ellipsis, TreePalm } from "lucide-react";
import { MoreInfoProfileProps } from "./MoreInfoProfile.types";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image";
import { SocialLinks } from "./SocialLinks";


export function MoreInfoProfile(props: MoreInfoProfileProps) {
  const { user } = props

  return (
    <div className="max-w-lg w-full mx-auto flex items-end justify-end">
      <Dialog>
        <DialogTrigger asChild>
          <div className="bg-slate-400 p-2 rounded-full opacity-90 hover:opacity-70 cursor-pointer">
            <Ellipsis strokeWidth={1} className="text-white" />
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Share NvrzTreeClone</DialogTitle>
            <div className="gap-4 py-4">
              <div className="p-4 rounded-lg bg-teal-800 text-white flex flex-col items-center jusitfy-center">
                <Image src={user.avatarUrl || 'avatar.png'} alt="Avatar" width={96} height={96} className="rounded-full aspect-square object-cover" />

                <p className="font-semibold text-2xl">@{user.username}</p>
                <div className="flex gap-1 font-semibold">
                  <TreePalm className="w-5 h-5"/>
                  {user.username}
                </div>
              </div>

              <SocialLinks userName={user.username} />
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}