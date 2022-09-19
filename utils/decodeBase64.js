const fs = require('fs');
const path = require('path');

class DecodeBase64 {
  static async imgBase64(imgBase64, text) {
    let type;
    let extensionType;
    let data;
    if (imgBase64.startsWith('data:')) {
      const found = imgBase64.match(/data:\S*;base64/g);
      data = imgBase64.split(';base64,').pop();
      type = found && found[0].slice('data:'.length, ';base64'.length * -1);
      extensionType = type.split('/')[1];
    } else {
      const extensions = {
        'JVBERi0': 'application/pdf',
        'R0lGODdh': 'image/gif',
        'R0lGODlh': 'image/gif',
        'iVBORw0KGgo': 'image/png',
        '/9j/': 'image/jpg'
      };

      for (let extension in extensions) {
        if (imgBase64.indexOf(extension) === 0) {
          type = extensions[extension];
          data = imgBase64;
          extensionType = type.split('/')[1];
        }
      }
    }
    const regEx = new RegExp(' ', 'g');
    const textWithoutSpace = text.replace(regEx, '');
    const nameFile = `img-${textWithoutSpace}${Date.now().toString()}`;
    const nameFileWhiteExtension = `${nameFile}.${extensionType}`;
    const buffer = Buffer.from(data, 'base64');
    const pathImage = path.join('__dirname', '..', 'img', nameFileWhiteExtension);
    try {
      fs.writeFileSync(pathImage, buffer);
      return { pathImage, nameFile };
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
module.exports = DecodeBase64;
