"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}  // Disable system theme detection
      disableTransitionOnChange={true}
      forcedTheme="dark"    // Force dark theme always
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}