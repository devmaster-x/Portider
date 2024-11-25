// Container
export const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      delay: .2
    }
  },
  exit: {
   x: '-100vw',
    transition: {
      ease: 'easeInOut'
    }
  }
}

export const headerVariants = {
  hidden: {
    y: -150,
    opacity: 0
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffiness: 100,
      delay: .3
    }
  }
}

// Button
export const buttonVariants = {
  hover: {
    scale: 1.1,
    boxShadow: '0 0 0.5rem whitesmoke',
    transition: {
      yoyo: 3,
      duration: .28
    }
  }
}

export const subContainerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: 'spring',
      when: "beforeChildren",
      duration: 10
    }
  }
}

export const childrenVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}

export const scaleVariants = {
  hidden: {
    scale: 0
  },
  visible: {
    scale: 1
  },
  exit: {
    scale: 0
  }
}

export const logoVariants = {
  visible: {
    scale: [1,.9],
    boxShadow: ['1px 1px 10px 1px gray','2px 2px 10px 2px darkgray']
  },
  transition: {
    repeat: Infinity,
    repeatDelay: .5,
    duration: 3
  }
}