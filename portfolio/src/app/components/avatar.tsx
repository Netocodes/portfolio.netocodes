import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  import AvatarImg from "../assets/avatar.png"
  export const AvatarDemo = () => {
    // console.log(AvatarImg)
    // we are using next/image so we need to use src property to get the image path
    return (
      <Avatar>
        <AvatarImage className="" src={AvatarImg.src} alt="@Netocodes" />
     
        <AvatarFallback>Nc</AvatarFallback>
      </Avatar>
    )
  }
  