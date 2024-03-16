import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { ConvexClientProvider } from '@/components/providers/convex-provider'
import ModalProvider from '@/components/providers/modal-provider'
import { EdgeStoreProvider } from '@/lib/edgestore'
import { Toaster } from 'sonner'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Akotion',
	description: 'Clone of notion made by Aleksei Kosumov',
	icons: {
		icon: [
			{
				media: '(prefers-color-scheme: light)',
				url: '/white-logo.ico',
				href: '/white-logo.ico',
			},
			{
				media: '(prefers-color-scheme: dark)',
				url: '/dark-logo.ico',
				href: '/dark-logo.ico',
			},
		],
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={inter.className}>
				<ConvexClientProvider>
					<EdgeStoreProvider>
						<ThemeProvider
							attribute='class'
							defaultTheme='system'
							enableSystem
							disableTransitionOnChange
							storageKey='akotion-theme'
						>
							<Toaster position='bottom-center' />
							<ModalProvider />
							{children}
						</ThemeProvider>
					</EdgeStoreProvider>
				</ConvexClientProvider>
			</body>
		</html>
	)
}
