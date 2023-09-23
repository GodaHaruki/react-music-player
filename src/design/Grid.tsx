export const gridClassName = "grid grid-cols-12 gap-4"

export const Grid: React.FC<{children: React.ReactNode, className?: string}>
= ({children, className = "w-full"}) => {
  return (
    <div className={`${gridClassName} ${className}`}>
      {children}
    </div>
  )
}

export const GridItem1: React.FC<{children: React.ReactNode, className?: string}>
= ({children, className = "w-full"}) => {
  return (
    <div className={`col-span-full ${className}`}>
    {children}
    </div>
  )
}

export const GridItem2: React.FC<{children: React.ReactNode, className?: string}>
= ({children, className = "w-full"}) => {
  return (
    <div className={`col-span-6 ${className}`}>
    {children}
    </div>
  )
}

export const GridItem3: React.FC<{children: React.ReactNode, className?: string}>
= ({children, className = "w-full"}) => {
  return (
    <div className={`col-span-4 ${className}`}>
    {children}
    </div>
  )
}

export const GridItem4: React.FC<{children: React.ReactNode, className?: string}>
= ({children, className}) => {
  return (
    <div className={`col-span-3 ${className}`}>
    {children}
    </div>
  )
}

export const GridItem6: React.FC<{children: React.ReactNode, className?: string}>
= ({children, className = "w-full"}) => {
  return (
    <div className={`col-span-2 ${className}`}>
    {children}
    </div>
  )
}