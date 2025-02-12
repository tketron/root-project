import Avatar from '@mui/material/Avatar';

interface BackgroundLetterAvatarProps {
  name: string;
}

// Taken from https://mui.com/material-ui/react-avatar/#letter-avatars
// Hashes the name to a unique background color
function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

// Splits the name to display the first letter of the first 1 or 2 words
function stringAvatar(name: string) {
  const splitName = name.split(' ');
  let children;
  if (splitName.length === 1) {
    children = splitName[0][0];
  } else {
    children = `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`;
  }
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children,
  };
}

export default function BackgroundLetterAvatar({
  name,
}: BackgroundLetterAvatarProps) {
  return <Avatar {...stringAvatar(name)} />;
}
