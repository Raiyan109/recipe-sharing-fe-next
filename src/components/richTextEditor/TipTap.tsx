import { EditorContent, useEditor } from '@tiptap/react'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import ToolBar from './ToolBar'
import Heading from '@tiptap/extension-heading'
import Bold from '@tiptap/extension-bold'
import Image from '@tiptap/extension-image'



type ITipTap = {
    description: string;
    onChange: (richText: string) => void
    inputClass: string
}

const TipTap = ({ description, onChange, inputClass }: ITipTap) => {

    const editor = useEditor({
        extensions: [
            Document,
            Paragraph,
            Text,
            Image.configure({
                allowBase64: true,
                inline: true,
            }),
            Bold.configure({
                HTMLAttributes: {
                    class: 'font-bold',
                },
            }),
            Heading.configure({
                HTMLAttributes: {
                    class: 'text-xl font-bold',
                    levels: [2],
                }
            }),
        ],
        content: description,
        editorProps: {
            attributes: {
                class: `rounded-md border border-input ${inputClass}`
            }
        },
        onUpdate({ editor }) {
            onChange(editor.getHTML())
            // console.log(editor.getHTML())
        }
    })

    return (
        <div className='flex flex-col gap-3'>
            <ToolBar editor={editor} />
            <EditorContent editor={editor} />
        </div>
    )
}

export default TipTap