import { ImageEditor } from './ImageEditor';
import { ImageEditorBackupManager } from './ImageEditorBackupManager';

const imageEditor = new ImageEditor('/media/image.png', 'png');
const backupManager = new ImageEditorBackupManager(imageEditor);

backupManager.backup();
imageEditor.convertFormatTo('jpg');

backupManager.backup();
imageEditor.convertFormatTo('gif');

backupManager.undo();
backupManager.undo();
backupManager.undo();

console.log(imageEditor);
