"use client"

import toast, { Toaster } from 'react-hot-toast';
import { FC, PropsWithChildren } from 'react'

export interface ReactToastWrapperProps extends PropsWithChildren {}

export const ReactToastWrapper: FC<ReactToastWrapperProps> = ({ children }) => {
  return <>
  <Toaster 
    position='top-right'
  />
  {children}
  </>
}
