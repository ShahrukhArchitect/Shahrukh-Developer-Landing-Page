"use client";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false} // Manually control ke liye false rakhein ya true karein system settings ke liye
        >
            {children}
        </ThemeProvider>
    );
}