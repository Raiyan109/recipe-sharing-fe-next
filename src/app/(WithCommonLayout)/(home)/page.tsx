import UsersAvatars from "@/components/home/usersAvatars/UsersAvatars"
import { getAllUsers } from "@/services/AuthService"



const HomePage = async () => {
  const users = await getAllUsers()
  return (
    <div>
      <UsersAvatars users={users?.data} />
    </div>
  )
}

export default HomePage