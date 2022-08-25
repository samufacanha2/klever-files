import { IFile } from 'types';

const file: IFile = {
  name: 'Image',
  extension: 'png',
  hash: 'eb01b9204d6ea3568daa4436a977c6161c37dd26e29a1c8e184058e81e934cbd',
  size: 42000,
};

const files: IFile[] = [];

for (let i = 0; i < 4; i++) {
  files.push(file);
}

export default files;
