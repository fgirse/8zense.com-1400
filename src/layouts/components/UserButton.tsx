import { UserButton } from "@clerk/nextjs";
 
export default function UserBtm() {
  return (
    <div className="h-screen">
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}