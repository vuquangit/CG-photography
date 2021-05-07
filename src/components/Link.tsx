import React, { FC } from 'react'
import NextLink from 'next/link'

type PropsType = {
  children: React.ReactNode
  href: string
  ref?: any
}

// `onClick`, `href`, and `ref` need to be passed to the DOM element
// for proper handling
const Link = React.forwardRef(({ onClick, href, children }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      {children}
    </a>
  )
})

export default Link


// const LinkWrapper = React.forwardRef((props, ref) => {
//   const { children, refas, ...restProps } = props

//   if (refas) {
//     props[refas] = ref;
//   }

//   return (
//     <>
//       {
//         React.isValidElement(children)
//         ? React.Children.map(children, child =>  React.cloneElement(child, props, null))
//         : null
//         }
//     </>
//   );
// })

// // const LinkWrapper = React.forwardRef(LinkWrap);

// const Link: FC<PropsType> = ({ refas, children, ...props }) => {
//   return (
//     <NextLink {...props}>
//       <LinkWrapper refas={refas}>{children}</LinkWrapper>
//     </NextLink>
//   );
// }

// export default Link
