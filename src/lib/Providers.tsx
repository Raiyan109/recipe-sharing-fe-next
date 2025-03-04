"use client"
import UserProvider from "@/context/user.provider"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()


export function Providers({ children, ...props }: ThemeProviderProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <UserProvider>
                <Toaster />
                <NextThemesProvider {...props}>
                    {children}
                </NextThemesProvider>
            </UserProvider>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )

}

// export default Providers