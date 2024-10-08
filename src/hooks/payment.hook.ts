import { createPayment } from "@/services/PaymentService";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useCreatePayment = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return useMutation<any, Error, { recipe: string, payableAmount: number }>({
        mutationKey: ["CREATE_PAYMENT"],
        mutationFn: async ({ recipe, payableAmount }) => await createPayment(recipe, payableAmount),
        onSuccess: (data) => {
            toast.success("Payment created successful.");
            window.location.href = data.data.paymentSession.payment_url
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });
};