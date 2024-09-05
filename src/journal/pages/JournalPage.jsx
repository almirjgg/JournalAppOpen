import { IconButton } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';
import { AddOutlined } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { startNewNote } from '../../store/journal/thunks';

export const JournalPage = () => {
  const { isSaving, active } = useSelector(state => state.journal);
  const dispatch = useDispatch();

  const onClickNewNote = () => {
    dispatch(startNewNote());
  };

  return (
    <JournalLayout>
      {!!active ? <NoteView /> : <NothingSelectedView />}
      <IconButton
        onClick={onClickNewNote}
        disabled={isSaving}
        sizze='large'
        sx={{
          position: 'fixed',
          bottom: 50,
          right: 50,
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
