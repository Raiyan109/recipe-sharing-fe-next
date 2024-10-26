import { AdminHomeComponent } from '@/components/admin/AdminHomeComponent'
import { getUserGrowth } from '@/services/AuthService'

// type IData = {
//     date: string;
//     users: number;
// }

// type IProps = {
//     success: boolean,
//     statusCode: number,
//     message: string,
//     data: IData[]
// }

const AdminHomePage = async () => {
    const userGrowth = await getUserGrowth()
    return (
        <div>
            <AdminHomeComponent userGrowth={userGrowth.data} />
        </div>
    )
}

export default AdminHomePage