import { useParams } from "react-router-dom";
import ArticleDetail from "./ArticleDetailView";

const ArticleView = () => {
  let { articleID } = useParams();

  return <ArticleDetail articleID={articleID} />;
};
export default ArticleView;
