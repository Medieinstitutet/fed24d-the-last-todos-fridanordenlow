import { Paper, Typography } from '@mui/material';

const Header = () => {
  return (
    <>
      <Paper
        elevation={3}
        sx={{
          padding: '1.5rem 2rem',
          borderRadius: '4px',
          marginBottom: '2rem',
          textAlign: 'center',
          //   background: '#5d697b',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 600,
            color: '#d8754a',
            // color: '#e0a561',
            // color: '#9cc78a',
          }}
        >
          The Last Todos To Do
        </Typography>
      </Paper>
    </>
  );
};

export default Header;
