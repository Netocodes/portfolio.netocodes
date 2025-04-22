import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  
  export const AvatarDemo = () => {
    return (
      <Avatar>
        <AvatarImage src="..\assets\avatar.png" alt="@Netocodes" />
        <AvatarFallback>Nc</AvatarFallback>
      </Avatar>
    )
  }
  