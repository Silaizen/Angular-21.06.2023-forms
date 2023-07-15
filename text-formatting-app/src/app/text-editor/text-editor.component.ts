import { Component } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent {
  inputText: string = '';
  textStyles: any = {};

  applyStyle(style: string) {
    if (style === 'bold') {
      this.textStyles['font-weight'] = 'bold';
    } else if (style === 'italic') {
      this.textStyles['font-style'] = 'italic';
    } else if (style === 'underline') {
      this.textStyles['text-decoration'] = 'underline';
    }
  }
}
