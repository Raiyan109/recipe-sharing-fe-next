/* eslint-disable @typescript-eslint/no-unused-vars */

type IProps = {
    fillAdminCredentials: () => void;
    fillUserCredentials: () => void;
}

const DummyAdminCred = ({ fillUserCredentials, fillAdminCredentials }: IProps) => {
    return (
        <div className="bg-foreground/90 w-full md:w-96 h-36 md:h-40 rounded-lg flex items-start justify-center flex-col">
            {/* onClick={fillAdminCredentials} */}
            <div className="card__content px-2 mb-2" >

                <h3 className='text-sm md:text-xl text-card font-semibold mb-1'>Admin Credentials for test</h3>
                <div className="flex items-center gap-2">
                    <p className='text-base mb-1 md:mb-1 text-card'>Email: admin1@g.com</p>
                    <p className='text-base mb-0 md:mb-1 text-card'>Pass: 1234567</p>
                </div>
            </div>
            {/* onClick={fillUserCredentials} */}
            <div className="card__content px-2" >
                <h3 className='text-sm md:text-xl text-card font-semibold mb-1'>User Credentials for test</h3>
                <div className="flex items-center gap-2">
                    <p className='text-base mb-1 md:mb-1 text-card'>Email: user2@g.com</p>
                    <p className='text-base mb-0 md:mb-1 text-card'>Pass: 123456</p>
                </div>
            </div>
        </div>
    )
}

export default DummyAdminCred