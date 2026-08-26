particlesJS('particles-js', {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: '#00ff08' // Cor das bolinhas
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000'
      },
    },
    opacity: {
      value: 0.5,
      random: false
    },
    size: {
      value: 4,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#00ff08',
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 4,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      attract: {
        enable: false
      }
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'grab' // Efeito ao passar o mouse
      },
      onclick: {
        enable: true,
        mode: 'push'
      },
    },
    modes: {
      grab: {
        distance: 165,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
    }
  },
  retina_detect: true
});