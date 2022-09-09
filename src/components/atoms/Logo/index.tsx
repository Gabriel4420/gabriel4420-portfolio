import Image from 'next/image'
import { FC } from 'react'

interface LogoProps {
  source: string
  height: string
  width: string
  alt: string
}

const Logo: FC<LogoProps> = ({ source, height, width, alt }: LogoProps) => {
  return <Image src={source} width={height} height={width} alt={alt} />
}

export default Logo
