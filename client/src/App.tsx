import './App.css';
import useGetCommentsBySuggestionID from './queries/useGetCommentsBySuggestionID';
import useGetSuggestions from './queries/useGetSuggestions';

function App() {
  const { suggestions } = useGetSuggestions();
  const { comments } = useGetCommentsBySuggestionID(1);
  console.log(suggestions);
  console.log(comments);
  return <></>;
}

export default App;
