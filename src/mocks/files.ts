import { IFile } from 'types';

import file from './file.json';

const files: IFile[] = [];

for (let i = 0; i < 2; i++) {
  files.push({
    ...file,
    hash: `${file.hash}-${i}`,
  });
}

export default files;
