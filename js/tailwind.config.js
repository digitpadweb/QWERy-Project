tailwind.config = {
    theme: {
      extend: {
        colors: {
          color01: '#FFC178',
          color02: '#FFA343',
          color03: '#FFD1A0',
        },
        maxWidth: {
            'container': '1360px',
        },
        backgroundImage: {
          'hero': "url('./images/banner.png')",
        },
        fontFamily: {
            'sans': ['Open Sans'],
          },
        animation: {
            'siam': 'siam 1s infinite alternate linear',
            'habib': 'habib 1s infinite alternate linear',
        },
        keyframes: {
          siam: {
            'from':{
                top: "-10px",
            },
            'to': {
                top: "-30px",
              },
          }
          
        },
        },
        keyframes: {
        habib: {
          'from':{
              right: "-10px",
          },
          'to': {
             right: "-20px",
            },
        }
        
      }
      
        

    }
  }
