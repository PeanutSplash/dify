'use client'
import type { FC } from 'react'
import classNames from '@/utils/classnames'

type LogoSiteProps = {
  className?: string
}

const LogoSite: FC<LogoSiteProps> = ({
  className,
}) => {
  return (
    <img
      src={'/logo/sign-logo.png'}
      className={classNames('block w-auto md:h-10 h-4', className)}
      alt='logo'
    />
  )
}

export default LogoSite
