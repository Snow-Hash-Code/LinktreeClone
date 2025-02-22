import { Link } from "@prisma/client"

export type RemoveSocialNetworkProps = {
  linkId: Link["id"],
  onReload: React.Dispatch<React.SetStateAction<boolean>>
}