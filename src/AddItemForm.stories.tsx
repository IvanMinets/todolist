import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import type {Meta, StoryObj} from '@storybook/react';


import {AddItemForm, AddItemFormPropsType} from './AddItemForm';
import {action} from '@storybook/addon-actions'
import TextField from '@mui/material/TextField/TextField';
import {IconButton} from '@mui/material';
import {AddBox} from '@mui/icons-material';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof AddItemForm> = {
    title: 'TODOLISTS/AddIItemForm',
    component: AddItemForm,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // помогает описывать пропсы или ограничить их количество
    argTypes: {
        addItem: {
            description: 'Button clicked inside form',
            // action: 'clicked'
        }
    },
    // Здесь задаются/ описываются пропсы (также можно использовать ниже)
};

export default meta;
type Story = StoryObj<typeof AddItemForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// Story - компонент с определенным набором пропсов
export const AddItemFormStory: Story = {
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    args: {
        addItem: action('Button clicked inside form')
    }
};

export const AddItemFormError: React.FC<AddItemFormPropsType> = (props) => {
    let [title, setTitle] = useState('')
    let [error, setError] = useState<string | null>('Title is required')

    const addItem = () => {
        if (title.trim() !== '') {
            props.addItem(title);
            setTitle('');
        } else {
            setError('Title is required');
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (error !== null) {
            setError(null);
        }
        if (e.charCode === 13) {
            addItem();
        }
    }

    return <div>
        <TextField variant="outlined"
    error={!!error}
    value={title}
    onChange={onChangeHandler}
    onKeyPress={onKeyPressHandler}
    label="Title"
    helperText={error}
    />
    <IconButton color="primary" onClick={addItem}>
        <AddBox/>
        </IconButton>
        </div>
}

export const AddItemFormErrorStory: Story = {
    render: (args) => <AddItemFormError addItem={args.addItem}/>
}