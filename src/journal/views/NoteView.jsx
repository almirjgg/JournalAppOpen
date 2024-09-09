import {
  DeleteOutline,
  SaveOutlined,
  UploadOutlined,
} from '@mui/icons-material';
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import React, { useEffect, useMemo, useRef } from 'react';
import { ImageGallery } from '../components/ImageGallery';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import {
  setActiveNote,
  startDeletingNote,
  startSaveNote,
  startUpoloadFiles,
} from '../../store/journal';
import Swal from 'sweetalert2';

export const NoteView = () => {
  const dispatch = useDispatch();
  const {
    active: note,
    messageSaved,
    isSaving,
  } = useSelector(state => state.journal);
  const { body, title, date, onInputChange, formState } = useForm(note);
  const dateSting = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString();
  }, [date]);

  const fileInputRef = useRef();

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire('Note updated', messageSaved, 'success');
    }
  }, [messageSaved]);

  const onSaveNote = () => {
    dispatch(startSaveNote(formState));
  };

  const onFileInputChange = ({ target }) => {
    if (target.files.length === 0) return;
    dispatch(startUpoloadFiles(target.files));
  };
  const onDeleteNote = () => {
    dispatch(startDeletingNote());
  };
  return (
    <Grid
      container
      direction='row'
      justifyContent='space-between'
      sx={{ mb: 1 }}
      alignItems='center'
    >
      <Grid item>
        <Typography fontSize={39} fontWeight='light'>
          {dateSting}
        </Typography>
      </Grid>
      <Grid item>
        <input
          type='file'
          multiple
          onChange={onFileInputChange}
          style={{ display: 'none' }}
          ref={fileInputRef}
        />
        <IconButton
          color='primary'
          disabled={isSaving}
          onClick={() => fileInputRef.current.click()}
        >
          <UploadOutlined />
        </IconButton>
        <Button
          color='primary'
          sx={{ padding: 2 }}
          onClick={onSaveNote}
          disabled={isSaving}
        >
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>
      <Grid container>
        <TextField
          type='text'
          variant='filled'
          fullWidth
          placeholder='Ingrese un título'
          label='Título'
          sx={{ border: 'none', mb: 1 }}
          name='title'
          value={title}
          onChange={onInputChange}
        />
        <TextField
          type='text'
          variant='filled'
          fullWidth
          multiline
          placeholder='¿Qué sucedió en el día de hoy?'
          minRows={5}
          sx={{ border: 'none', mb: 1 }}
          name='body'
          value={body}
          onChange={onInputChange}
        />
      </Grid>
      <Grid container justifyContent={'end'}>
        <Button onClick={onDeleteNote} sx={{ mt: 2 }} color='error'>
          <DeleteOutline />
          Borrar
        </Button>
      </Grid>
      {/* Image Gallery */}
      <ImageGallery images={note.imageUrls} />
    </Grid>
  );
};
