import { Component, ViewChild } from '@angular/core';
import {
	MonacoEditorComponent,
	MonacoEditorConstructionOptions,
	MonacoEditorLoaderService,
	MonacoStandaloneCodeEditor
} from '@materia-ui/ngx-monaco-editor';

@Component({
  selector: 'app-text-editor',
	templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @ViewChild(MonacoEditorComponent, { static: false }) monacoComponent: MonacoEditorComponent;
	
	userCode: string = "var a = 2";
	userLanguage: string = "javascript";
	availableLanguages: string[] = [
		"javascript",
		"html",
		"css"
	];
	userTheme: string = "vs-dark";
	editorOptions: MonacoEditorConstructionOptions = {
		theme: this.userTheme,
		language: this.userLanguage,
		roundedSelection: true,
		autoIndent: true
	};
	editor: MonacoStandaloneCodeEditor;

	constructor(private monacoLoaderService: MonacoEditorLoaderService) {
	}

	ngOnInit(): void { }

	editorInit(editor: MonacoStandaloneCodeEditor) {
		this.editor = editor
	}

	changeLanguage($event) {
		this.editorOptions = {...this.editorOptions, language: $event.currentTarget.value}
	}
}
