import { ImageEditorState } from './ImageEditorState';
import { ImageFormat } from './ImageFormat';
import { Memento } from './Memento';

export class ConcreteMemento implements Memento {
  constructor(
    private name: string,
    private date: Date,
    private state: ImageEditorState,
  ) {}

  getName(): string {
    return this.name;
  }

  getDate(): Date {
    return this.date;
  }

  getFilePath(): string {
    return this.state.filePath;
  }

  getFileFormat(): ImageFormat {
    return this.state.fileFormat;
  }
}
