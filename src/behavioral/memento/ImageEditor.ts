import { ConcreteMemento } from './ConcreteMemento';
import { Memento } from './Memento';
import { ImageFormat } from './ImageFormat';

export class ImageEditor {
  constructor(private filePath: string, private fileFormat: ImageFormat) {}

  convertFormatTo(format: ImageFormat): void {
    this.fileFormat = format;
    this.filePath = this.filePath.split('.').slice(0, -1).join('');
    this.filePath += '.' + format;
  }

  save(): Readonly<Memento> {
    const date = new Date();
    const { filePath, fileFormat } = this;

    return new ConcreteMemento(date.toISOString(), date, {
      filePath,
      fileFormat,
    });
  }

  restore(memento: Memento): void {
    const concreteMemento = memento as ConcreteMemento;

    this.filePath = concreteMemento.getFilePath();
    this.fileFormat = concreteMemento.getFileFormat();
  }
}
