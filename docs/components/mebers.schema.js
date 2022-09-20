module.exports = {
  Member: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        example: 'Marita Gomez'
      },
      facebookUrl: {
        type: 'string',
        example: 'Marita_Gomez'
      },
      instagramUrl: {
        type: 'string',
        example: 'MaritaGomez'
      },
      linkedinUrl: {
        type: 'string',
        example: 'Marita-Gomez'
      },
      image: {
        type: 'string',
        example: 'https://drive.google.com/drive/u/0/folders/1OVhs9sXHQ1jgfOWHztOTSSmpq4QKCH4q'
      },
      description: {
        type: 'string',
        example: 'Fundadora Marita estudió la carrera de nutrición y se especializó en nutrición infantil'
      }
    }
  }
};
