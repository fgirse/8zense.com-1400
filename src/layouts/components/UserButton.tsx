import { UserButton } from "@clerk/nextjs";
 
export default function UserBtm() {
  return (
    <div className="bg-white">
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}