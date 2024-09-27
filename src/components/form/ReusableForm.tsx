import { ReactNode } from "react"
import { FormProvider, SubmitHandler, useForm } from "react-hook-form"

interface FormConfig {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    defaultValues?: Record<string, any>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver?: any;
}

interface IProps extends FormConfig {
    children: ReactNode;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSubmit: SubmitHandler<any>
}

const ReusableForm = ({ children, onSubmit, defaultValues, resolver, }: IProps) => {

    const formConfig: FormConfig = {}

    if (!!defaultValues) {
        formConfig['defaultValues'] = defaultValues
    }

    if (!!resolver) {
        formConfig['resolver'] = resolver
    }
    const methods = useForm(formConfig)

    const submitHandler = methods.handleSubmit
    return (
        <FormProvider {...methods}>
            <form onSubmit={submitHandler(onSubmit)}>
                {children}
            </form>
        </FormProvider>
    )
}

export default ReusableForm