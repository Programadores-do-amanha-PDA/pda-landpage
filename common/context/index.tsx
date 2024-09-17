import React from 'react'

import { ModalProvider } from './modal-context'

const AppProviders = ({ children }: { children: React.ReactNode }) => <ModalProvider>{children}</ModalProvider>

export default AppProviders
