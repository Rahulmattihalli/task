import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { RichEditor } from '../components/EditorComponent/RichEditorComponent';
import { ViewPostComponent } from '../components/EditorComponent/ViewPostComponent';
import { useStore } from '../context/context';

export const Editor = observer(() => {
  const { editorStateStore } = useStore();

  const handleSave = (value: string) => {
    editorStateStore.newEditorState(value);
  };

  return (
    <>
      <RichEditor
        placeholder="What's on your mind?"
        savedState={editorStateStore.value}
        onSave={(value: string) => handleSave(value)}
      ></RichEditor>
      {editorStateStore.value.length > 0 && <ViewPostComponent savedState={editorStateStore.value}></ViewPostComponent>}
    </>
  );
});
