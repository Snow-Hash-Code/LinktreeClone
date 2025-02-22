import { useState } from "react";
import { RemoveSocialNetworkProps } from "./RemoveSocialNetworkProps";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useUserInfo } from "@/hooks/useUser";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { DialogDescription } from "@radix-ui/react-dialog";

export function RemoveSocialNetwork(props: RemoveSocialNetworkProps) {
  const { linkId, onReload } = props
  const [showDialog, setShowDialog] = useState(false)

  const { reloadUser } = useUserInfo()

  const onDelete = async () => {
    await axios.delete(`/api/social-network/${linkId}`)

    onReload(true)
    setShowDialog(false)
    reloadUser()
  }

  return (
    <Dialog open={showDialog} onOpenChange={setShowDialog}>
      <DialogTrigger asChild>
        <Button variant='destructive'>
          <Trash className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex flex-col gap-4">
          <DialogTitle>Delete</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this social network?
          </DialogDescription>
          <div className="flex gap-4">
            <Button variant='destructive' onClick={onDelete} className="w-[50%]">Delete</Button>
            <Button variant='outline' onClick={() => setShowDialog(false)} className="w-[50%]">Cancel</Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}