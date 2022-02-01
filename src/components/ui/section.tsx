import * as React from 'react'
import { motion, MotionProps } from 'framer-motion'
import {
  chakra,
  ChakraProps,
  ComponentWithAs,
  forwardRef,
} from '@chakra-ui/react'

export type DivProps = Omit<ChakraProps, keyof MotionProps> &
  MotionProps & { as?: React.ElementType }

type SectionProps = {
  delay?: number
}

const SectionDiv = motion(
  forwardRef<ChakraProps, 'div'>(({ children, ...props }, ref) => (
    <chakra.div ref={ref} {...(props as ChakraProps)}>
      {children}
    </chakra.div>
  ))
) as ComponentWithAs<'div', DivProps>

const Section: React.FC<SectionProps> = ({ children, delay = 0 }) => {
  return (
    <SectionDiv
      initial={{ y: 12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      mb={12}
    >
      {children}
    </SectionDiv>
  )
}

export default Section
