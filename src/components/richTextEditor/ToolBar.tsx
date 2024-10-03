import { Editor } from '@tiptap/react'
import { Toggle } from '../ui/toggle'
import { Bold, Heading2 } from 'lucide-react'

type IToolBar = {
    editor: Editor | null
}
const ToolBar = ({ editor }: IToolBar) => {
    if (!editor) {
        return null
    }
    return (
        <div className='border border-input bg-transparent rounded-md w-20'>
            <Toggle
                size='sm'
                pressed={editor.isActive('heading')}
                onPressedChange={() =>
                    editor.chain().focus().toggleHeading({ level: 2 }).run()
                }
            >
                <Heading2 className='h-4 w-4' />
            </Toggle>

            <Toggle
                size='sm'
                pressed={editor.isActive('bold')}
                onPressedChange={() =>
                    editor.chain().focus().toggleBold().run()
                }
            >
                <Bold className='h-4 w-4' />
            </Toggle>
        </div>
    )
}

export default ToolBar