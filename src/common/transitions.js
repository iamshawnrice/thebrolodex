var transitions = {
  vertSlideUp: {
    in: {
      start: {
        translateY: '-20px',
        opacity: 0
      },
      end: {
        translateY: 0,
        opacity: 1
      }
    },
    out: {
      translateY: '20px',
      opacity: 0
    }
  },

  vertSlideDown: {
    in: {
      start: {
        translateY: '20px',
        opacity: 0
      },
      end: {
        translateY: 0,
        opacity: 1
      }
    },
    out: {
      translateY: '-20px',
      opacity: 0
    }
  },

  horzSlideLeft: {
    in: {
      start: {
        translateX: '20px',
        opacity: 0
      },
      end: {
        translateX: 0,
        opacity: 1
      }
    },
    out: {
      translateX: '-20px',
      opacity: 0
    }
  },

  horzSlideRight: {
    in: {
      start: {
        translateX: '-20px',
        opacity: 0
      },
      end: {
        translateX: 0,
        opacity: 1
      }
    },
    out: {
      translateX: '20px',
      opacity: 0
    }
  },

  scaleGrow: {
    in: {
      start: {
        scale: '80%',
        opacity: 0
      },
      end: {
        scale: 1,
        opacity: 1
      }
    },
    out: {
      scale: '120%',
      opacity: 0
    }
  },

  scaleShrink: {
    in: {
      start: {
        scale: '120%',
        opacity: 0
      },
      end: {
        scale: 1,
        opacity: 1
      }
    },
    out: {
      scale: '80%',
      opacity: 0
    }
  },

  rotateZRight: {
    in: {
      start: {
        rotateZ: '-20',
        opacity: 0
      },
      end: {
        rotateZ: 0,
        opacity: 1
      }
    },
    out: {
      rotateZ: '20',
      opacity: 0
    }
  },

  rotateZLeft: {
    in: {
      start: {
        rotateZ: '20',
        opacity: 0
      },
      end: {
        rotateZ: 0,
        opacity: 1
      }
    },
    out: {
      rotateZ: '-20',
      opacity: 0
    }
  },

  rotateYLeft: {
    in: {
      start: {
        rotateY: '180',
        opacity: 0
      },
      end: {
        rotateY: 0,
        opacity: 1
      }
    },
    out: {
      rotateY: '-180',
      opacity: 0
    }
  },

  rotateYRight: {
    in: {
      start: {
        rotateY: '-180',
        opacity: 0
      },
      end: {
        rotateY: 0,
        opacity: 1
      }
    },
    out: {
      rotateY: '180',
      opacity: 0
    }
  }
}

module.exports = transitions;
